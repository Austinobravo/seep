import React from 'react'
import AdminNav from '../_components/AdminNav'
import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CreatePost } from './_components/CreatePost'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import axios from 'axios'
import PostTable from './_components/PostTable'



const PostPage = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
  const category:CategoryType[] = response.data
  const postResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)
  const posts:NewsType[] = postResponse.data

  return (
    <div>
        <AdminNav title='Post' user='Joy'/>
        <div className='py-3 ml-auto w-fit'>
          <CreatePost category={category}/>
        </div>
        {posts.length >= 1 ?
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5 bg-blue-100 p-3 rounded-md'>
            <PostTable category={category}/>
        </div>
        :
        <figure className='mx-auto w-fit text-center'>
          <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
          <figcaption>No news found.</figcaption>
        </figure>
        }

      
    </div>
  )
}

export default PostPage
