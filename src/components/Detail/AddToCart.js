import React from 'react'

function AddToCart() {
  return (
    <>
        <div className='border-t-siennaOpaque border-t-[1px] px-2 py-1 flex justify-between items-center'>
            <h6>CHALISSE LAMP</h6>
            <p>$45.00</p>
        </div>
        <div className='px-2 py-1 border-t-siennaOpaque border-t-[1px]'>
            <p className='text-[12px]'>DESCRIPTION</p>
        </div>
        <div className='px-2 py-1 border-t-siennaOpaque border-t-[1px]'>
            <p className='text-[13px] font-light'>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. </p>
        </div>
        <div className='px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center'>
            <p className='text-[12px]'>COLORS</p>
            <div className='flex items-center gap-2'>
                {[1, 2, 3].map(color => {
                    return (
                        <div key={color} className='flex justify-center items-center w-[12px] h-[12px] rounded-full border-chocolate border-[1px] cursor-pointer'>
                            <div className='w-[8px] h-[8px] rounded-full bg-sienna'></div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center'>
            <p className='text-[12px]'>SIZES</p>
            <div className='flex items-center gap-2'>
                {['S', 'M'].map(size => {
                    return (
                        <p key={size} className='text-[12px] border-olive border-[1px] py-[2px] px-3 rounded-full bg-olive text-cream cursor-pointer'>{size}</p>
                    )
                })}
            </div>
        </div>
        <div className='px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center'>
            <p className='text-[red] text-[11px] uppercase'>You must select a color and size before adding to cart</p>
        </div>
        <div className='px-2 py-3 border-t-siennaOpaque border-t-[1.5px] border-b-siennaOpaque border-b-[1.5px] flex justify-between items-center cursor-pointer'>
            <h3>ADD TO CART</h3>
        </div>
    </>
  )
}

export default AddToCart