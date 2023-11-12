import React from "react";
import { easeInOut, motion } from "framer-motion";

const Menu = ({ setMenuOpen, menuOpen }) => {
  const menu = ["Shop", "Home", "About", "lookbook", "Account", "Contact"];
  const easing = [0.39, 0.41, 0.37, 0.87];

  return (
    <motion.div
      initial={{ height: menuOpen ? 0 : "40vh" }}
      animate={{ height: menuOpen ? "40vh" : 0 }}
      exit={{ height: 0 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      className={`${menuOpen ? 'visible' : 'invisible'} overflow-hidden duration-[.4s] px-6 py-4 fixed w-full bg-cream border-b-siennaOpaque border-b-[1px] z-[89] flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-[6rem]`}
    >
      <motion.div initial={{ opacity: menuOpen ? 0 : 1 }} animate={{ opacity: menuOpen ? 1 : 0 }} transition={{ duration: .5, ease: easing, delay: .8 }} className="sm:basis-[50%] basis-[100%] flex flex-wrap gap-x-[3rem]">
        {menu.map((list) => {
          return (
            <div key={list} onClick={() => {setMenuOpen(false)}} className="">
              <h3 className="hover:italic cursor-pointer text-sienna text-[36px] uppercase">
                {list}
              </h3>
            </div>
          );
        })}
      </motion.div>
      <div className="menuSlide bg-cover bg-no-repeat bg-center sm:basis-[50%] basis-[100%] h-[40vh] sm:h-full object-cover object-bottom"></div>
    </motion.div>
  );
};

export default Menu;
