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
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'


async function getNewsData() {
  try {
    const res = await fetch(`${BASE_URL}/api/news`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch news content:", error);
    return []; // Return empty array to avoid crashes
  }
}


async function getCategoryData() {
  try {
    const res = await fetch(`${BASE_URL}/api/category`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch category content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const PostPage = async () => {
  const category:CategoryType[] = await getCategoryData()
  const posts:NewsType[] = await getNewsData()

  return (
    <div>
        <AdminNav title='News' user='Joy'/>
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
