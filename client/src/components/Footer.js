import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/shopCategories";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import ChevronRight from "./icons/ChevronRight";
import { motion } from "framer-motion";

const Footer = ({ setPolicyOpen, setPrivacyOpen }) => {
  const [link, setLink] = useState("/login");

  function renderAccount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        //   const uid = user.uid;
        setLink("/profile/user");
      } else {
        // User is signed out
        // ...
        setLink("/login");
      }
    });
  }

  useEffect(
    function () {
      renderAccount();
    },
    []
  );

  const footerNav = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "shop",
      link: "/shop/all",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "lookbook",
      link: "/lookbook",
    },
    {
      name: "account",
      link: link,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
      className="mt-[3rem]"
    >
      {/* FOOTER NAVIGATIONS */}
      <div className="bg-cream text-sienna font-light border-t-siennaOpaque border-t-[1px]">
        <div className="sm:px-5 sm:pt-4 sm:pb-[5rem] p-4 border-b-siennaOpaque border-b-[1px] flex flex-col-reverse gap-8 sm:flex-row sm:justify-between">
          <div className="sm:flex-row sm:gap-10 flex-col flex">
            <div className="sm:py-0 sm:border-none py-3 border-b-siennaOpaque border-b-[1px]">
              <ul>
                {footerNav.map((nav) => {
                  return (
                    <li className="uppercase w-fit" key={nav.name}>
                      <Link to={nav.link}>{nav.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sm:border-none sm:py-0 py-3 border-b-siennaOpaque border-b-[1px]">
              <ul>
                {categories.map((nav) => {
                  return (
                    <li className="uppercase w-fit" key={nav}>
                      <Link to={`/shop/${nav.toLowerCase()}`}>SHOP {nav}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sm:py-0 py-3">
              <ul>
                <li className="cursor-pointer">TERMS & CONDITIONS</li>
                <li
                  className="cursor-pointer"
                  onClick={() => setPrivacyOpen(true)}
                >
                  PRIVACY POLICY
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setPolicyOpen(true)}
                >
                  SHIPPING AND RETURN POLICY
                </li>
              </ul>
            </div>
          </div>
          {/* SUBSCRIBE EMAIL INPUT */}
          <div className="lg:px-[3rem] sm:w-[35%] w-full">
            <h2 className="font-serif text-[30px] md:text-[34px] lg:text-[40px]">Stay in the know</h2>
            <div className="">
              <p className="text-[14px] sm:text-[13px]">
                Doing business like this takes much more effort than doing your
                own business at home, and on top of that there's the curse of
                travelling.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-between items-center px-3 py-1 mt-7 border-b-siennaOpaque border-b-[1.5px]"
            >
              <input
                id="subscribe"
                className="text-[#9b4e17b2] text-[15px] w-full bg-transparent outline-none"
                type="email"
                placeholder="Email Address"
              />
              <button type="submit" className="">
                <ChevronRight />
              </button>
            </form>
          </div>
        </div>
        {/* SOCIAL LINKS */}
        <div className="py-1 border-b-siennaOpaque border-b-[1px] flex justify-center items-center ">
          <ul className="flex gap-10 text-[14px] font-normal">
            <li>
              <a href="https://www.instagram.com/jazzimanian_devil/" target="_blank" rel="noreferrer">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/" target="_blank" rel="noreferrer">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://github.com/jmaduafo" target="_blank" rel="noreferrer">
                GITHUB
              </a>
            </li>
          </ul>
        </div>
        {/* COPYRIGHT SECTION */}
        <div className="font-normal px-5 py-1 border-b-siennaOpaque border-b-[1px] flex justify-between items-center ">
          <div>
            <p className="text-[11px] sm:text-[13px]">Sylvan &copy; 2023</p>
          </div>
          <div>
            <p className="text-[11px] sm:text-[13px]">DESIGN & DEV: Jasmine M.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
