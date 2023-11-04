import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QuickAdd from './QuickAdd'
import Toast from '../Toast'
import { Link } from 'react-router-dom'
import Cover from '../Cover'

const CardDisplay = () => {
    // const [ itemSize, setItemSize ] = useState(null)
    // const [ itemColor, setItemColor ] = useState(null)

  return (
    <>  
        <Toast/>
        {[1, 2, 3, 4, 5].map(card => {
            return (
                <div key={card} className='relative bg-chocolate group p-4 xs:h-[50vh] md:h-[65vh] 2xl:h-[85vh] h-[60vh] text-cream cursor-pointer'>
                    {/* <Cover/> */}
                    <motion.div className={`z-[5] ease-in group-hover:visible invisible flex justify-between items-start flex-wrap h-[10%] gap-x-6 gap-y-2`}>
                        <QuickAdd/>
                    </motion.div>
                    <Link to='/chairs/2' className='z-[5]'>
                    <div className='z-[5] flex items-end h-[90%]'>
                        <div className='z-[7]'>
                            <p>LIAJA</p>
                            <p><span className='font-serif'>$</span>545.45</p>
                        </div>
                    </div>
                    </Link>
                </div>  
            )
        })}
        
    </>
  )
}

export default CardDisplay