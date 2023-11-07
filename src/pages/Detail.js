import React, { useState, useEffect } from "react";
import AddToCart from "../components/Detail/AddToCart";
import SimilarItems from "../components/Detail/SimilarItems";
import ImageRow from "../components/ImageRow";
import ReturnPolicy from "../components/ReturnPolicy";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useParams } from "react-router-dom";


const Detail = ({ cartOpen, setCartOpen }) => {
  const [ policyOpen, setPolicyOpen ] = useState(false)
  const [ allDetails, setAllDetails ] = useState()
  const [hoveredImage, setHoveredImage] = useState('');
  const [ hovered, setHovered ] = useState(false)
  const [ loading, setLoading ] = useState(false)

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
    setHovered(false)
  }, [productId])

  // useEffect(function() {
  //   getDetail()
  //   setHovered(false)
  // }, [loading])
 
  return (
    <section className="relative">
      <ReturnPolicy setPolicyOpen={setPolicyOpen} policyOpen={policyOpen}/>
      {allDetails?.length && 
      <>
      <div>
          <div className="flex sm:flex-row sm:items-end flex-col-reverse">
            <div className="my-1 sm:basis-[55%] 2xl:basis-[55%] sm:h-[115vh] 2xl:h-[125vh] h-[50vh] object-cover object-bottom">
              <img className='w-full h-full' src={hovered ? hoveredImage : allDetails[0]?.images[0]} alt={allDetails[0]?.name}/>
            </div>
            <div className="sm:basis-[45%] 2xl:basis-[45%] basis-full text-chocolate">
              <AddToCart product={allDetails[0]} setPolicyOpen={setPolicyOpen} policyOpen={policyOpen} />
            </div>
          </div>
          <ImageRow
            images={allDetails[0]?.images}
            hoveredImage={hoveredImage}
            setHoveredImage={setHoveredImage}
            setHovered={setHovered}
          />
        </div>
        <SimilarItems product={allDetails[0]}/> 
    </>
    }
      
    </section>
  );
};

export default Detail;
