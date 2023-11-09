import React, { useState } from 'react'
import pic from '../../assets/hero-image.jpg'
import OrderViewMore from './OrderViewMore'
import { motion, easeInOut } from 'framer-motion'

const OrderHistory = () => {
    const [ viewMore, setViewMore ] = useState(false)
    const [ order, setOrder ] = useState()

    // What is shown first when user lands on page
    const MainOrder = () => {
        return (
        <motion.div initial={{ opacity: viewMore ? 1 : 0 }} animate={{ opacity: viewMore ? 0 : 1 }} transition={{ duration: .5, ease: easeInOut}}>
          <div className='flex text-sienna border-b-siennaOpaque border-b-[1px] pb-2 px-4'>
            <div className='basis-[35%]'>
              <p className='font-light text-[14px]'>Order ID</p>
            </div>
            <div className='basis-[20%]'>
              <p className='font-light text-[14px]'>Quantity</p>
            </div>
            <div className='basis-[15%]'>
              <p className='font-light text-[14px]'>Total Price</p>
            </div>
            <div className='basis-[30%]'>
              <p className='font-light text-[14px]'>Status</p>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7].map(order => {
            return (
              <div key={order} onClick={() => {setOrder(order); setViewMore(true)}} className='hover:bg-siennaOpaque duration-[.4s] cursor-pointer hover:text-cream flex text-sienna items-center py-3 px-4 border-b-siennaOpaque border-b-[1px]'>
                <div className='basis-[35%] flex gap-2 items-center'>
                  <div className='w-[90px] h-[120px] object-cover object-bottom'>
                    <img className='w-full h-full' src={pic} alt={order}/>
                  </div>
                  <p className='text-[14px]'>01898329</p>
                </div>
                <div className='basis-[20%]'>
                  <p className='text-[14px]'>2</p>
                </div>
                <div className='basis-[15%]'>
                  <p className='text-[14px]'>$5,892.45</p>
                </div>
                <div className='basis-[30%]'>
                  <p className='py-[2px] px-6 bg-olive font-light text-cream text-[13px] w-fit rounded-full'>Pending</p>
                </div>
            </div>
            )
          })
          
          }
        </motion.div>
        )
    
    }

  return (
    <div>
        {viewMore ? <OrderViewMore order={order} setViewMore={setViewMore} viewMore={viewMore}/> : <MainOrder/>}
    </div>
    
  )
}



export default OrderHistory