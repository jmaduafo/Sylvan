import React, { useState } from 'react'
import AddToCart from '../components/Detail/AddToCart'
import SimilarItems from '../components/Detail/SimilarItems'
import ImageRow from '../components/ImageRow'
import Heading from '../components/Heading'
import Cover from '../components/Cover'

const Detail = () => {
  const [hoveredImage, setHoveredImage] = useState('')

  return (
    <section>
      <div className='flex sm:flex-row sm:items-end flex-col-reverse'>
        <div className='my-1 sm:flex-1 2xl:basis-[60%] sm:h-[75vh] 2xl:h-[85vh] 2xl:flex 2xl:gap-1 bg-slate-500 2xl:bg-transparent h-[50vh]'>
          <div className={`w-full bg-cover bg-center bg-no-repeat bg-slate-500`}>
          </div>
          <div className={`2xl:block hidden w-full bg-cover bg-center bg-no-repeat bg-slate-500`}>
          </div>
        </div>
        <div className='sm:flex-1 2xl:basis-[40%] basis-full text-chocolate'>
          <AddToCart/>
        </div>
      </div>
      <ImageRow images={[1, 2]} hoveredImage={hoveredImage} setHoveredImage={setHoveredImage}/>
      <div className='mt-4'>
        <Heading headerText='More like this'/>
        <div className='my-2 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1'>
          {[1, 2, 3, 4].map(similar => {
            return (
              <div key={similar} className='relative xs:h-[60vh] 2xl:h-[70vh] h-[50vh] p-2 flex items-end'>
                <Cover/>
                <Label title='Landon Armchair' price='65.45'/>
              </div>
            )
          })}
        </div>
      </div>
      
    </section>
  )
}

function Label({title, price}) {
  return (
      <div className='text-cream z-[5]'>
          <p className='uppercase font-light text-[14px]'>{title}</p>
          <p className='font-medium text-[14px]'>${price}</p>
      </div>
  )
}

export default Detail