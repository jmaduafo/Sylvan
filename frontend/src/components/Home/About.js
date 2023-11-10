import React, { useLayoutEffect, useRef } from 'react'
import about1 from '../../assets/landon10.jpg'
import about2 from '../../assets/footer-pic.jpg'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {

    const aboutSection = useRef(null)
    const introImage = useRef(null)
    const smallImage = useRef(null)

    useLayoutEffect(function() {
        gsap.registerPlugin(ScrollTrigger)

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection.current,
                start: "-=800px",
                end: "bottom",
                toggleActions: "play complete reverse reset",
                scrub: true
            }
        })

        timeline
            .to(introImage.current, {
                y: '-15%'
            })
            .to(smallImage.current, {
                y: '30%'
            }, 0)

    }, [])

  return (
    <section ref={aboutSection} className='py-[5rem] text-sienna'>
        <div className='w-4/5 mx-auto flex flex-col sm:justify-center sm:items-center sm:flex-row gap-[5rem] '>
            <div className='relative flex-1 flex justify-end'>
                <div ref={smallImage} className='will-change-transform overflow-hidden z-[10] 2xl:left-[50%] xs:w-[200px] xs:h-[240px] absolute left-[30%] top-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                    <img className='w-full h-full' src={about1} alt=''/>
                </div>
                <div className='will-change-transform w-[350px] h-[450px] object-cover object-bottom'>
                    <img ref={introImage} className='w-full h-full' src={about2} alt=''/>
                </div>
            </div>
            <motion.div className='flex-1'>
                {/* <h5 className='mb-4 font-semibold'>INTRO TITLE</h5> */}
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 3.7 }} viewport={{ once: true }} className='md:w-[70%] font-light'> At Sylvan, we hold a steadfast commitment to customer satisfaction, understanding that every home is unique. With an unwavering focus on personalized service, we take pride in offering an array of products that seamlessly blend functionality with exquisite style, ensuring that each customer discovers furnishings that not only suit their home but also reflect their individual taste.</motion.p>
            </motion.div>
        </div>
    </section>
  )
}

export default About