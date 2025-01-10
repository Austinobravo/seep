import React from 'react'
import AdminNav from '../_components/AdminNav'
import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'

const PostPage = () => {
  return (
    <div>
        <AdminNav title='Post' user='Joy'/>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5 bg-blue-100 p-3 rounded-md'>
          {[1,2,3,4].map((item) => (
            <div  className='border p-2 rounded-lg shadow'>
                <div style={{'backgroundImage': `url(/images/discovertech.jpg`}} className='bg-center bg-cover h-40 w-full bg-no-repeat  items-end flex '>
                    <div className='gap-2 text-white text-sm items-end flex bg-gradient-to-b from-transparent via-[#0097FF] to-[#0097FF] w-full p-2'>
                        <Image src={`/images/avatar.webp`} width={500} height={500} alt='detail' className='rounded-2xl w-10 h-10 shadow'/>
                        <h3 className='font-semibold'>Nwankwo joy</h3>
                        <span className='text-xs'>4 days ago</span> 
                    </div>
                </div>
                <div>
                    <div className='py-4'>
                        <h4 className='font-semibold'>Technology and it's benefits</h4>
                        <h5 className='font-light opacity-80'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusamus in veniam voluptatem itaque, consectetur, quam totam eligendi fugit magnam ror....</h5>
                    </div>
                    <div className='flex justify-between flex-wrap gap-y-3'>
                        <div className='flex justify-between seep-text-color gap-3 flex-wrap '>
                            <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-2 items-center'>
                                <span>24.5k</span>
                            </div>

                              <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-2 items-center'>
                                  
                                  <span>206</span>
                              </div>
                              
                          </div>
                          <div className='flex ml-auto w-fit items-center gap-2'>
                            <Edit className='seep-text-color size-6 cursor-pointer'/>
                            <Trash2 className='text-red-500 size-6 cursor-pointer'/>
                          </div>
                      </div>

                  </div>
            </div>
          ))}
        </div>

      
    </div>
  )
}

export default PostPage
