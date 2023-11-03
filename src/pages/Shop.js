import React from 'react'
import WrongPage from './WrongPage'
import Filter from '../components/Shop/Filter'
import CardDisplay from '../components/Shop/CardDisplay'

const Shop = () => {
  let path = window.location.pathname.split('/')[2]

  const categories = ['All', 'Chairs', 'Sofas', 'Dining', 'Home Decor', 'Accents']

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
  return (
    <section>
      <div className='flex flex-col md:flex-row'>
        <div className='md:basis-[30%] md:h-screen md:border-r-siennaOpaque md:border-r-[1px] border-b-siennaOpaque border-b-[1px]'>
          <Filter/>
        </div>
        <div className='md:basis-[70%] overflow-y-auto'>
          <CardDisplay/>
        </div>
      </div>
    </section>
  )
}

export default Shop