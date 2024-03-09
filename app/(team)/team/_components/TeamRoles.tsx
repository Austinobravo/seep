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
      
    </section>
  )
}

export default TeamRoles
