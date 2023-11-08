import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Lookbook from './pages/Lookbook'
import Detail from './pages/Detail'
import Register from './pages/Register'
import Login from './pages/Login'
import Success from './pages/Success'
import WrongPage from './pages/WrongPage'
import Search from './pages/Search';
import Profile from './pages/Profile';
import Api from './pages/Api';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnPolicy from './components/ReturnPolicy';

function App() {
  let path = window.location.pathname

  const [ cartOpen, setCartOpen ] = useState(false)
  const [ privacyOpen, setPrivacyOpen ] = useState(false)
  const [ policyOpen, setPolicyOpen ] = useState(false)
  const [ termsOpen, setTermsOpen ] = useState(false)

  useEffect(function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [path])

  return (   
    <div className='container bg-cream max-w-full mx-auto font-sans'>
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen}/>
      <main className='relative'>
        <PrivacyPolicy setPrivacyOpen={setPrivacyOpen} privacyOpen={privacyOpen}/>
        <ReturnPolicy setPolicyOpen={setPolicyOpen} policyOpen={policyOpen}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shop/:category' element={<Shop cartOpen={cartOpen} setCartOpen={setCartOpen}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/lookbook' element={<Lookbook/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile/user' element={<Profile/>}/>
        <Route path='/:categoryName/:productId' element={<Detail cartOpen={cartOpen} setCartOpen={setCartOpen}/>}/>
        <Route path='/api/create' element={<Api/>}/>
        <Route path='*' element={<WrongPage/>}/>
      </Routes>
      </main>
      <Footer setPrivacyOpen={setPrivacyOpen} setPolicyOpen={setPolicyOpen}/>
    </div>
    
  );
}

export default App;
