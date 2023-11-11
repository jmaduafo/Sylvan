import React, { useRef, useLayoutEffect} from "react";
import Button from "../HomeButton";
import Cover from "../Cover";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeInOut, motion } from "framer-motion";

const Hero = () => {
  const letterStagger = useRef(null)
  const introImage = useRef(null)
  const smallImage = useRef(null)

  // useLayoutEffect(function() {
  //     gsap.registerPlugin(ScrollTrigger)

  //     const timeline = gsap.timeline({
  //         scrollTrigger: {
  //             trigger: document.documentElement,
  //             start: "top",
  //             toggleActions: "play complete reverse reset",
  //         }
  //     })

  //     timeline
  //         .to(letterStagger.current, {
  //             ease: "power1.inOut",
  //             y: 0,
  //             stagger: {
  //               // wrap advanced options in an object
  //               each: 0.4,
  //               ease: "power2.inOut",
  //               repeat: -1
  //             }
  //         })

  // }, [])

  const easing = [0.39, 0.41, 0.37, 0.87]

  // Large Sylvan letter animation stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .3,
        ease: easing,
      }
    }
  }

  const item = {
    hidden: { y: 300, opacity: 0, skewX: '-15deg' },
    show: { 
      y: 0,
      opacity: 1,
      skewX: '0deg',
      transition: {
        ease: easing,
        duration: 1
      }
    }
  }

  // Small letters animation stagger
  const letters = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .5,
        ease: easing,
      }
    }
  }
  
  const shop = {
    hidden: { y: 30, opacity: 0, skewX: '-10deg' },
    show: {
      y: 0,
      opacity: 1,
      skewX: '0deg',
      transition: {
        ease: easing,
        duration: .6
      }
    }
  }

  

  return (
    <section className="bgCover relative sm:h-[88vh] h-[70vh] flex items-end bg-fixed bg-cover bg-no-repeat bg-center bg-hero-pic3">
      <Cover />
      <div className="text-cream w-full z-[5] pb-4">
        <div data-scroll data-scroll-speed="0.2" className="w-[80%] mx-auto">
          <motion.div variants={letters} initial='hidden' animate='show' className="overflow-hidden w-[25%] mb-5 flex flex-wrap gap-1">
            {['where every piece exudes', 'timeless elegance and', 'unmatched craftsmanship'].map(line => {
              return (
                <motion.div key={line} variants={shop}>
                  <h4 className="sm:text-[22px] 2xl:text-[28px] text-[20px] w-full font-extralight leading-[20px]">
                    {line}
                  </h4>
                </motion.div>
              )
            })}
            
          </motion.div>
          <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 2, duration: .6, ease: easeInOut }}>
            <Button bgColor="cream" textColor="chocolate" />
          </motion.div>
        </div>
      
          <motion.div
            variants={container}
            initial='hidden'
            animate='show' 
            data-scroll
            data-scroll-speed="0.1"
            className="overflow-hidden text-center flex justify-center items-center flex-nowrap"
          >
            {["S", "Y", "L", "V", "A", "N"].map((letter) => {
              return (
                <motion.div variants={item} className='transform translate-y-[100%] list-none' key={letter}>
                  <h1 className="sm:text-[210px] md:[280px] lg:text-[330px] 2xl:text-[410px] text-[90px] mb-[-.45em] font-serif">
                    {letter}
                  </h1>
                </motion.div>
              );
            })}
          </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
