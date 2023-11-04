import React, { useState } from 'react'
import PlusCircle from '../icons/PlusCircle'
import { motion } from 'framer-motion'
import { categories } from '../../utils/shopCategories'
import { Link, useSearchParams } from 'react-router-dom'


const Filter = ({setSelectedCategory, selectedCategory }) => {
    const [isSortClick, setIsSortClick ] = useState(false)
    const [ searchParams, setSearchParams ] = useSearchParams()

    console.log(searchParams)

    const sortCategories = [
        {
            'sortCategory': 'A-Z',
            'types': null,
            'sortParams': 
                {
                    'sort': 'name',
                    'order': 'asc'
                }
        },
        {
            'sortCategory': 'Z-A',
            'types': null,
            'sortParams': 
                {
                    'sort': 'name',
                    'order': 'desc'
                }
        },
        {
            'sortCategory': 'Oldest to Newest',
            'types': null,
            'sortParams': 
                {
                    'sort': 'date',
                    'order': 'asc'
                }
        },
        {
            'sortCategory': 'Newest to Oldest',
            'types': null,
            'sortParams': 
                {
                    'sort': 'date',
                    'order': 'desc'
                }
        },
        {
            'sortCategory': '$ to $$$',
            'types': null,
            'sortParams': 
                {
                    'sort': 'price',
                    'order': 'asc'
                }
        },
        {
            'sortCategory': '$$$ to $',
            'types': null,
            'sortParams': 
                {
                    'sort': 'price',
                    'order': 'desc'
                }
        },
        {
            'sortCategory': 'Material:',
            'types': ['Wood', 'Iron', 'Suede', 'Ceramics', 'Leather'],
            'sortParams': null
        }
    ]

  return (
    <>
        <div className='px-6 py-3 border-b-siennaOpaque border-b-[1px]'>
            <h6 className='text-sienna'>FILTER BY:</h6>
            <div className='flex flex-wrap gap-2 mt-6'>
                {categories.map(category => {
                    return (
                        <Link key={category} to={`/shop/${category.toLowerCase()}`}><p onClick={() => setSelectedCategory(category)} className='uppercase text-[12px] font-light px-4 py-[3px] rounded-full bg-olive text-cream text-center cursor-pointer'>{category}</p></Link>
                    )
                })}
            </div>
        </div>
        <div className='px-6 py-3'>
            <div className='flex items-center gap-2'>
                <h6 className='text-sienna'>SORT BY:</h6>
                <div onClick={() => {setIsSortClick(prev => !prev)}} className={`cursor-pointer text-sienna duration-[.4s] ${isSortClick ? 'rotate-[45deg]' : 'rotate-0'}`}>
                    <PlusCircle/>
                </div>
            </div>
            
            <motion.div initial={{ opacity: isSortClick ? 0 : 1 }} animate={{ opacity: isSortClick ? 1 : 0 }} className={`mt-6 border-t-siennaOpaque border-t-[1px] ${isSortClick ? 'visible' : 'invisible'} ${isSortClick ? 'h-full' : 'h-0'}`}>
                {sortCategories.map(sort => {
                    return (
                        <div key={sort.sortCategory} onClick={() => sort.sortParams && setSearchParams(sort.sortParams)} className='border-b-siennaOpaque border-b-[1px] p-1 cursor-pointer group duration-[.4s] ease-in'>
                           <p className='text-[13px] text-[#743406d8] group-hover:text-sienna'>{sort.sortCategory}</p>
                           {sort.types ? 
                            <div className='mt-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-1'>
                                    {sort.types.map(type => {
                                    return <div key={type} onClick={() => setSearchParams({'material': type.toLowerCase()})} className={`${searchParams.get('material') === type.toLowerCase() ? 'bg-[#9b4e17b2]' : 'transparent'} p-1 duration-[.4s] text-center border-siennaOpaque border-[1px] hover:bg-[#9b4e17b2] group`}>
                                        <p className={`${searchParams.get('material') === type.toLowerCase() ? 'text-cream' : 'text-[#743406d8]'} text-[13px] duration-[.4s]  hover:text-cream `}>{type}</p>
                                    </div>
                                    })}
                            </div>
                            
                            : ''}
                            
                        </div>
                    )
                })}
            </motion.div>
        </div>
    </>
  )
}

export default Filter