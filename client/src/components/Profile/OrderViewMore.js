import React from 'react'
import LeftArrow from '../icons/LeftArrow'
import { easeInOut, motion } from 'framer-motion'

const OrderViewMore = ({order, setViewMore, viewMore}) => {
  return (
    <motion.div initial={{ opacity: viewMore ? 0 : 1 }} animate={{ opacity: viewMore ? 1 : 0 }} transition={{ duration: .5, ease: easeInOut}}>
      <div onClick={() => setViewMore(false)} className='group text-sienna flex items-center gap-2 mb-3 cursor-pointer pl-2 w-fit mt-3 sm:mt-0'>
        <div className='group-hover:transform group-hover:translate-x-[-5px] duration-[.5s]'>
          <LeftArrow/>
        </div>
        <p className='text-[13px]'>Back</p>
      </div>
      <div className='flex text-sienna border-b-siennaOpaque border-b-[1px] pb-2 sm:px-4 px-1'>
        <div className='basis-[45%]'>
          <p className='font-light text-[11px]'>Products</p>
        </div>
        <div className='basis-[20%]'>
          <p className='font-light text-[11px]'>Quantity</p>
        </div>
        <div className='basis-[15%]'>
          <p className='font-light text-[11px]'>Price</p>
        </div>
        <div className='basis-[20%]'>
          <p className='font-light text-[11px]'>Order ID</p>
        </div>
      </div>
      {order?.items?.length && order?.items?.map(ordered => {
        return (
          <div key={ordered.id} className='py-3 sm:px-4 px-1 flex text-sienna items-center border-b-siennaOpaque border-b-[1px]'>
            <div className='basis-[45%] flex gap-2'>
              <div className='w-[90px] h-[120px] object-cover object-bottom'>
                <img className='w-full h-full' src={ordered.images[0]} alt={ordered.images[0]}/>
              </div>
              <div className='py-2'>
                <p className='uppercase font-light sm:text-[13px] text-[10px]'>{ordered.name}</p>
                <div className='flex gap-1 items-center'>
                  <p className='sm:text-[13px] text-[10px] font-light'>{ordered.selectedSize}</p>
                  <div className='sm:w-[12px] sm:h-[12px] w-[10px] h-[10px] rounded-full border-sienna border-[1px] flex justify-center items-center'>
                    <div className='sm:w-[8px] sm:h-[8px] w-[6px] h-[6px] rounded-full' style={{ backgroundColor: ordered.selectedColor}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='basis-[20%]'>
              <p className='font-light sm:text-[13px] text-[11px]'>{ordered.cartQuantity}</p>
            </div>
            <div className='basis-[15%]'>
              <p className='font-light sm:text-[13px] text-[10px]'>${(ordered.cartQuantity * ordered.price).toString().length > 6 && (ordered.cartQuantity * ordered.price) ? Intl.NumberFormat().format(parseFloat(ordered.cartQuantity * ordered.price).toFixed(2)) : parseFloat((ordered.cartQuantity * ordered.price)).toFixed(2)}</p>
            </div>
            <div className='basis-[20%]'>
              <p className='sm:text-[13px] text-[10px] font-light w-fit'>#{order?.orderId && order?.orderId}</p>
            </div>
        </div>
        )
      })
      
      }
    </motion.div>
  )
}

export default OrderViewMore