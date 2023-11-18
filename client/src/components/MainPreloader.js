import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easing } from "../utils/easing";

const MainPreloader = () => {
    const [ loading, setLoading ] = useState(false)

    useEffect(function() {
        setLoading(true)

        setTimeout(function() {
            setLoading(false)
        }, 2000)
    }, [])

  return (
    <section className={`${loading ? 'visible' : 'invisible'} ${loading ? 'opacity-1' : 'opacity-0'} duration-[.4s] bg-sienna text-cream fixed w-full h-full top-0 left-0 z-[2000]`}>
    <motion.div initial={{ height: 0 }} animate={{ height: '100%'}} transition={{ duration: 1, ease: easing, delay: .5 }} className="fixed top-0 left-0 w-full h-0 bg-cream z-[999]"></motion.div>
      <div className="h-full flex justify-center items-center">
        <h2 className="font-serif font-thin text-[3.5em] mb-[-.2em] z-[999]">S</h2>
        <motion.div
          initial={{ translateX: '-50%', translateY: '-50%', rotate: 0 }}
          animate={{ translateX: '-50%', translateY: '-50%', rotate: "360deg" }}
          transition={{ duration: 1, ease: easing, delay: .2 }}
          className=" overflow-hidden z-[999] w-[100px] h-[100px] rounded-full border-cream border-t-transparent border-[1.2px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default MainPreloader;
