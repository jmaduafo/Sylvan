import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Menu = ({ setMenuOpen, menuOpen }) => {
  const [link, setLink] = useState("/login");

  const menu = ["Shop", "Home", "About", "lookbook", "Account", "Contact"];
  const easing = [0.39, 0.41, 0.37, 0.87];

  function checkLoggedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLink('/profile/user')
        } else {
            setLink('/login')
        }
    })
  }

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

  useEffect(
    function () {
      checkLoggedIn();
    },
    []
  );

  function menuLinks(nav) {
    if (nav === 'Home') {
        return '/'
    } else if (nav === 'Shop') {
        return '/shop/all'
    } else if (nav === 'Account') {
        return link
    } else {
        return `/${nav.toLowerCase()}`
    }
  }

  return (
    <motion.div
      className={`${menuOpen ? 'visible' : 'invisible'} ${menuOpen ? 'sm:h-[40vh] h-[50vh]' : 'h-0'} ${menuOpen ? 'delay-0' : 'delay-[.6s]'} duration-[.4s] overflow-hidden sm:px-6 px-3 py-4 fixed w-full bg-cream border-b-siennaOpaque border-b-[1px] z-[89] flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start sm:gap-[6rem] gap-[3rem]`}
    >
      <motion.div 
      variants={menuOpen ? variant : variantReverse} 
      initial='hidden'
      animate='show' 
      className="overflow-hidden sm:basis-[50%] basis-[100%] flex flex-wrap gap-x-[3rem]">
        {menu.map((list) => {
          return (
            <motion.div variants={menuOpen ? child : childReverse} key={list} onClick={() => {setMenuOpen(false)}}>
                <Link to={menuLinks(list)}>
                <h3 className="hover:italic cursor-pointer text-sienna sm:text-[36px] text-[20px] uppercase">
                    {list}
                </h3>
                </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="menuSlide bg-cover bg-no-repeat bg-center sm:basis-[50%] basis-[100%] h-[40vh] sm:h-full object-cover object-bottom"></div>
    </motion.div>
  );
};

export default Menu;
