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
import HomePreloader from "./components/HomePreloader";
import MainPreloader from "./components/MainPreloader";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import { motion } from "framer-motion";

function App() {
  let path = window.location.pathname;

  const [cartOpen, setCartOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [ x, setX ] = useState()
  const [ y, setY ] = useState()
  const [ homeLoading, setHomeLoading ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  useEffect(function () {
    // SCROLL TO TOP
      window.scrollTo({ top: 0, behavior: "smooth" });

      // INITIATE LOCOMOTIVE SCROLL
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();

      // ONLY HAVE CURSOR ON HOME PAGE
      if (path !== '/') {
        setCategory('')
      }
    }, [path]);

  useEffect(
    function () {
      setHomeLoading(true)
      setLoading(true)

      setTimeout(function() {
        setHomeLoading(false)
      }, 6000)

      setTimeout(function() {
        setLoading(false)
      }, 3000)
    },
    []
  );

  // ADD MOUSE MOVE
  function windowMouse(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  const easing =  [0.39, 0.41, 0.37, 0.87]

  return (
    <div className="container bg-cream max-w-full mx-auto font-sans" onMouseMove={windowMouse}>
      {/* CURSOR HOVER ANIMATION */}
      <motion.div
        initial={{ opacity: category.length ? 0 : 1 }}
        animate={{ opacity: category.length ? 1 : 0, x: x, y: y}}
        transition={{ duration: .3, ease: easing }}
        // Makes sure that cursor is invisible when page first loads
        className={`${path === '/' && category.length ? 'visible' : 'invisible'} categoryName top-0 w-[120px] h-[120px] border-sienna border-[1.5px] bg-cream flex justify-center items-center z-[990] text-sienna`}
      >
        <p className="lowercase text-[15px] text-center leading-tight">
          {category}
        </p>
      </motion.div>
      {/* /CURSOR HOVER ANIMATION */}
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <main className="relative">
        <PrivacyPolicy
          setPrivacyOpen={setPrivacyOpen}
          privacyOpen={privacyOpen}
        />
        <ReturnPolicy setPolicyOpen={setPolicyOpen} policyOpen={policyOpen} />
        <Routes>
          <Route exact path="/" element={homeLoading ? <HomePreloader/> : <Home setCategory={setCategory} />} />
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
