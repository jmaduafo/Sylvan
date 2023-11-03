import React, { useState, useEffect } from 'react'
import CancelIcon from './icons/Cancel'

const Toast = ({error, message}) => {
  message = ''

  const [isOpen, setIsOpen] = useState(false)

  useEffect(function() {
    if (message.length) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isOpen])

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} p-5 w-full h-full bg-chocolateOpaque z-[100] fixed top-0 left-0 flex justify-end items-end`}>
        <div className='p-6 w-[100%] sm:w-[50%] md:w-[25%] bg-cream border-sienna border-[1px]'>
          <div className='flex justify-between items-center text-sienna'>
            <h5 className='uppercase font-light-semibol'>Error Message</h5>
            <CancelIcon onClick={() => {setIsOpen(false)}}/>
          </div>
          <p className='font-light text-sienna text-[15px] mt-4'>{message}</p>
        </div>
    </div>
  )
}

export default Toast