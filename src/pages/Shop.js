import React, { useState, useEffect } from 'react'
import WrongPage from './WrongPage'
import Filter from '../components/Shop/Filter'
import CardDisplay from '../components/Shop/CardDisplay'
import { categories } from '../utils/shopCategories'
import Toast from '../components/Toast'
import { db } from '../firebase/config'
import { getDocs, collection } from 'firebase/firestore'

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

  const [selectedCategory, setSelectedCategory] = useState(path.split('%20').join(' '))
  const [ message, setMessage ] = useState('')

  const [allProducts, setAllProducts] = useState()
  const [filteredProducts, setFilteredProducts] = useState()
  const [selectedSize, setSelectedSize ] = useState()
  const [selectedColor, setSelectedColor ] = useState()

  const [onLoad, setOnLoad] = useState(false)


  function getAllProducts() {
      const productRef = collection(db, 'products')

      async function products() {
          const productSnap = await getDocs(productRef)

          const productList = []
          productSnap.forEach(doc => {
              productList.push({...doc.data(), id: doc.id})
          })

          setAllProducts(productList)
      }

      products()
  }

  useEffect(function() {
    getAllProducts()
    setOnLoad(true)
    setFilteredProducts(allProducts)
    setOnLoad(false)
  }, [onLoad])

  useEffect(function() {
    if (selectedCategory.toLowerCase() === 'all') {
      setFilteredProducts(allProducts)
    } else {
      setFilteredProducts(allProducts?.filter(product => product.category === selectedCategory.toLowerCase()))
    }
    console.log(selectedCategory)
    
  }, [allProducts, selectedCategory])

  return (
    <section>
      <Toast setMessage={setMessage} message={message}/>
      <div className='px-6 py-3 border-b-siennaOpaque border-b-[1px]'>
        <h4 className='uppercase text-[22px] text-sienna'>{selectedCategory} ({filteredProducts?.length})</h4>
      </div>
      <div className='flex flex-col md:flex-row mb-1'>
        <div className='md:basis-[30%] md:h-screen md:border-r-siennaOpaque md:border-r-[1px] border-b-siennaOpaque border-b-[1px]'>
          <Filter setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        </div>
        {/* If there are products, then display them; if not, show that there are no products available */}
        {filteredProducts?.length ? 
          <div className='cardDisplay md:basis-[70%] md:h-screen gap-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 overflow-y-auto webkit-scrollbar:w-[1px] grid grid-col-1'>
            <CardDisplay products={filteredProducts} selectedSize={selectedSize} setSelectedSize={setSelectedSize}
          setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
          </div>
        :
          <div className='flex justify-center w-full pt-5'>
            <p className='text-[15px] text-sienna font-light'>No products displayed yet</p>
          </div>
        }
        
      </div>
    </section>
  )
}

export default Shop