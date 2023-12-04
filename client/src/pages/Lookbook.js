import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import MainPreloader from "../components/MainPreloader";

const Lookbook = () => {
  const [hoveredItem, setHoveredItem] = useState();
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState();

  const [onLoad, setOnLoad] = useState(false);

  const [allLookbook, setAllLookbook] = useState();

  function getLookbook() {
    const lookbookRef = query(
      collection(db, "products"),
      where("isLookbook", "==", true)
    );

    async function lookbook() {
      const docSnap = await getDocs(lookbookRef);

      const lookbook = [];
      docSnap.forEach((doc) => {
        lookbook.push({ ...doc.data() });
      });

      setAllLookbook(lookbook);

      if (!hovered) {
        setHoveredItem(lookbook[0]);
      }
    }

    lookbook();
  }

  useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(
    function () {
      getLookbook();
      setOnLoad(true);
      setLoading(true);

      setTimeout(function () {
        setLoading(false);
      }, 4000);

      setOnLoad(false);
    },
    [onLoad, loading]
  );

  return (
    <section className="mb-1 ">
      <MainPreloader />
      {/* HOVERED IMAGE SHOW */}
      <div className="flex sm:flex-row sm:items-end flex-col sm:my-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeIn }}
          className="sm:basis-[55%] 2xl:basis-[55%] sm:h-[75vh] md:h-[85vh] xl:h-[115vh] 2xl:h-[125vh] h-[75vh] object-cover object-bottom"
        >
          {loading && !hoveredItem ? (
            <div className="h-full flex justify-center items-center bg-siennaOpaque animate-pulse">
              <h3 className="text-[60px] font-serif text-sienna">S</h3>
            </div>
          ) : (
            <img
              className="w-full h-full"
              src={hoveredItem?.images[0]}
              alt={hoveredItem?.name}
            />
          )}
        </motion.div>
        {/* ITEM DETAILS */}
        <div className="sm:basis-[45%] 2xl:basis-[45%] basis-full text-chocolate border-b-siennaOpaque border-b-[1px]">
          <div className="border-t-siennaOpaque border-t-[1px] px-2 py-1 flex justify-between items-center">
            <h6 className="uppercase">{hoveredItem?.name}</h6>
            <p>
              $
              {hoveredItem?.price.toString().length > 5
                ? Intl.NumberFormat().format(
                    parseFloat(hoveredItem?.price).toFixed(2)
                  )
                : parseFloat(hoveredItem?.price).toFixed(2)}
            </p>
          </div>
          <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
            <p className="text-[12px]">DESCRIPTION</p>
          </div>
          <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
            <p className="text-[13px] font-light">{hoveredItem?.description}</p>
          </div>
          <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between">
            <Link to={`/${hoveredItem?.category}/${hoveredItem?.id}`}>
              <p className="text-[10px] uppercase relative cursor-pointer">
                <span className='after:content-[""] after:absolute after:w-full after:h-[1.5px] after:top-[80%] after:left-0 after:bg-chocolate'>
                  View Details
                </span>
              </p>
            </Link>
            <Link to={`/shop/${hoveredItem?.category.toLowerCase()}`}>
              <p className="text-[13px] uppercase">{hoveredItem?.category}</p>
            </Link>
          </div>
        </div>
      </div>
      {/* IMAGE CAROUSEL  */}
      <div className="overflow-x-auto imageRow">
        <div className="w-[fit-content] flex gap-1">
          {allLookbook &&
            allLookbook?.map((book) => {
              return (
                <div
                  key={book.id}
                  className="w-[130px] h-[180px] object-cover object-bottom bg-slate-500"
                >
                  <img
                    className="w-full h-full"
                    onMouseEnter={() => {
                      setHoveredItem(book);
                      setHovered(true);
                    }}
                    src={book.images[0]}
                    alt={book.images[0]}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
