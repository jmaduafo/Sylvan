import React, { useState, useEffect } from "react";
import AddToCart from "../components/Detail/AddToCart";
import SimilarItems from "../components/Detail/SimilarItems";
import ImageRow from "../components/ImageRow";
import ReturnPolicy from "../components/ReturnPolicy";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useParams } from "react-router-dom";


const Detail = ({ cartOpen, setCartOpen }) => {
  const [hoveredImage, setHoveredImage] = useState("");
  const [ policyOpen, setPolicyOpen ] = useState(false)
  const [ allDetails, setAllDetails ] = useState()

  const { categoryName, productId } = useParams()

  function getDetail() {
    const detailRef = query(collection(db, 'products'), where('id', '==', productId))

    async function detail() {
      const docSnap = await getDocs(detailRef)

      const details = []
      
      docSnap.forEach(doc => {
        details.push({...doc.data()})
      })

      setAllDetails(details)
    }

    detail()
  }

  useEffect(function() {
    getDetail()
    
    console.log(allDetails)
  }, [])
 
  return (
    <section className="relative">
      <ReturnPolicy setPolicyOpen={setPolicyOpen} policyOpen={policyOpen}/>
      {allDetails?.length && 
      <>
        <div className="flex sm:flex-row sm:items-end flex-col-reverse">
        <div style={{ backgroundImage: `url(${allDetails[0]?.images[0]})`}} className="my-1 sm:flex-1 2xl:basis-[60%] sm:h-[75vh] 2xl:h-[85vh] 2xl:flex 2xl:gap-1 bg-slate-500 bg-cover bg-no-repeat bg-center 2xl:bg-transparent h-[50vh]">
          <div
            className={`w-full bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${allDetails[0]?.images[0]})`}}
          ></div>
          <div
            className={`2xl:block hidden w-full bg-cover bg-center bg-no-repeat bg-slate-200`}
          ></div>
        </div>
        <div className="sm:flex-1 2xl:basis-[40%] basis-full text-chocolate">
          <AddToCart product={allDetails[0]} setPolicyOpen={setPolicyOpen} policyOpen={policyOpen} />
        </div>
      </div>
      <ImageRow
        images={allDetails[0]?.images}
        hoveredImage={hoveredImage}
        setHoveredImage={setHoveredImage}
      />
      <SimilarItems /> 
    </>
    }
      
    </section>
  );
};

export default Detail;
