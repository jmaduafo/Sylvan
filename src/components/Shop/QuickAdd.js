import React, { useState } from 'react'

const QuickAdd = ({itemSizes, setSelectedColor, setSelectedSize, itemColors}) => {
    const [ itemSize, setItemSize ] = useState(null)
    const [ itemColor, setItemColor ] = useState(null)
    
  return (
    <>
        <div className='z-[5]'>
            <div className='flex items-center gap-2'>
                {itemSizes?.map((size) => {
                return (
                    <p key={size} onClick={() => {setItemSize(size); setSelectedSize(itemSize)}} className={`${size === itemSize ? 'bg-sienna' : 'bg-cream'} ${size === itemSize ? 'text-cream' : 'text-sienna'} rounded-full px-3 py-[3px] uppercase text-[13px] border-sienna border-[1px] cursor-pointer`}>{size}</p>
                )  
                })}
            </div>
            { itemColor?.length > 1 ?
            <div className='flex items-center gap-3 mt-2'>
                {itemColors?.map(color => {
                    return (
                        <div key={color} onClick={() => {setItemColor(color); setSelectedColor(itemColor)}} className={`flex justify-center items-center ${color === itemColor ? 'border-sienna' : 'border-cream'} w-[12px] h-[12px] rounded-full border-[1px] uppercase text-[11px] cursor-pointer`}>
                            <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: color}}></div>
                        </div>
                    )   
                })}
            </div> 
            :
            <div className='flex items-center gap-3 mt-2'>
                {itemColors?.map(color => {
                    return (
                        <div key={color} className={`flex justify-center items-center w-[12px] h-[12px] rounded-full border-[1px] uppercase text-[11px]`}>
                            <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: color}}></div>
                        </div>
                    )   
                })}
            </div>
            }
        </div>
        <div className='z-[5]'>
            <p className='bg-cream rounded-full px-3 py-[3px] text-sienna uppercase text-[13px]
            border-sienna border-[1px] cursor-pointer'>Add to cart</p>
        </div> 
    </>
  )
}

export default QuickAdd