import React from "react";
import { motion } from "framer-motion";
import QuickAdd from "./QuickAdd";
import Toast from "../Toast";
import { Link } from "react-router-dom";
import Cover from "../Cover";
import Label from "../Label";

const CardDisplay = ({ products, setSelectedSize, setSelectedColor }) => {
  return (
    <>
      <Toast />
      {products?.map((product) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            layout
            key={product.id}
            style={{ backgroundImage: `url(${product.images[0]})` }}
            className="relative duration-[.4s] bg-cover bg-center bg-no-repeat group p-4 xs:h-[50vh] md:h-[65vh] 2xl:h-[85vh] h-[60vh] text-cream cursor-pointer"
          >
            <Link to={`/${product.category}/${product.id}`}>
              <Cover />
            </Link>
            <motion.div
              className={`z-[5] ease-in group-hover:visible invisible flex justify-between items-start flex-wrap h-[10%] gap-x-6 gap-y-2`}
            >
              <QuickAdd
                itemSizes={product.sizes}
                itemColors={product.colors}
                setSelectedColor={setSelectedColor}
                setSelectedSize={setSelectedSize}
              />
            </motion.div>
            <Link to={`/${product.category}/${product.id}`}>
              <div className="relative flex items-end h-[90%]">
                <Label title={product.name} price={product.price} />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default CardDisplay;
