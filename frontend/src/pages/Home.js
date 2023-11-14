import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Featured from '../components/Home/Featured'
import Categories from '../components/Home/Categories'
import Lookbook from '../components/Home/Lookbook'
import AdditionalInfo from '../components/Home/AdditionalInfo'

const Home = ({ setCategory }) => {
    useEffect(function() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])
  return (
    <div className='bg-cream'>
      <Hero/>
      <About/>
      <Featured/>
      <Categories setCategory={setCategory}/>
      <Lookbook/>
      <AdditionalInfo/>
    </div>
  )
}

export default Home