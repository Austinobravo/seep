"use client"
import { useAllContext } from '@/hooks/useContextHook';
import Image from 'next/image';
import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { formatDateToString } from '@/lib/globals';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { useMediaQuery } from '@/hooks/use-media-query';
import PostForm from './PostForm';

const PostTable = ({category}: {category:CategoryType[]}) => {
    const {post, clearPost, addPost} = useAllContext()
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [singleNews, setSingleNews] = React.useState<NewsType | undefined>(undefined)
    const [open, setOpen] = React.useState<boolean>(false);  
    const { toast } = useToast()    
        React.useEffect(() => {
            const fetchUpdatedCategories = async () => {
              const response = await fetch('/api/news');
              const data = await response.json();
              clearPost();
              data.forEach((post: NewsType) => addPost(post));
            };
          
            fetchUpdatedCategories();
          }, []);

        const deleteNews = async (id: string) => {
            try{
                const response = await axios.delete(`/api/news/${id}`,)
                toast({
                description: response.data.message,
                variant: "success"
                })
                
                const updatedNews = post.filter((item) => item.id !== id)
                clearPost();
                updatedNews.forEach((news: NewsType) => addPost(news));
            
            }catch(error:any){
                toast({
                    description: error.response.data.message,
                    variant: "destructive"
                })
            }
        }

        const getSingleNews = async (id: string) => {
            try{
              const response = await axios.get(`/api/news/${id}`,)
              setSingleNews(response.data)
              setOpen(true); 
              
            }catch(error:any){
                toast({
                  description: error.response.data.message,
                  variant: "destructive"
              })
            }
          }
        
  return (
    <>
    {post.reverse().map((post) => (
        <div key={post.id} className='border p-2 rounded-lg  shadow '>
                    <div style={{'backgroundImage': `url(${encodeURI(post.image)}`}} className='bg-center bg-cover h-40 w-full bg-no-repeat  items-end flex '>
                        <div className='gap-2 text-white text-sm items-end flex bg-gradient-to-b from-transparent via-[#0097FF] to-[#0097FF] w-full p-2'>
                            <Image src={`/images/avatar.webp`} width={500} height={500} alt='detail' className='rounded-2xl w-10 h-10 shadow'/>
                            <h3 className='font-semibold'>{post.user.firstName} {post.user.lastName}</h3>
                            <span className='text-xs'>{formatDateToString(post.createdAt)}</span> 
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='py-5 !pb-4 overflow-y-auto no-scrollbar'>
                            <h4 className='font-semibold'>{post.title}</h4>
                            <div className='line-clamp-3'>
                                <h5 className='font-light opacity-80'> {post.newsContent[0]?.paragraph ? post.newsContent[0]?.paragraph : <div dangerouslySetInnerHTML={{__html: post?.otherOptions}}/>}</h5>

                            </div>
                        </div>
                        <div className='flex justify-between flex-wrap gap-y-3 '>
                            <div className='flex  justify-between seep-text-color gap-3 flex-wrap '>
                                <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-2 items-center'>
                                    <span>24.5k</span>
                                </div>

                                <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-2 items-center'>
                                    
                                    <span>206</span>
                                </div>
                                
                            </div>
                            <div className='flex ml-auto w-fit items-center gap-2'>
                                <Edit className='seep-text-color size-6 cursor-pointer' onClick={() => getSingleNews(post.id)}/>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Trash2 className='text-red-500 size-6 cursor-pointer'/>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Delete this?</DialogTitle>
                                        <DialogDescription>
                                        This is a permanent action. Are you sure?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className='flex gap-5 w-fit ml-auto'>
                                        <DialogClose>
                                            Cancel
                                        </DialogClose>
                                        <Button type='button' variant={'destructive'} onClick={()=>deleteNews(post.id)}  className='border-0'>Delete</Button>

                                    </div>
                                    </DialogContent>
                                    
                                </Dialog>
                                {isDesktop ?
                                    <Dialog open={open} onOpenChange={setOpen}>
                                    <DialogTrigger asChild>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto no-scrollbar">
                                    <DialogHeader>
                                        <DialogTitle>Edit News</DialogTitle>
                                        <DialogDescription>Modify the news details below.</DialogDescription>
                                    </DialogHeader>
                                        <PostForm category={category} news={singleNews} setOpen={setOpen}/>
                                    </DialogContent>
                                    
                                    </Dialog>
                                    :
                                    <Drawer open={open} onOpenChange={setOpen}>
                                    <DrawerTrigger asChild>
                                        
                                    </DrawerTrigger>
                                    <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                                        <div className="z-[51]">
                                        <DrawerHeader className="!text-center">
                                        <DrawerTitle>Add News</DrawerTitle>
                                        <DrawerDescription>
                                            Make changes to your news here.
                                        </DrawerDescription>
                                        </DrawerHeader>
                                        <PostForm category={category} news={singleNews} setOpen={setOpen}/>
                                        <DrawerFooter className="pt-2">
                                        </DrawerFooter>

                                        </div>
                                    </DrawerContent>
                                    </Drawer>
                                    }
                                    
                            </div>
                        </div>

                    </div>
        </div>

    ))}
    </>
  )
}

export default PostTable
