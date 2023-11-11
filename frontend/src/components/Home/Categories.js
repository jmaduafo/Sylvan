import React from 'react'
import HomeButton from '../HomeButton'

const Categories = () => {
  return (
    <section className='bg-olive py-[5rem] my-6'>
        <div className='w-[70%] mx-auto'>
            <div className='sm:w-[60%] mx-auto h-auto object-cover object-bottom'>
                <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699340554/Sylvan/7046066_1517_pimxzv.jpg' alt='tables category'/>
            </div>
            <div className='mt-6 sm:mt-[6rem] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-[5rem]'>
                <div className='basis-full sm:basis-[50%] object-cover object-bottom'>
                    <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699718077/Sylvan/eco-friendly-cleaning-products-set-basket-with-soaps-brushes_pgam0x.jpg' alt='home appliances category'/> 
                </div>
                <div className='mb-3 sm:mb-0 basis-full sm:basis-[50%] text-center sm:text-left'>
                    <h4 className='sm:w-[75%] mb-5 sm:text-[22px] 2xl:text-[28px] text-[20px] w-full font-extralight leading-[20px] text-cream'>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</h4>
                    <HomeButton bgColor={'cream'} textColor={'chocolate'}/>
                </div>
            </div>
            <div className='mt-6 sm:mt-[6rem]'>
                <div className='sm:w-[55%] mx-auto sm:pl-[50px] object-cover object-bottom'>
                    <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699718144/Sylvan/bed-cropped_t2ajjs.jpg' alt='beds category'/> 
                </div>
            </div>
            <div className='mt-6 sm:mt-[6rem] flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-[5rem] gap-6 sm:w-[70%] mx-auto'>
                <div className='sm:basis-[50%] object-cover object-bottom'>
                    <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699719771/Sylvan/landon16_oztdoh.jpg' alt='chairs category'/> 
                </div>
                <div className='sm:basis-[50%] object-cover object-bottom'>
                    <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699720164/Sylvan/H_zqp7th.jpg' alt='lamps category'/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories