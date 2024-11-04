"use client"
import { ChevronUp } from 'lucide-react'
import React from 'react'

const ScrollButton = () => {
    const [isButtonVisible, setIsButtonVisible] = React.useState<boolean>(false)
    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    React.useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY <= 20){
                setIsButtonVisible(false)
            }else{
                setIsButtonVisible(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }

    },[])
  return (
    <section>
        {isButtonVisible && 
            <div className='bg-red-500 rounded-md px-3 py-2 fixed bottom-16 right-10 cursor-pointer ' 
            onClick={ScrollUp}>
                <ChevronUp color='white'/>
            </div>
        }
        {/* ,source /home/benzkerp/nodevenv/seesupportcenter.org/20/bin/activate && 
        https://www.namecheap.com/support/knowledgebase/article.aspx/1016/89/how-to-access-a-hosting-account-via-ssh/ */}
    </section>
  )
}

export default ScrollButton