import React from 'react'
import Button from '../HomeButton'
import Cover from '../Cover'

const Hero = () => {
  return (
    <section className='relative sm:h-[88vh] h-[70vh] flex items-end bg-cover bg-no-repeat bg-center bg-hero-pic3'>
        <Cover/>
        <div className='text-cream w-full z-[5] pb-4'>
            <div className='w-[80%] mx-auto'>
                <h4 className='sm:text-[26px] sm:w-[50%] lg:w-[30%] 2xl:text-[32px] text-[24px] w-full font-light leading-[30px] mb-5'>
                  where every piece exudes timeless elegance and unmatched craftsmanship</h4>
                <Button bgColor='cream' textColor='chocolate'/>
            </div>
            <div className='text-center'>
                <h1 className='sm:text-[210px] md:[280px] lg:text-[350px] 2xl:text-[410px] text-[90px] mb-[-.4em] font-serif'>SYLVAN</h1>
            </div>
        </div>
    </section>
  )
}

export default Hero