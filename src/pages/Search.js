import React, { useEffect, useState } from "react";
import Label from "../components/Label";
import Cover from "../components/Cover";
import { Link, useSearchParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { price } from "../utils/parseFloat";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [ allProducts, setAllProducts ] = useState()
  const [ filterSearch, setFilterSearch ] = useState()

  function getSearch() {
    const searchRef = collection(db, 'products')

    async function search() {
      const docSnap = await getDocs(searchRef)

      const searchArray = []
      docSnap.forEach(doc => {
        searchArray.push({...doc.data()})
      })

      setAllProducts(searchArray)
    }

    search()
  }

  useEffect(function() {
    getSearch()
  }, [])

  useEffect(function() {

    const search = searchParams.get('product')

    setFilterSearch(allProducts?.filter(product => product.category.toLowerCase().includes(search) ||
    product.name.toLowerCase().includes(search)))
  }, [searchParams.get('product')])

  return (
    <section>
      <div className="">
        <div className="py-2 px-6 border-b-siennaOpaque border-b-[1px]">
            <h4 className='uppercase text-[22px] text-sienna'>{searchParams.get('product')} ({filterSearch?.length})</h4>
        </div>
        {filterSearch?.length ? 
        <div className="my-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-1">
        {filterSearch?.map((card) => {
          return (
          <Link key={card.id} to={`/${card.category}/${card.id}`}>
              <div style={{ backgroundImage: `url(${card.images[0]})`}} className="p-2 relative flex items-end bg-slate-300 h-[60vh] 2xl:h-[70vh] bg-cover bg-no-repeat bg-center">
                  <Cover/>
                  <Label title={card.name} price={new Intl.NumberFormat().format(price(card.price))}/>
              </div>
          </Link>
          )
        })}
      </div>
      :
      <div className="text-center mt-8 mb-6"><p className="text-sienna text-[15px] font-light">No products displayed</p></div>}
        
        {/* <div className="text-center mt-6 mb-5">
            <p className="font-light text-sienna">No products found. Please try another search.</p>
        </div> */}
      </div>
    </section>
  );
};

export default Search;
