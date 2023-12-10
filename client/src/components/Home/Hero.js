import React from "react";
import Button from "../HomeButton";
import Cover from "../Cover";
import { easeInOut, motion } from "framer-motion";
import { easing } from "../../utils/easing";

const Hero = () => {

  // Large Sylvan letter animation stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: easing,
      },
    },
  };

  const item = {
    hidden: { y: 300, opacity: 0, skewX: "-15deg" },
    show: {
      y: 0,
      opacity: 1,
      skewX: "0deg",
      transition: {
        ease: easing,
        duration: 1,
      },
    },
  };

  // Small letters animation stagger
  const letters = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: easing,
      },
    },
  };

  const shop = {
    hidden: { y: 30, opacity: 0, skewX: "-10deg" },
    show: {
      y: 0,
      opacity: 1,
      skewX: "0deg",
      transition: {
        ease: easing,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dyxxn831a/image/upload/v1700326898/Sylvan/2150794095_ttypcx.jpg)",
      }}
      className="relative sm:h-[88vh] h-[70vh] flex items-end bg-fixed bg-cover bg-no-repeat bg-center"
    >
      <Cover />
      <div className="text-cream w-full z-[5] pb-4">
        <div data-scroll data-scroll-speed="0.2" className="sm:w-[80%] w-[90%] mb-2 mx-auto">
          <motion.div
            variants={letters}
            initial="hidden"
            animate="show"
            className="overflow-hidden w-[80%] sm:w-[40%] lg:w-[35%] xl:w-[25%] mb-5 flex flex-wrap gap-1"
          >
            {[
              "where every piece exudes",
              "timeless elegance and",
              "unmatched craftsmanship",
            ].map((line) => {
              return (
                <motion.div key={line} variants={shop}>
                  <h4 className="sm:text-[20px] 2xl:text-[28px] text-[17px] w-full font-extralight leading-[20px]">
                    {line}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6, ease: easeInOut }}
          >
            <Button bgColor="cream" textColor="chocolate" />
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          data-scroll
          data-scroll-speed="0.1"
          className="overflow-hidden text-center flex justify-center items-center flex-nowrap"
        >
          {["S", "Y", "L", "V", "A", "N"].map((letter) => {
            return (
              <motion.div
                variants={item}
                className="transform translate-y-[100%] list-none"
                key={letter}
              >
                <h1 className="sm:text-[210px] md:[280px] lg:text-[330px] 2xl:text-[410px] text-[86px] mb-[-.45em] font-serif">
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
