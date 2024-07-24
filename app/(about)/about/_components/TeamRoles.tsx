'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
const team = [
    {
        image: '/images/victory.png',
        name: 'Victory Edeke',
        role: 'Project Lead',
        description: 'An enthuisiatic Leader Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dignissimos incidunt quod laboriosam eveniet rerum magnam at modi ad minima eaque facilis quos aperiam deleniti, sequi ut dolorem iusto obcaecati!'
    },
    {
        image: '/images/avatar.webp',
        name: 'Emmanuel Kingston',
        role: 'Project Lead II',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/deborah.png',
        name: 'Deborah Ekerebi',
        role: 'Secretary',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/avatar.webp',
        name: 'Saviour Bassey',
        role: 'Logistics',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/victory.png',
        name: 'Victory Edeke',
        role: 'Project Lead',
        description: 'An enthuisiatic Leader Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dignissimos incidunt quod laboriosam eveniet rerum magnam at modi ad minima eaque facilis quos aperiam deleniti, sequi ut dolorem iusto obcaecati!'
    },
    {
        image: '/images/avatar.webp',
        name: 'Emmanuel Kingston',
        role: 'Project Lead II',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/deborah.png',
        name: 'Deborah Ekerebi',
        role: 'Secretary',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/avatar.webp',
        name: 'Saviour Bassey',
        role: 'Logistics',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/olamilekan.png',
        name: 'Olamilekan E.B',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C Last',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },
    {
        image: '/images/ohakam.png',
        name: 'Ohakam D.C Last',
        role: 'Role',
        description: 'An enthuisiatic Leader'
    },

]
const TeamRoles = () => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false)
    const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = React.useState<number>(0)
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0)
    const [currentImageEndIndex, setCurrentImageEndIndex] = React.useState<number>(6)

    const IncrementImages = () => {
        if(currentImageEndIndex < team.length -1){
            setCurrentImageIndex(currentImageEndIndex)
            setCurrentImageEndIndex((prev) => (team.length -1) - prev < 6 ? prev + (team.length -1) - prev : prev + 6 )
        }else{
            return
        }
    }
    const DecrementImages = () => {
        if(currentImageIndex === 0){
            return
        }else{
            setCurrentImageIndex((prev) => prev - 6)
            setCurrentImageEndIndex(currentImageIndex)
        }
    }

  return (
    <section className='md:px-20 px-10 py-10'>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color text-center space-y-2 pb-8'>
                <h3 className='opacity-90 text-3xl font-bold'>Team Members</h3>
            </div>  
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
                {team.slice(currentImageIndex, currentImageEndIndex).map((member, index) => (
                    <div key={index} className='seep-text-color w-fit mx-auto'>
                        <div className='w-full relative' onMouseEnter={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onMouseLeave={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onClick={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}}>
                            <Image src={member.image} width={500} height={100} alt={member.name} className='w-fit rounded-2xl h-72 shadow-md'/>
                            {isHovered && index === currentTeamMemberIndex && <span className='absolute text-center bg-white p-2 text-amber-400 text-xs bottom-0 w-full'>{member.description}</span>}
                        </div> 
                        <div className='py-5 space-y-1'>
                            <h3 className='lg:text-3xl text-2xl font-bold '>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>

                    </div>
                ))}
            </div> 
            <div className='flex items-center justify-between w-full py-10 '>
                {currentImageIndex > 0 && 
                    <div className='' onClick={DecrementImages}>
                        <Button title='' icon={ArrowLeft} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }
                {currentImageEndIndex < team.length -1 && 
                    <div className='ml-auto w-fit ' onClick={IncrementImages}>
                        <Button title='' icon={ArrowRight} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }

            </div>
        </FadeInSection>
      
    </section>
  )
}

export default TeamRoles
