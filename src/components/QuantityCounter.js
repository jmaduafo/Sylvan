import React from 'react'
import { useDispatch } from 'react-redux'
import { DECREASE_QUANTITY, ADD_TO_CART } from '../redux/cartSlice'

const QuantityCounter = ({ cart, count }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-3 border-sienna border-[1px] px-3 py-[2px]'>
      <p onClick={() => dispatch(DECREASE_QUANTITY(cart))} className='text-[15px] font-light cursor-pointer'>-</p>
      <p className='text-[14px] font-light'>{count}</p>
      <p onClick={() => dispatch(ADD_TO_CART(cart))} className='text-[15px] font-light cursor-pointer'>+</p>
    </div>
  )
}

export default QuantityCounter