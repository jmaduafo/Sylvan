import React, { useState, useEffect } from "react";
import WrongPage from "./WrongPage";
import Filter from "../components/Shop/Filter";
import CardDisplay from "../components/Shop/CardDisplay";
import { categories } from "../utils/shopCategories";
import Toast from "../components/Toast";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const Shop = ({ cartOpen, setCartOpen }) => {
  // SPLIT WINDOW PATHNAME BY '/' AND '%20' TO GET THE ACCURATE FILTER
  let path = window.location.pathname.split("/")[2].split('%20').join(' ');

  function show() {
    // FIND WHERE SPLIT PATH NAME MATCHES CATEGORIES IN ARRAY LOCATED IN UTILS FOLDER
    const categoryIndex = categories.findIndex(
      (category) => category.toLowerCase() === path
    );

    // IF PATHNAME DOESN'T MATCH ANY OF THE CATEGORIES, SHOW ERROR PAGE
    if (categoryIndex === -1) {
      return <WrongPage />;
    } else {
      return <DisplayShop setCartOpen={setCartOpen} cartOpen={cartOpen}/>;
    }
  }
  return <div>{show()}</div>;
};

function DisplayShop({ cartOpen, setCartOpen }) {
  let path = window.location.pathname.split("/")[2];

  const [selectedCategory, setSelectedCategory] = useState(
    path.split("%20").join(" ")
  );
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [allProducts, setAllProducts] = useState();
  // Handles product filtering of all products
  const [filteredProducts, setFilteredProducts] = useState();

  // User's choosing of size and color
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [quickAdd, setQuickAdd] = useState(false)

  const [onLoad, setOnLoad] = useState(false);

  // Gets all the products from the backend
  function getAllProducts() {
    const productRef = collection(db, "products");

    async function products() {
      const productSnap = await getDocs(productRef);

      const productList = [];
      productSnap.forEach((doc) => {
        productList.push({ ...doc.data(), id: doc.id });
      });

      setAllProducts(productList);
    }

    products();
  }

  useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(
    function () {
      getAllProducts();
      setOnLoad(true);
      setFilteredProducts(allProducts);
      setOnLoad(false);
    },
    [onLoad]
  );

  useEffect(
    function () {
      // IF THE SELECTED CATEGORY IS 'ALL', THEN RETURN ALL PRODUCTS
      // ELSE, FILTER WHERE SELECTED CATEGORY MATCHES THE CATEGORY IN DATABASE
      if (selectedCategory.toLowerCase() === "all") {
        setFilteredProducts(allProducts);
      } else {
        setFilteredProducts(
          allProducts?.filter(
            (product) => product.category === selectedCategory.toLowerCase()
          )
        );
      }
    },
    [allProducts, selectedCategory]
  );

  return (
    <section>
      <Toast messageType={messageType} setMessage={setMessage} message={message}/>
      <div className="px-6 py-3 border-b-siennaOpaque border-b-[1px]">
        <h4 className="uppercase text-[22px] text-sienna">
          {selectedCategory} ({filteredProducts?.length})
        </h4>
      </div>
      <div className="flex flex-col md:flex-row mb-1">
        <div className="md:basis-[30%] md:h-screen md:border-r-siennaOpaque md:border-r-[1px] border-b-siennaOpaque border-b-[1px]">
          <Filter
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        {/* If there are products, then display them; if not, show that there are no products available */}
        {filteredProducts?.length ? (
          <div className="cardDisplay md:basis-[70%] gap-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 grid grid-col-1">
            <CardDisplay
              products={filteredProducts}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setSelectedColor={setSelectedColor}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              setMessage={setMessage}
              setQuickAdd={setQuickAdd}
              setMessageType={setMessageType}
              selectedColor={selectedColor}
            />
          </div>
        ) : (
          <div className="flex justify-center w-full pt-5">
            <p className="text-[15px] text-sienna font-light">
              No products displayed yet
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;
