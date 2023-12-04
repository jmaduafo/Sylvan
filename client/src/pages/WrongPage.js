import React, { useState, useEffect } from "react";
import MainPreloader from "../components/MainPreloader";
import Heading from "../components/Heading";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const WrongPage = () => {
  const [allProducts, setAllProducts] = useState();
  const [loading, setLoading] = useState(false);

  function getProducts() {
    setLoading(true);
    const productRef = collection(db, "products");
    async function products() {
      const productSnap = await getDocs(productRef);

      const products = [];
      productSnap.forEach((doc) => {
        products.push(doc.data());
      });
      setAllProducts(products);
    }
    products();
    setLoading(false);
  }

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <section className="">
      <MainPreloader />
      <div className="lg:w-[65%] sm:w-[75%] w-[90%] mx-auto">
        <div className="text-center mb-[3rem]">
          <h1 className="text-sienna sm:text-[210px] md:[280px] lg:text-[350px] 2xl:text-[410px] text-[120px] mb-[-.4em] font-serif">
            404
          </h1>
          <div className="text-left flex justify-end">
            <p className="text-sienna lg:text-[16px] sm:text-[14.5px] text-[13px] 2xl:w-[20%] lg:w-[30%] sm:w-[45%] w-[60%]">
              This page does not exist. Please navigate to <Link to='/'><span className="relative after:content-[''] after:absolute after:bg-sienna after:w-full after:h-[2px] after:top-[90%] after:left-0">home</span></Link> or shop with
              Sylvan
            </p>
          </div>
        </div>
        <div>
          <Heading headerText={"You may like"} linkText={"shop all"} link='/shop/all' />
          <div className="overflow-x-auto mt-2 userScroll">
            <div className="w-[fit-content] flex gap-1">
              {loading && !allProducts.length ? [1, 2, 3, 4, 5].map(place => {
                return (
                  [0, 1, 2, 3, 4, 5].map(place => {
                    return (
                      <div key={place} className="lg:w-[300px] lg:h-[50vh] w-[220px] h-[35vh] bg-siennaOpaque flex justify-center items-center animate-pulse">
                        <h3 className="text-[60px] font-serif text-sienna">S</h3>
                      </div> 
                    )
                  })
                )
              }) : 
              allProducts?.slice(0, 8).map(card => {
                return (
                  <Link key={card.id} to={`/${card.category}/${card.id}`}>
                    <div className="lg:w-[300px] lg:h-[50vh] sm:w-[240px] sm:h-[45vh] w-[220px] h-[40vh] object-cover object-bottom">
                      <img className='w-full h-full' src={card.images[0]} alt={card.name}/>
                    </div> 
                  </Link> 
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrongPage;
