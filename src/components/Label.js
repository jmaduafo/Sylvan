import React from 'react'

function Label({title, price}) {
    return (
        <div className='text-cream z-[10]'>
            <p className='uppercase font-light text-[14px]'>{title}</p>
            <p className='font-medium text-[14px]'>${price}</p>
        </div>
    )
  }

export default Label