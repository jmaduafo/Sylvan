import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from '../../redux/cartSlice';

const QuickAdd = ({ setQuickAdd, setMessage, setMessageType, setCartOpen, product, itemSizes, itemColors, setSelectedColor, setSelectedSize}) => {
    const [ itemSize, setItemSize ] = useState(null)
    const [ itemColor, setItemColor ] = useState(null)

    const dispatch = useDispatch()

    function handleQuickAdd(item) {
        if (!itemColor || !itemSize) {
            setQuickAdd(false)
            setMessageType('Error Message')
            setMessage('You must select both a color and size of the product in order to add to cart')
        } else {
            setQuickAdd(true)
            dispatch(ADD_TO_CART({
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                sizes: item.sizes,
                colors: item.colors,
                materials: item.materials,
                category: item.category,
                images: item.images,
                isLookbook: item.isLookbook,
                selectedColor: itemColor,
                selectedSize: itemSize,
                cartQuantity: 1,
            }))
            setItemSize(null)
            setItemColor(null)
            setSelectedColor(null)
            setSelectedSize(null)
            setQuickAdd(false)
            setCartOpen(true);
        }
    }
    
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
            <div className='flex items-center gap-3 mt-2'>
                {itemColors?.map(color => {
                    return (
                        <div key={color} onClick={() => {setItemColor(color); setSelectedColor(itemColor)}} className={`flex justify-center items-center ${color === itemColor ? 'border-sienna' : 'border-cream'} w-[12px] h-[12px] rounded-full border-[1px] uppercase text-[11px] cursor-pointer`}>
                            <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: color}}></div>
                        </div>
                    )   
                })}
            </div> 
        </div>
        <div className='z-[5]'>
            <p onClick={() => {handleQuickAdd(product)}} className='bg-cream rounded-full px-3 py-[3px] text-sienna uppercase text-[13px]
            border-sienna border-[1px] cursor-pointer'>Add to cart</p>
        </div> 
    </>
  )
}

export default QuickAdd