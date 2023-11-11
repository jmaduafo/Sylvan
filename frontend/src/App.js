import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Lookbook from "./pages/Lookbook";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";
import WrongPage from "./pages/WrongPage";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Api from "./pages/Api";
import Cancel from "./pages/Cancel";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function App() {
  let path = window.location.pathname;

  const [cartOpen, setCartOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(
    function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [path]
  );

  useEffect(
    function () {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    },
    [path]
  );

  useLayoutEffect(function () {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
  }, []);

  return (
    <div className="container bg-cream max-w-full mx-auto font-sans">
      {/* <div className='cursor top-0 w-[20px] h-[20px] bg-[#9b4e17b2] z-[999]'></div> */}
      <motion.div
        initial={{ opacity: category.length ? 0 : 1 }}
        animate={{ opacity: category.length ? 1 : 0 }}
        className="categoryName top-1/2 w-[150px] h-[150px] border-sienna border-[1.5px] bg-cream flex justify-center items-center z-[990] text-sienna"
      >
        <p className="uppercase font-serif text-[18px] text-center">
          View {category}
        </p>
      </motion.div>
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <main className="relative">
        <PrivacyPolicy
          setPrivacyOpen={setPrivacyOpen}
          privacyOpen={privacyOpen}
        />
        <ReturnPolicy setPolicyOpen={setPolicyOpen} policyOpen={policyOpen} />
        <Routes>
          <Route exact path="/" element={<Home setCategory={setCategory} />} />
          <Route
            path="/shop/:category"
            element={<Shop cartOpen={cartOpen} setCartOpen={setCartOpen} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile/user" element={<Profile />} />
          <Route
            path="/:categoryName/:productId"
            element={<Detail cartOpen={cartOpen} setCartOpen={setCartOpen} />}
          />
          <Route path="/api/create" element={<Api />} />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </main>
      <Footer setPrivacyOpen={setPrivacyOpen} setPolicyOpen={setPolicyOpen} />
    </div>
  );
}

export default App;
