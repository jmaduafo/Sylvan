import React from 'react'
import { motion, easeInOut } from 'framer-motion';

const DeleteModal = ({modalOpen, setModalOpen, setConfirmDelete}) => {
  return (
    <div className={`${modalOpen ? 'visible' : 'invisible'} duration-[.4s] fixed flex jutify-center items-center bg-chocolateOpaque w-full h-[85vh] z-[80] py-6 text-sienna`}>
        <motion.div initial={{ opacity: modalOpen ? 0 : 1 }} animate={{ opacity: modalOpen ? 1 : 0 }} transition={{ duration: .6, ease: easeInOut}}  className='text-center policy border-sienna border-[1px] bg-cream w-[30%] mx-auto py-4 px-5'>
            <h3 className='text-sienna text-[22px] uppercase'>Delete Account?</h3>
            <div className='mt-3'>
              <p className='font-light'>We'd hate to see you go. Are you sure that you want to proceed?</p>
              <div className='flex items-center justify-center gap-[3rem] mt-3'>
                  <button className='bg-olive text-cream uppercase font-light text-[14px] rounded-full py-[2px] px-6' onClick={() => {setConfirmDelete(true); setModalOpen(false)}}>Confirm</button>
                  <button className='border-siennaOpaque border-[1px] text-sienna uppercase font-light text-[14px] rounded-full py-[2px] px-6' onClick={() => {setConfirmDelete(false); setModalOpen(false)}}>Cancel</button>
              </div>
            </div>

        </motion.div>
        
    </div>
  )
}

export default DeleteModal