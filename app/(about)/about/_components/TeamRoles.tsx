import FadeInSection from '@/hooks/fadeIn'
import Image from 'next/image'
import React from 'react'
const team = [
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
    {
        image: '',
        name: 'Name Name',
        role: 'Role'
    },
]
const TeamRoles = () => {
  return (
    <section className='md:px-20 px-10 py-10'>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color text-center space-y-2 pb-8'>
                <h3 className='opacity-90 text-3xl font-bold'>Team Members</h3>
            </div>  
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                {team.map((member, index) => (
                    <div key={index} className='seep-text-color'>
                        <div className='seep-bg-color rounded-2xl h-52'>
                            <span/>
                            {/* <Image src={member.image} width={100} height={100} alt={member.name}/> */}
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>

                    </div>
                ))}

            </div> 
        </FadeInSection>
      
    </section>
  )
}

export default TeamRoles
