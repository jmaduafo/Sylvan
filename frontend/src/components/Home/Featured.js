import React from 'react'
import Heading from '../Heading'
import Cover from '../Cover'
import Label from '../Label'
import Left from '../../assets/landon18.jpg'
import Middle from '../../assets/home-featured-middle.jpg'
import Right from '../../assets/home-featured-right.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Featured = () => {
    const easing = [0.39, 0.41, 0.37, 0.87]

  return (
    <motion.section initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ delay: .6, duration: .6, ease: easing }} viewport={{ once: true }}>
        <Heading headerText='Featured products' linkText='Shop all' link='/shop/all'/>
        <div className='grid grid-cols-1 xs:flex-row xs:flex-wrap xs:flex border-b-[1px] border-b-siennaOpaque py-2 gap-2'>
            <Link className='xs:basis-[48.8%] xs:h-[50vh] md:flex-[1] md:h-[50vh] basis-[100%] h-[50vh]'>
                <div style={{ backgroundImage: `url(${Left})`}} className='bg-cover bg-center bg-no-repeat p-3 h-full relative flex items-end z-[3]'>
                    <Cover/>
                    <Label title='Landon Armchair' price='45.65'/>
                </div>
            </Link>
            <Link className='xs:basis-[48.8%] xs:h-[50vh] md:flex-[1] md:h-[50vh] basis-[100%] h-[50vh]'>
                <div style={{ backgroundImage: `url(${Middle})`}} className='bg-cover bg-center bg-no-repeat p-3 h-full relative flex items-end z-[3]'>
                    <Cover/>
                    <Label title='Landon Armchair' price='45.65'/>
                </div>
            </Link>
            <Link className='xs:basis-full xs:h-[40vh] md:flex-[2] md:h-[50vh] basis-[100%] h-[50vh]'>
                <div style={{ backgroundImage: `url(${Right})`}} className='bg-cover bg-center bg-no-repeat p-3 h-full relative flex items-end z-[3]'>
                    <Cover/>
                    <Label title="Jack's suede couch" price={1235.50}/>
                </div>
            </Link>
            
        </div>
    </motion.section>
  )
}

export default Featured