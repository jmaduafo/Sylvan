import React from 'react'

const ImageRow = ({images, hoveredImage, setHoveredImage, setHovered}) => {
  return (
    <div className='overflow-x-auto imageRow'>
    <div className='w-[fit-content] flex gap-1'>
        {images.map(image => {
            return <div key={image} className='w-[100px] h-[120px] object-cover object-bottom bg-slate-500'>
                <img className='w-full h-full' onMouseEnter={() => {setHoveredImage(image); setHovered(true)}} src={image}/>
            </div>
        })}
    </div>
    </div>
  )
}

export default ImageRow