import FadeInSection from '@/hooks/fadeIn';
import { BASE_URL } from '@/lib/globals';
import Image from 'next/image';
import React from 'react'

export const dynamic = "force-dynamic"; 

async function getTermsContent() {
  try {
    const res = await fetch(`${BASE_URL}/api/terms`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch blog content:", error);
    return {}; // Return empty array to avoid crashes
  }
}

const page = async () => {
    const terms:PrivacyType = await getTermsContent()

  return (
    <section className='md:px-20 px-10 space-y-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-center pb-16 space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>Terms and Conditions</h1>
            </div>
        </div>   
      </FadeInSection>
      <FadeInSection direction={`up`}>
            <div className='space-y-4 py-7'>
            {terms ?
                <div className="whitespace-pre-wrap "  dangerouslySetInnerHTML={{__html: terms.content}}/>
            :
            <figure className='mx-auto w-fit text-center'>
                    <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
                    <figcaption>No terms and conditions yet.</figcaption>
                </figure>
            }

            </div>

      </FadeInSection>
    </section>
  )
}

export default page
