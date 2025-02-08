"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { galleryImageFormSchema } from '@/lib/formSchema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Computer, HardDrive, Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { error } from 'console';

interface Props {
  category: GalleryCategoryType[];
  data?: any;
}

declare global {
  interface Window {
    gapi: any;
  }
}

const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
const API_KEY = "YOUR_GOOGLE_API_KEY";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

const GalleryImageForm = ({ category, data }: Props) => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [driveImages, setDriveImages] = useState<string[]>([]);
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const form = useForm<z.infer<typeof galleryImageFormSchema>>({
    resolver: zodResolver(galleryImageFormSchema),
    defaultValues: {
      description: '',
      categoryId: '',
    },
  });

  const isSubmitting = form.formState.isSubmitting;


  useEffect(() => {
    const loadGapi = () => {
      const script = document.createElement('script');
      script.src = "https://apis.google.com/js/api.js";
      script.async = true;
      script.onload = () => {
        window.gapi.load('client:auth2', async () => {
          await window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          });
          setGapiLoaded(true);
        });
      };
      document.body.appendChild(script);
    };

    loadGapi();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };
  

  const handleGoogleAuth = async () => {
    if (!gapiLoaded) return;
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    const user = await GoogleAuth.signIn();
    setAuthToken(user.getAuthResponse().access_token);
    handleDrivePicker(user.getAuthResponse().access_token);
  };

  const handleDrivePicker = (token: string) => {
    if (!window.gapi) return;
    window.gapi.load('picker', () => {
      const picker = new window.gapi.picker.PickerBuilder()
        .addView(window.gapi.picker.ViewId.DOCS_IMAGES)
        .setOAuthToken(token)
        .setCallback((data: any) => {
          if (data.action === window.gapi.picker.Action.PICKED) {
            const selectedFiles = data.docs.map((doc: any) => doc.url);
            setDriveImages(selectedFiles);
          }
        })
        .build();
      picker.setVisible(true);
    });
  };

  const onSubmit = async (values: z.infer<typeof galleryImageFormSchema>) => {
    if(files.length <= 0 && driveImages.length <= 0){
      return form.setError("images", {message: "Can not be empty"} )
    }
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('images', file));
      driveImages.forEach((url) => formData.append('driveImages', url));
      formData.append('description', values.description);
      formData.append('categoryId', values.categoryId);

      const response = await fetch('/api/gallery', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload');
      const data = await response.json()
      form.reset()
      setFiles([])
      setDriveImages([])

      toast({ title: data.message, variant: 'success' });
    } catch (error) {
      console.error(error);
      toast({ title: 'Upload failed', variant: 'destructive' });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Add Images</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl max-h-[550px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Images</DialogTitle>
          <DialogDescription>Add images to your gallery here</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Blog Image</FormLabel>
                  <FormControl>
                  <Input type="text" placeholder="Image description..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the blog image.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Image Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose gallery category" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {category.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This is the image category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <Plus size={20}/>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem className="flex gap-2 bg-seep-color hover:!bg-blue-500 p-1 !text-white cursor-pointer">
                        <Label htmlFor="computerImages"  className='flex items-center gap-3 cursor-pointer'>
                            <Computer/>
                            Upload from Computer
                        </Label>
                    </DropdownMenuItem>
              <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-2 bg-seep-color hover:!bg-blue-500 p-1 !text-white cursor-pointer" onClick={(e) => e.preventDefault()}>
                        <Label className='flex items-center gap-3 cursor-pointer' onClick={handleGoogleAuth}>
                            <HardDrive/>
                            Upload from Google Drive
                        </Label>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                    <Input type="file" multiple accept="image/*" name='computerImages' className='hidden' id='computerImages' onChange={handleFileChange} />
                  </FormControl>
                  <FormDescription>
                   
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {files.length >= 1 &&
            <p>{files.length} images selected</p>
            }
            </div>


            <Button type="submit" disabled={isSubmitting} className='w-full'>
              {isSubmitting ? 'Submitting...' : data ? 'Edit Gallery' : 'Submit'}
            </Button>
            </form>
            </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryImageForm;
