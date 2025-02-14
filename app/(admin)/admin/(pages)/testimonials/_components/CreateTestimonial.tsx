"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import {useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TestimonialForm from "./TestimonialForm"

export function CreateTestimonial() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-seep-color text-white hover:text-black transition-all duration-500">Create Testimonial</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
          <DialogHeader className="!text-center">
            <DialogTitle>Add Testimonial</DialogTitle>
            <DialogDescription>
           
            </DialogDescription>
          </DialogHeader>
          <TestimonialForm setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} >
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-seep-color text-white hover:text-black transition-all duration-500">Create Testimonial</Button>
      </DrawerTrigger>
      <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
        <div className="z-[51]">
        <DrawerHeader className="!text-center">
          <DrawerTitle>Add Testimonial</DrawerTitle>
          <DrawerDescription>
         
          </DrawerDescription>
        </DrawerHeader>
        <TestimonialForm setOpen={setOpen}/>
        <DrawerFooter className="pt-2">
        </DrawerFooter>

        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
