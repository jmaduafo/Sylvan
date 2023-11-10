import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Featured from '../components/Home/Featured'
import Categories from '../components/Home/Categories'
import Lookbook from '../components/Home/Lookbook'

const Home = () => {
  return (
    <div className='bg-cream'>
      <Hero/>
      <About/>
      <Featured/>
      <Categories/>
      <Lookbook/>
    </div>
  )
}

export default Home