"use client"
import { ExternalLink, Eye, Heart } from 'lucide-react'
import React from 'react'
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const Interaction = () => {

    React.useEffect(() => {
        async function getFingerprint() {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            console.log("visito", result)
            return result.visitorId; // Unique identifier
          }
        getFingerprint()
    }, [])
  return (
    <div className='flex justify-between text-seep-color gap-3'>
        <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
            <Heart/>
            <span>24.5k</span>
        </div>
        <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
            <Eye/>
            <span>50k</span>
        </div>
        <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
            <ExternalLink/>
            <span>206</span>
        </div>
    </div>
)
}

export default Interaction
