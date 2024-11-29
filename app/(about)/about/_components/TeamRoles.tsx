'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import handleIdScroll from '@/hooks/handleIdScroll'
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
        image: '/images/Emma.jpg',
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
        image: '/images/Saviour-Bassey.jpg',
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
        image: '/images/yeneime.jpg',
        name: 'Yeneime Etim ',
        role: 'Digital marketer',
        description: 'An enthuisiatic Leader and a Digital marketer'
    },
    {
        image: '/images/edikan.jpg',
        name: 'Edikan Francis Otu',
        role: 'Digital Teacher, Trained Leader, Writer & Speaker',
        description: 'An enthuisiatic Leader and a Digital Teacher, Trained Leader, Writer & Speaker'
    },
    {
        image: '/images/joy.jpg',
        name: 'Joy Oduo',
        role: ' Digital Content Creator',
        description: 'An enthuisiatic Leader and a Digital Content Creator'
    },
   

]
const TeamRoles = () => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false)
    const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = React.useState<number>(0)
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0)
    const [currentImageEndIndex, setCurrentImageEndIndex] = React.useState<number>(8)

    const IncrementImages = () => {
        if(currentImageEndIndex < team.length){
            setCurrentImageIndex(currentImageEndIndex)
            setCurrentImageEndIndex((prev) => (team.length) - prev < 8 ? prev + (team.length) - prev : prev + 8 )
        }else{
            return
        }
    }
    const DecrementImages = () => {
        if(currentImageIndex === 0){
            return
        }else{
            setCurrentImageIndex((prev) => prev - 8)
            setCurrentImageEndIndex(currentImageIndex)
        }
    }

  return (
    <section id='team' className='md:px-20 px-10 py-10'>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color text-center space-y-2 pb-8'>
                <h3 className='opacity-90 text-3xl font-bold'>Team Members</h3>
            </div>  
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                {team.slice(currentImageIndex, currentImageEndIndex).map((member, index) => (
                    <div key={index} className='seep-text-color w-fit mx-auto'>
                        <div className='w-full relative' onMouseEnter={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onMouseLeave={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onClick={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}}>
                            <Image src={member.image ? member.image : '/images/avatar.webp'} width={500} height={100} alt={member.name} className=' object-cover mx-auto rounded-md h-72 shadow-md object-top'/>
                            {isHovered && index === currentTeamMemberIndex && <span className='absolute text-center animate-in slide-in-from-bottom duration-500 bg-white p-2 text-amber-400 text-xs bottom-0 w-full h-20 overflow-auto no-scrollbar'>{member.description}</span>}
                        </div> 
                        <div className='py-5 space-y-1 break-all text-center'>
                            <h3 className='lg:text-xl text-lg font-bold '>{member.name}</h3>
                            <p className='text-sm'>{member.role}</p>
                        </div>

                    </div>
                ))}
            </div> 
            <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndex > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImages(), handleIdScroll("team")}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndex < team.length  && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImages(), handleIdScroll("team")}}>
                        <ArrowRight/>
                    </div>
                }

            </div>
        </FadeInSection>
      
    </section>
  )
}

export default TeamRoles
