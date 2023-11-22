import React from 'react'
import { useSearchParams } from 'react-router-dom'

const NotFound = ({page}) => {
    const [ searchParams, setSearchParams ] = useSearchParams()

  return (
    <div className='text-center'>
        <div className='w-[340px] object-cover object-center'>
            <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1700649089/Sylvan/24122193_bwink_msc_08_single_10-removebg-preview_1_uim7tq.png' alt='line drawing of a chair, table, and lamp'/>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-[14px] w-[70%] text-sienna'>{page === 'search' ? `Sorry, we could not find any results under "${searchParams.get('product')}"` : 'No products found under this category' }</p>
        </div>
    </div>
  )
}

export default NotFound