import React from "react";
import { easeInOut, motion } from "framer-motion";

const Menu = ({ setMenuOpen, menuOpen }) => {
  const menu = ["Shop", "Home", "About", "lookbook", "Account", "Contact"];
  const easing = [0.39, 0.41, 0.37, 0.87];

  const variant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: easing
        }
    }
  }

  const variantReverse = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
            ease: easing
        }
    }
  }

  const child = {
    hidden: {
        y: 40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1, 
        transition: {
            duration: .5,
            ease: easing
        }
    }
  }

  const childReverse = {
    hidden: {
        y: 0,
        opacity: 1
    },
    show: {
        y: 40,
        opacity: 0, 
        transition: {
            duration: .5,
            ease: easing
        }
    }
  }
  return (
    <motion.div
      className={`${menuOpen ? 'visible' : 'invisible'} ${menuOpen ? 'h-[40vh]' : 'h-0'} ${menuOpen ? 'delay-0' : 'delay-[.6s]'} duration-[.4s] overflow-hidden px-6 py-4 fixed w-full bg-cream border-b-siennaOpaque border-b-[1px] z-[89] flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-[6rem]`}
    >
      <motion.div 
      variants={menuOpen ? variant : variantReverse} 
      initial='hidden'
      animate='show' 
      className="overflow-hidden sm:basis-[50%] basis-[100%] flex flex-wrap gap-x-[3rem]">
        {menu.map((list) => {
          return (
            <motion.div variants={menuOpen ? child : childReverse} key={list} onClick={() => {setMenuOpen(false)}}>
                <h3 className="hover:italic cursor-pointer text-sienna text-[36px] uppercase">
                    {list}
                </h3>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="menuSlide bg-cover bg-no-repeat bg-center sm:basis-[50%] basis-[100%] h-[40vh] sm:h-full object-cover object-bottom"></div>
    </motion.div>
  );
};

export default Menu;
