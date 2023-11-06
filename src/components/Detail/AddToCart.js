import React from "react";
import { price } from "../../utils/parseFloat";

function AddToCart({ product, setPolicyOpen, policyOpen}) {
  return (
    <>
      <div className="border-t-siennaOpaque border-t-[1px] px-2 py-1 flex justify-between items-center">
        <h6 className="uppercase">{product?.name}</h6>
        <p>${new Intl.NumberFormat().format(price(product.price))}</p>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
        <p className="text-[12px]">DESCRIPTION</p>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
        <p className="text-[13px] font-light">
          {product?.description}
        </p>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center">
        <p className="text-[12px]">COLORS</p>
        <div className="flex items-center gap-2">
          {product?.colors.map((color) => {
            return (
              <div
                key={color}
                className="flex justify-center items-center w-[12px] h-[12px] rounded-full border-chocolate border-[1px] cursor-pointer"
              >
                <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: color}}></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center">
        <p className="text-[12px]">SIZES</p>
        <div className="flex items-center gap-2">
          {product?.sizes.map((size) => {
            return (
              <p
                key={size}
                className="text-[12px] border-olive border-[1px] py-[2px] px-3 rounded-full bg-olive text-cream cursor-pointer"
              >
                {size}
              </p>
            );
          })}
        </div>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
        <p onClick={() => setPolicyOpen(true)} className="text-[11px] text-sienna uppercase cursor-pointer">Shipping & Return Policy</p>
      </div>
      {/* <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center">
        <p className="text-[red] text-[10px] uppercase">
          You must select a color and size before adding to cart
        </p>
      </div> */}
      <div className="px-2 py-3 border-t-siennaOpaque border-t-[1px] flex justify-evenly items-center">
        <p className="text-[18px] text-chocolate uppercase">-</p>
       
        <p className="text-[18px] text-chocolate uppercase">1</p>
        <p className="text-[18px] text-chocolate uppercase">+</p>
      </div>
      <div className="px-2 py-3 border-t-siennaOpaque border-t-[1.5px] border-b-siennaOpaque border-b-[1.5px] flex justify-between items-center cursor-pointer">
        <h3>ADD TO CART</h3>
      </div>
    </>
  );
}

export default AddToCart;
