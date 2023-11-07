import React, { useState, useEffect } from 'react'
import Cover from './Cover'
import { Link } from 'react-router-dom'
import { categories } from '../utils/shopCategories'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const Footer = () => {
    const [ link, setLink ] = useState('/login')
    function renderAccount() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setLink('/profile/user')
            } else {
              // User is signed out
              // ...
              setLink('/login')
            }
          });
    }  
    
    useEffect(function() {
        renderAccount()
    }, [auth])

    const footerNav = [
        {
            'name': 'home',
            'link': '/'
        }, 
        {
            'name': 'shop',
            'link': '/shop/all'
        }, 
        {
            'name': 'about',
            'link': '/about'
        }, 
        {
            'name': 'lookbook',
            'link': '/lookbook'
        }, 
        {
            'name': 'account',
            'link': link
        }, 
    ]

  return (
    <footer>
        {/* BACKGROUND IMAGE WITH LOGO   */}
        <div className='relative z-[5]'>
            <Cover/>
            <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat bg-hero-pic4'>
                <h2 className='sm:text-[200px] 2xl:text-[300px] font-serif text-[80px] text-cream z-[5]'>SYLVAN</h2>
            </div>
        </div>
        {/* FOOTER NAVIGATIONS */}
        <div className='bg-cream text-sienna font-light'>
            <div className='sm:flex-row sm:px-5 sm:pt-4 sm:pb-[5rem] sm:gap-10 p-4 flex-col flex border-b-siennaOpaque border-b-[1px]'>
                <div className='sm:py-0 sm:border-none py-3 border-b-siennaOpaque border-b-[1px]'>
                    <ul>
                        {footerNav.map(nav => {
                            return (
                                <li className='uppercase w-fit' key={nav.name}>
                                    <Link to={nav.link}>{nav.name}</Link>
                                </li>     
                            )
                        })}
                    </ul>
                </div>
                <div className='sm:border-none sm:py-0 py-3 border-b-siennaOpaque border-b-[1px]'>
                    <ul>
                        {categories.map(nav => {
                            return (
                                <li className='uppercase w-fit' key={nav}>
                                    <Link to={`/shop/${nav.toLowerCase()}`}>SHOP {nav}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='sm:py-0 py-3'>
                    <ul>
                        <li>TERMS & CONDITIONS</li>
                        <li>PRIVACY POLICY</li>
                        <li>SHIPPING AND RETURN POLICY</li>
                    </ul>
                </div>
            </div>
            <div className='py-1 border-b-siennaOpaque border-b-[1px] flex justify-center items-center '>
                <ul className='flex gap-10 text-[14px] font-normal'>
                    <li><a>INSTAGRAM</a></li>
                    <li><a>LINKEDIN</a></li>
                    <li><a>GITHUB</a></li>
                </ul>
            </div>
            <div className='font-normal px-5 py-1 border-b-siennaOpaque border-b-[1px] flex justify-between items-center '>
                <div>
                    <p className='text-[11px]'>Sylvan &copy; 2023</p>
                </div>
                <div>
                    <p className='text-[11px]'>DESIGNED & DEV: Jasmine M.</p>
                </div>
            </div>
            
            
        </div>
    </footer>
  )
}

export default Footer