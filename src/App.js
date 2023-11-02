import './App.css';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Lookbook from './pages/Lookbook'
import Detail from './pages/Detail'
import Checkout from './pages/Checkout'
import Register from './pages/Register'
import Login from './pages/Login'
import Success from './pages/Success'
import WrongPage from './pages/WrongPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (   
    <div className='container  bg-cream max-w-full mx-auto font-sans'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shop/:category' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/lookbook' element={<Lookbook/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/:category/:productId' element={<Detail/>}/>
        <Route path='*' element={<WrongPage/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
