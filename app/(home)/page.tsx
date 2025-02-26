import React from 'react'
import Hero from './_components/Hero'
import Drivers from './_components/Drivers'
import Mission from './_components/Mission'
import Testimonials from './_components/Testimonials'
import TechToSchool from './_components/TechToSchool'
import LatestNews from '../(news)/news/_components/LatestNews'

const Home = () => {
  return (
    <>
    <Hero/>
    <Drivers/>
    <Mission/>
    <Testimonials/>
    <TechToSchool/>
    <LatestNews/>
    </>
  )
}

export default Home