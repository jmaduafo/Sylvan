import React from 'react'
import Heading from '../Heading'
import Cover from '../Cover'

const Featured = () => {
  return (
    <section>
        <Heading headerText='Feature products' linkText='See all' link='/shop/all'/>
        <div className='xs:flex-row flex-wrap flex flex-col border-b-[1px] border-b-siennaOpaque p-2 gap-2'>
            <div className='relative p-3 xs:basis-[48.8%] xs:h-[50vh] md:flex-[1] md:h-[50vh] basis-[100%] h-[60vh] bg-chocolate
            flex items-end z-[3]'>
                <Label title='Landon Armchair' price='45.65'/>
            </div>
            <div className='relative p-3 xs:basis-[48.8%] xs:h-[50vh] md:flex-[1] md:h-[50vh] basis-[100%] h-[60vh] bg-chocolate 
            flex items-end'>
                <Label title='Bohemian vase set' price='355.23'/>
            </div>
            <div className='relative p-3 xs:basis-full xs:h-[40vh] md:flex-[2] md:h-[50vh] basis-[100%] h-[60vh] bg-chocolate
            flex items-end'>
                
                <Label title="Jack's suede couch" price='1235.50'/>
            </div>
        </div>
    </section>
  )
}

function Label({title, price}) {
    return (
        <div className='text-cream'>
            <p className='uppercase font-light'>{title}</p>
            <p className='font-medium text-[20px]'><span className='font-serif'>$</span>{price}</p>
        </div>
    )
}

export default Featured