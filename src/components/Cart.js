import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import image from '../assets/landon4.png'
import TrashCan from './icons/TrashCan'
import Cancel from './icons/Cancel'
import { CLOSE_CART, OPEN_CART } from '../redux/cartSlice';
import { easeIn, easeInOut, motion } from 'framer-motion';

const Cart = ({setCartOpen, cartOpen }) => {

    // Setting cart state from redux cartSlice.js to open and close the care
    

    const handleCancel = () => {
        setCartOpen(false)
        console.log('click')
    }

  return (
    <motion.section className={`${cartOpen === true ? 'visible' : 'invisible'} duration-[.4s] z-[88] fixed right-0`}>
        <motion.div initial={{ opacity: cartOpen === true ? 0 : 1, x: cartOpen === true ? '100%' : 0 }} animate={{ opacity: cartOpen === true ? 1 : 0, x: cartOpen === true ? 0 : '100%'}} transition={{ duration: .6, ease: easeInOut }} 
        className={`${cartOpen === true ? 'w-[100%]' : 'w-[0%]'} bg-cream border-l-siennaOpaque border-l-[1px] h-screen xs:w-[80vw] md:w-[55vw] lg:w-[45vw] w-[100vw]`}>
            <div className='py-3 px-5 text-sienna flex justify-between items-center border-b-siennaOpaque border-b-[1px]'>
                <h4 className='uppercase font-medium text-[25px]'>Your Bag (5)</h4>
                <div onClick={handleCancel}>
                    <Cancel/>
                </div>
            </div>
            <div className='py-3 px-5 max-h-[60vh] overflow-y-auto cartBag'>
                {[1, 2, 3, 4, 5].map(order => {
                    return (
                        <div key={order} className='p-3 flex border-b-siennaOpaque border-b-[1px] last:border-none gap-2'>
                            <div className='basis-[20%] h-[110px] object-cover object-bottom'>
                                <img className='w-full h-full' src={image}/>
                            </div>
                            <div className='basis-[80%]'>
                                <div className='text-sienna flex items-center justify-between'>
                                    <h6 className='uppercase text-[14px]'>Archibald Armchair</h6>
                                    <TrashCan/>
                                </div>
                                <div className='text-sienna'>
                                    <h5 className='text-[18px]'>$124.56</h5>
                                </div>
                                <div className='text-sienna flex gap-1 items-center'>
                                    <p className='text-[12px]'>M</p>
                                    <div className='w-[12px] h-[12px] border-sienna border-[1px] rounded-full flex justify-center items-center'>
                                        <div className='w-[8px] h-[8px] bg-olive rounded-full'></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='py-3 px-4'>
                <div className='my-2 text-sienna flex justify-between items-center'>
                    <p className='uppercase text-[13px]'>clear all</p>
                    <h3 className='text-[28px] font-semibold'>$2,645.76</h3>
                </div>
                <button className='py-2 rounded-lg bg-olive text-cream text-[20px] w-full uppercase text-center font-light'>
                    Checkout
                </button>
            </div>
            
        </motion.div>
    </motion.section>
  )
}

export default Cart