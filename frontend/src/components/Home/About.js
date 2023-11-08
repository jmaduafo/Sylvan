import React from 'react'
import about1 from '../../assets/landon10.jpg'
import about2 from '../../assets/footer-pic.jpg'

const About = () => {
  return (
    <section className='py-[5rem] text-sienna'>
        <div className='w-4/5 mx-auto flex flex-col sm:justify-center sm:items-center sm:flex-row gap-[5rem] '>
            <div className='relative flex-1 flex justify-end'>
                <div className='2xl:left-[50%] xs:w-[150px] xs:h-[200px] absolute left-[30%] top-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                    <img className='w-full h-full' src={about1} alt=''/>
                </div>
                <div className='w-[350px] h-[450px] object-cover object-bottom'>
                    <img className='w-full h-full' src={about2} alt=''/>
                </div>
            </div>
            <div className='flex-1'>
                <h5 className='mb-4 font-semibold'>INTRO TITLE</h5>
                <p className='md:w-[80%] font-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.yo</p>
            </div>
        </div>
    </section>
  )
}

export default About