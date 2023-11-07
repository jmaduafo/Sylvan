import React, { useState, useEffect } from "react";
import Label from "../Label";
import Heading from "../Heading";
import Cover from "../Cover";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import CardPlaceholder from "../CardPlaceholder";

const SimilarItems = ({ product }) => {
  const [allSimilar, setAllSimilar] = useState();
  const [loading, setLoading] = useState(false);

  const { categoryName, productId } = useParams();

  function getSimilar() {
    // Queries for the same category name
    const similarRef = query(
      collection(db, "products"),
      where("category", "==", categoryName)
    );
    // Queries for similar materials
    const materialRef = query(
      collection(db, "products"),
      where("materials", "array-contains-any", product.materials)
    );

    async function similar() {
      const similarSnap = await getDocs(similarRef);
      const materialSnap = await getDocs(materialRef);

      const array = [];
      similarSnap.forEach((doc) => {
        array.push({ ...doc.data() });
      });
      materialSnap.forEach((doc) => {
        array.push({ ...doc.data() });
      });

      // Creates a unique array that contains all the queried ids so none are the same
      const similar = [...new Set(array.map((obj) => obj.id))];
      const findAll = [];
      similar.map((obj) => {
        // Loop through the first array and check for matching ids
        findAll.push(array.find((sim) => sim.id === obj));
      });

      // Leave out the object containing the same id as the displayed item in detail page
      setAllSimilar(findAll.filter((obj) => obj.id !== productId));
    }

    similar();
  }

  useEffect(
    function () {
      getSimilar();
      // Load on first load to show placeholder loading animation
      setLoading(true)
      setTimeout(function () {
        setLoading(false);
      }, 4000);
    },
    [product, productId, categoryName] 
  );

  useEffect(
    function () {
      if (loading === true) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        setTimeout(function () {
          setLoading(false);
        }, 4000);
      }
    },
    [loading]
  );

  return (
    <>
      <div className="mt-4">
        <Heading headerText="More like this" />
        <div className="my-2 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1">
          {allSimilar && allSimilar?.length && !loading
            ? allSimilar?.slice(0, 8).map((similar) => {
                return (
                  <Link
                    key={similar.id}
                    to={`/${similar.category}/${similar.id}`}
                  >
                    <div
                      onClick={() => {
                        setLoading(true);
                      }}
                      style={{ backgroundImage: `url(${similar.images[0]})` }}
                      className="relative xs:h-[60vh] 2xl:h-[70vh] h-[50vh] p-2 flex items-end bg-cover bg-center bg-no-repeat"
                    >
                      <Cover />
                      <Label
                        title={similar.name}
                        price={Intl.NumberFormat().format(similar.price)}
                      />
                    </div>
                  </Link>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8].map((place) => {
                return (
                  <div key={place}>
                    <CardPlaceholder/>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default SimilarItems;
