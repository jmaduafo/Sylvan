import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({headerText, linkText, link}) => {
  return (
    <div className='sm:p-2 px-0 py-2 flex justify-between items-end text-sienna border-t-[1px] border-b-[1px] border-t-siennaOpaque border-b-siennaOpaque'>
        <h5 className='uppercase font-[500]'>{headerText}</h5>
        <Link to={link} className='relative'>
            <p className="uppercase font-semibold text-[11px] after:content-[''] after:absolute after:left-0 after:top-[90%] after:h-[2px] after:w-full after:bg-sienna">{linkText}</p>
        </Link>
    </div>
  )
}

export default Heading