import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Featured from '../components/Home/Featured'
import Categories from '../components/Home/Categories'
import Lookbook from '../components/Home/Lookbook'
import AdditionalInfo from '../components/Home/AdditionalInfo'
import { motion } from 'framer-motion'
import { easing } from '../utils/easing'

const Home = ({ setCategory }) => {
    useEffect(function() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, ease: easing }} className='bg-cream'>
      <Hero/>
      <About/>
      <Featured/>
      <Categories setCategory={setCategory}/>
      <Lookbook/>
      <AdditionalInfo/>
    </motion.div>
  )
}

export default Home