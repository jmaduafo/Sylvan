import React, { useRef, useEffect, useState } from "react";
import ShoppingBagIcon from "./icons/ShoppingBag";
import SearchIcon from "./icons/Search";
import UserIcon from "./icons/UserIcon";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { easeInOut, motion } from "framer-motion";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { GET_TOTALS } from "../redux/cartSlice";

const Navbar = ({ cartOpen, setCartOpen }) => {
  const headerHeight = useRef();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState("");
  const [shrink, setShrink] = useState(true);
  const [link, setLink] = useState("/login");

  let navigate = useNavigate();

  const { cartItems, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Handle search on enter 
  function handleEnter(e) {
    if (e.key === "Enter") {
      setSearchParams(searchName);

      navigate({
        pathname: "search",
        search: `?product=${searchName.toLowerCase()}`,
      });
    }
  }

  function checkLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLink("/profile/user");
      } else {
        // User is signed out
        setLink("/login");
      }
    });
  }

  function handleBagCount() {
    dispatch(GET_TOTALS());
  }

  useEffect(
    function () {
      checkLoggedIn();
    },
    [auth]
  );

  useEffect(
    function () {
      handleBagCount();
    },
    [cartItems]
  );

  return (
    <>
      <header
        className="w-full bg-cream text-sienna sticky top-0 z-[99]"
        ref={headerHeight}
      >
        <nav>
          {/* TOP NAV WITH MENU, LOGO, AND CART */}
          <div className="relative border-b-siennaOpaque border-b-[1px] flex justify-between px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer">
                <MenuIcon />
              </div>
              <Link to="/shop/all">
                <p className="sm:block hidden cursor-pointer font-light">
                  SHOP
                </p>
              </Link>
            </div>
            <div className="absolute top-[55%] left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
              <Link to="/">
                <h3 className="sm:text-[34px] 2xl:text-[40px] text-[28px] font-serif cursor-pointer">
                  SYLVAN
                </h3>
              </Link>
            </div>
            <div className="relative">
              <div onClick={() => setCartOpen(true)}>
                <ShoppingBagIcon />
              </div>
              {/* BAG COUNT */}
              <div className="absolute top-0 left-2/3 border border-sienna bg-cream w-4 h-4 rounded-full flex justify-center items-center">
                <p className="text-chocolate text-[10px]">{totalQuantity}</p>
              </div>
            </div>
          </div>
          {/* BOTTOM NAV WITH USER AND SEARCH */}
          <div className="border-b-siennaOpaque border-b-[1px] flex justify-between px-6 py-2">
            <div className="">
                {/* IF LOGGED IN, NAVIGATE TO PROFILE; IF NOT, NAVIAGTE TO LOG IN PAGE */}
              <Link to={link}>
                <UserIcon />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`overflow-hidden ${
                  shrink ? "invisible" : "visible"
                } duration-[.4s]`}
              >
                <motion.input
                  type="text"
                  onChange={(e) => setSearchName(e.target.value)}
                  onKeyDown={handleEnter}
                  initial={{ opacity: shrink ? 1 : 0, x: shrink ? 0 : "100%" }}
                  animate={{ opacity: shrink ? 0 : 1, x: shrink ? "100%" : 0 }}
                  transition={{ duration: 0.6, ease: easeInOut }}
                  id="navSearch"
                  className={`py-[3px] px-2 font-sans bg-transparent outline-none border-b-sienna border-b-[1.5px] text-[#9b4e17b2] text-[13px]`}
                  placeholder="Search"
                />
              </div>
              <div onClick={() => setShrink((prev) => !prev)}>
                <SearchIcon />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

function MenuIcon() {
  return (
    <>
      <div className="xs:w-10 h-[1px] w-8 bg-sienna mb-1 "></div>
      <div className="xs:w-10 h-[1px] w-8 bg-sienna mb-1"></div>
      <div className="xs:w-10 h-[1px] w-8 bg-sienna"></div>
    </>
  );
}

export default Navbar;
