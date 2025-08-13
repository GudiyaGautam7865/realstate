import React from 'react'
import Features from '../components/home/features/Features'
import Hero from '../components/home/hero/Hero'
import Property from '../components/home/property/Property'
import Story from '../components/home/story/Story'
import Videos from '../components/home/videos/Videos'



function HomePages() {
  return (
    <>
       <article>
      
      <Hero/>
      
      <Property/>
      <Features/>
      <Videos/>
      <Story/>
  
     </article>
     
    </>
  )
}

export default HomePages
