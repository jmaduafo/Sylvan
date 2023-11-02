import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Featured from '../components/Home/Featured'

const Home = () => {
  return (
    <div className='bg-cream'>
      <Hero/>
      <About/>
      <Featured/>
    </div>
  )
}

export default Home