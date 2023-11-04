import React, { useState, useEffect } from 'react'
import WrongPage from './WrongPage'
import Filter from '../components/Shop/Filter'
import CardDisplay from '../components/Shop/CardDisplay'
import { categories } from '../utils/shopCategories'

const Shop = ({ cartOpen, setCartOpen }) => {
  let path = window.location.pathname.split('/')[2]

  function show() {
    const categoryIndex = categories.findIndex(category => category.toLowerCase() === path)

    if (categoryIndex === -1) {
      return <WrongPage/>
    } else {
      return <DisplayShop/>
    }
  }
  return (
    <div>{show()}</div>
  )
}

function DisplayShop() {
  let path = window.location.pathname.split('/')[2]
  const [selectedCategory, setSelectedCategory] = useState(path)

  return (
    <section>
      <div className='px-6 py-3 border-b-siennaOpaque border-b-[1px]'>
        <h4 className='uppercase text-[22px] text-sienna'>{selectedCategory} (5)</h4>
      </div>
      <div className='flex flex-col md:flex-row mb-1'>
        <div className='md:basis-[30%] md:h-screen md:border-r-siennaOpaque md:border-r-[1px] border-b-siennaOpaque border-b-[1px]'>
          <Filter setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        </div>
        <div className='cardDisplay md:basis-[70%] md:h-screen gap-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 overflow-y-auto webkit-scrollbar:w-[1px] grid grid-col-1'>
          <CardDisplay/>
        </div>
      </div>
    </section>
  )
}

export default Shop