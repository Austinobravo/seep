import React from 'react'


const Text = [
    {
        heading: '1,700',
        paragraph: 'Students Impacted'
    },
    {
        heading: '15',
        paragraph: 'Skills Learnt'
    },
    {
        heading: '10',
        paragraph: 'Schools Improved'
    },
]
const Counter = () => {
  return (
    <section className='py-16 '>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-16 w-full mx-auto'>
            {Text.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center space-y-3'>
                    <h2 className='text-[#FFA807] text-6xl'>{item.heading}</h2>
                    <span className='text-lg seep-text-color hover:underline'>{item.paragraph}</span>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Counter
