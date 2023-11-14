import React, { useState, useEffect } from "react";
import Cover from "./Cover";
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
    [auth]
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
    >
      {/* FOOTER NAVIGATIONS */}
      <div className="bg-cream text-sienna font-light border-t-siennaOpaque border-t-[1px]">
        <div className="sm:px-5 sm:pt-4 sm:pb-[5rem] p-4 border-b-siennaOpaque border-b-[1px] flex justify-between">
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
          <div className="px-[3rem] w-[35%]">
            <h2 className="font-serif text-[36px]">Stay in the know</h2>
            <div className="">
              <p className="text-[13px]">
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
              <a href="" target="_blank">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                GITHUB
              </a>
            </li>
          </ul>
        </div>
        {/* COPYRIGHT SECTION */}
        <div className="font-normal px-5 py-1 border-b-siennaOpaque border-b-[1px] flex justify-between items-center ">
          <div>
            <p className="text-[11px]">Sylvan &copy; 2023</p>
          </div>
          <div>
            <p className="text-[11px]">DESIGN & DEV: Jasmine M.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
