import React, { useState } from 'react'

const QuickAdd = ({}) => {
    const [ itemSize, setItemSize ] = useState(null)
    const [ itemColor, setItemColor ] = useState(null)
    
  return (
    <>
        <div>
            <div className='flex items-center gap-2'>
                {['S', 'M', 'L'].map((size) => {
                return (
                    <p key={size} onClick={() => setItemSize(size)} className={`${size === itemSize ? 'bg-sienna' : 'bg-cream'} ${size === itemSize ? 'text-cream' : 'text-sienna'} rounded-full px-3 py-[3px] uppercase text-[13px] border-sienna border-[1px] cursor-pointer`}>{size}</p>
                )  
                })}
            </div>
            <div className='flex items-center gap-3 mt-2'>
                {['orange', 'blue'].map(color => {
                    return (
                        <p key={color} onClick={() => setItemColor(color)} className={`${color === itemColor ? 'text-sienna' : 'text-cream'} uppercase text-[11px] cursor-pointer`}>{color}</p>
                    )   
                })}
            </div> 
        </div>
        <div>
            <p className='bg-cream rounded-full px-3 py-[3px] text-sienna uppercase text-[13px]
            border-sienna border-[1px] cursor-pointer'>Add to cart</p>
        </div> 
    </>
  )
}

export default QuickAdd