import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({bgColor, textColor}) => {
  return (
    <Link to='/shop/all'><button className={`bg-${bgColor} text-${textColor} rounded-full px-8 py-[4px] text-[15px]`}>SHOP ALL</button></Link>
  )
}

export default Button