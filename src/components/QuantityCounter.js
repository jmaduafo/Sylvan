import React from 'react'

const QuantityCounter = ({ id, count }) => {
  return (
    <div className='flex items-center gap-3 border-sienna border-[1px] px-3 py-[2px]'>
      <p className='text-[15px] font-light cursor-pointer'>-</p>
      <p className='text-[14px] font-light'>1</p>
      <p className='text-[15px] font-light cursor-pointer'>+</p>
    </div>
  )
}

export default QuantityCounter