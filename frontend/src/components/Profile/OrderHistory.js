import React from 'react'
import pic from '../../assets/hero-image.jpg'

const OrderHistory = () => {
  return (
    <div>
        <div className='flex justify-evenly items-center py-2 px-2 border-b-siennaOpaque border-b-[1px]'>
            <p></p>
            <p>Quantity</p>
            <p>Date ordered</p>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map(order => {
            return (   
            <div key={order} className='flex justify-evenly items-center py-3 px-2 border-b-siennaOpaque border-b-[1px]'>
                <div className='w-[80px] h-[95px] object-cover object-bottom'>
                    <img className='w-full h-full' src={pic} alt=''/>
                </div> 
            </div>
            )
        })
        }
    </div>
  )
}

export default OrderHistory