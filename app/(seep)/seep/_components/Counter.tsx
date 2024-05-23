'use client'
import FadeInSection from '@/hooks/fadeIn'
import React from 'react'
import CountUp from 'react-countup'

const Text = [
    {
        heading: '1700',
        paragraph: 'Students Impacted'
    },
    {
        heading: '15',
        paragraph: 'Skills Learnt'
    },
    {
        heading: '5',
        paragraph: 'Schools Improved'
    },
]
const Counter = () => {
    const [counters, setCounters] = React.useState(Array(Text.length).fill(0))
    const targetCount = Text.map(item => parseInt(item.heading.replace(',', '')))
    const maxTargetCounts = Math.max(...targetCount)

    React.useEffect(()=> {
        const interval = setInterval(()=> {
            setCounters((prev) => prev.map((counter, index) => {
                const targetCount = parseInt(Text[index].heading.replace(',', ''))
                if (Text[index].heading === '1,700') {
                    return counter < targetCount / 2 ? counter + 1 : targetCount;
                } else {
                    return counter < targetCount ? counter + 1 : targetCount;
                }

            }))
        }, 100)
        return ()=> clearInterval(interval)

    },[])
  return (
    <section className='py-16 '>
        <FadeInSection direction={`up`}>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-16 w-full mx-auto'>
                {Text.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center space-y-3'>
                        <h2 className='text-[#FFA807] text-6xl'><CountUp start={0} end={parseInt(item.heading)} duration={10}/></h2>
                        <span className='text-lg seep-text-color hover:underline'>{item.paragraph}</span>
                    </div>
                ))}

            </div> 
        </FadeInSection>
    </section>
  )
}

export default Counter
