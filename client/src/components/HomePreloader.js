import React from 'react'
import { motion } from 'framer-motion';
import { easing } from '../utils/easing';

const HomePreloader = () => {
    
  return (
    <section className="bg-sienna text-cream fixed w-full h-full top-0 left-0 z-[2000]">
    <motion.div initial={{ height: 0 }} animate={{ height: '100%'}} transition={{ duration: 1, ease: easing, delay: 4.6 }} className="fixed top-0 left-0 w-full h-0 bg-cream z-[999]"></motion.div>
      <div className="h-full flex justify-center items-center">
        <h2 className="font-serif font-thin text-[3.5em] mb-[-.2em] z-[999]">S</h2>
        <motion.div
          initial={{ translateX: '-50%', translateY: '-50%', rotate: 0 }}
          animate={{ translateX: '-50%', translateY: '-50%', rotate: "360deg" }}
          transition={{ duration: 1, ease: easing, delay: 3 }}
          className=" overflow-hidden z-[999] w-[100px] h-[100px] rounded-full border-cream border-t-transparent border-[1.2px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        >
          
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full h-full">
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "10deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0  }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-[200px] h-[280px] object-cover object-bottom z-[130]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: .7, ease: easing, delay: 0.2 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700155145/Sylvan/landon11_y3zzhj.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "-5deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 0.5 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-5deg] w-[200px] h-[280px] object-cover object-bottom z-[120]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 1 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700155166/Sylvan/landon35_hdcam2.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "5deg"  }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: .8 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[15deg] w-[200px] h-[280px] object-cover object-bottom z-[110]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 1.8 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700155059/Sylvan/landon17_jpnus3.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "-19deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 1.1 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[100]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700155191/Sylvan/Modern_Table_Lamp_Pumpkin_Lamp_ogcip8.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "-8deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 1.4 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[90]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699301971/Sylvan/Japandi_ce1unt.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "20deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 1.7 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[80]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699286471/Sylvan/%D0%A1%D0%B0%D0%BC%D1%8B%D0%B5_%D0%BC%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D1%8B-2022__9_%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2_%D0%B8_95_%D1%84%D0%BE%D1%82%D0%BE_%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B5%D0%B9_eccm4k.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "5deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 2 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[70]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699720164/Sylvan/H_zqp7th.jpg"
            alt=""
          />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "8deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 2.4 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[60]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699978868/Sylvan/room-decor-with-potted-monstera-plant_1_r1xnny.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, translateX: '-50%', translateY: '-50%', rotate: "-12deg" }}
          animate={{ opacity: 0, translateX: '-50%', translateY: '-50%', rotate: 0 }}
          transition={{ delay: 2.7 }}
          className="overflow-hidden absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[200px] h-[280px] object-cover object-bottom z-[50]"
        >
          <motion.img
            // initial={{ y: 0, opacity: 1 }}
            // animate={{ y: "100%", opacity: 0 }}
            // transition={{ duration: 0.7, ease: easing, delay: 2.6 }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700174810/Sylvan/landon30_yqpn0q.jpg"
            alt=""
          />
        </motion.div> */}
      </div>
    </section>
  )
}

export default HomePreloader