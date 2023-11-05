import React, { useState } from "react";
import AddToCart from "../components/Detail/AddToCart";
import SimilarItems from "../components/Detail/SimilarItems";
import ImageRow from "../components/ImageRow";

const Detail = ({ cartOpen, setCartOpen }) => {
  const [hoveredImage, setHoveredImage] = useState("");

  return (
    <section>
      <div className="flex sm:flex-row sm:items-end flex-col-reverse">
        <div className="my-1 sm:flex-1 2xl:basis-[60%] sm:h-[75vh] 2xl:h-[85vh] 2xl:flex 2xl:gap-1 bg-slate-500 2xl:bg-transparent h-[50vh]">
          <div
            className={`w-full bg-cover bg-center bg-no-repeat bg-slate-500`}
          ></div>
          <div
            className={`2xl:block hidden w-full bg-cover bg-center bg-no-repeat bg-slate-500`}
          ></div>
        </div>
        <div className="sm:flex-1 2xl:basis-[40%] basis-full text-chocolate">
          <AddToCart />
        </div>
      </div>
      <ImageRow
        images={[1, 2, 3]}
        hoveredImage={hoveredImage}
        setHoveredImage={setHoveredImage}
      />
      <SimilarItems />
    </section>
  );
};

export default Detail;
