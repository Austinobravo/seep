import FadeInSection from '@/hooks/fadeIn'
import Image from 'next/image'
import React from 'react'
const team = [
    {
        image: '/images/deborah.png',
        name: 'Deborah Ekerebi',
        role: 'Role'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role'
    },
    {
        image: '/images/victory.png',
        name: 'Victory Edeke',
        role: 'Role'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
                {team.map((member, index) => (
                    <div key={index} className='seep-text-color'>
                        <div className='w-full'>
                            <Image src={member.image} width={500} height={100} alt={member.name} className='w-fit rounded-2xl h-72 shadow-md'/>
                        </div>
                        <div className='py-5 space-y-1'>
                            <h3 className='lg:text-3xl text-2xl font-bold '>{member.name}</h3>
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
