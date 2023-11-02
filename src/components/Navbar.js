import React from 'react'
import ShoppingBagIcon from './icons/ShoppingBag'
import SearchIcon from './icons/Search'
import UserIcon from './icons/UserIcon'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full bg-cream text-sienna sticky top-0 z-[99]'>
        <nav>
            {/* TOP NAV WITH MENU, LOGO, AND CART */}
            <div className='relative border-b-siennaOpaque border-b-[1px] flex justify-between px-6 py-5'>
                <div className='flex items-center gap-4'>
                    <div className='cursor-pointer'>
                        <MenuIcon/>
                    </div>
                    <Link to='/shop/all'><p className='sm:block hidden cursor-pointer font-light'>SHOP</p></Link>
                </div>
                <div className='absolute top-[55%] left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                    <Link to='/'><h3 className='sm:text-[34px] 2xl:text-[40px] text-[28px] font-serif cursor-pointer'>SYLVAN</h3></Link>
                </div>
                <div className='relative'>
                    <ShoppingBagIcon/>
                    {/* BAG COUNT */}
                    <div className='absolute top-0 left-2/3 border border-sienna bg-cream w-4 h-4 rounded-full flex justify-center items-center'>
                        <p className='text-chocolate text-[10px]'>3</p>
                    </div>
                </div>
            </div>
            {/* BOTTOM NAV WITH USER AND SEARCH */}
            <div className='border-b-siennaOpaque border-b-[1px] flex justify-between px-6 py-2'>
                <div className=''>
                    <UserIcon/>
                </div>
                <div className=''>
                    <SearchIcon/>
                </div>
            </div>
        </nav>
    </header>
  )
}

function MenuIcon() {
    return (
        <>
            <div className='xs:w-10 h-[1px] w-8 bg-sienna mb-1 '></div>
            <div className='xs:w-10 h-[1px] w-8 bg-sienna mb-1'></div>
            <div className='xs:w-10 h-[1px] w-8 bg-sienna'></div>
        </>
    )
}

export default Navbar