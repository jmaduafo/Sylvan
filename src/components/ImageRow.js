import React from 'react'

const ImageRow = ({images, hoveredImage, setHoveredImage}) => {
  return (
    <div className='overflow-x-auto flex gap-1'>
        {images.map(image => {
            return <div key={image} className='w-[100px] h-[120px] object-cover object-bottom bg-slate-500'>
                <img className='w-full h-full' src={image}/>
            </div>
        })}
    </div>
  )
}

export default ImageRow