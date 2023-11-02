import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({headerText, linkText, link}) => {
  return (
    <div className='p-2 flex justify-between items-end text-sienna border-t-[1px] border-b-[1px] border-t-siennaOpaque border-b-siennaOpaque'>
        <h5 className='uppercase font-[500]'>{headerText}</h5>
        <Link to={link} className='relative'>
            <p className="uppercase font-semibold text-[11px] after:absolute after:top-full after:content-[''] after:w-full h-[1.5px]">{linkText}</p>
        </Link>
    </div>
  )
}

export default Heading