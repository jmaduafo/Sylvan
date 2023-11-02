import React from 'react'
import WrongPage from './WrongPage'

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
    <div>
      Shop
    </div>
  )
}

export default Shop