import React, { useState } from "react";
import { price } from "../../utils/parseFloat";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, DECREASE_QUANTITY } from "../../redux/cartSlice";

function AddToCart({
  setMessageType,
  setMessage,
  product,
  setPolicyOpen,
  setCartOpen,
}) {
  // Takes in the selected color for the furniture
  const [selectedColor, setSelectedColor] = useState("");
  // Takes in the selected size
  const [selectedSize, setSelectedSize] = useState("");
  // Handles quantity increase
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // Handles quantity decrease

  const dispatch = useDispatch();

  function handleAddToCart(item) {
    if (!selectedColor.length || !selectedSize.length) {
      setMessageType("Error message");
      setMessage("You must select both a size and color before adding to cart");
    } else {
      setMessageType("");
      setMessage("");
      dispatch(
        ADD_TO_CART({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          quantity: item.quantity,
          sizes: item.sizes,
          colors: item.colors,
          materials: item.materials,
          category: item.category,
          images: item.images,
          isLookbook: item.isLookbook,
          selectedColor: selectedColor,
          selectedSize: selectedSize,
          selectedQuantity: selectedQuantity,
          cartQuantity: selectedQuantity,
        })
      );
      setCartOpen(true);
    }
  }

  function handleDecrease() {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prev) => prev - 1);
    }
  }

  function handleIncrease() {
    setSelectedQuantity((prev) => prev + 1);
  }

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
        <p className="text-[13px] font-light">{product?.description}</p>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center">
        <p className="text-[12px]">COLORS</p>
        <div className="flex items-center gap-2">
          {product?.colors.map((color) => {
            return (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`flex justify-center items-center w-[12px] h-[12px] rounded-full border-chocolate border-[1px] cursor-pointer ${
                  selectedColor === color ? "border-[2px]" : "border-[1px]"
                }`}
              >
                <div
                  className={`w-[8px] h-[8px] rounded-full border-[1px]`}
                  style={{ backgroundColor: color }}
                ></div>
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
                className={`${
                  selectedSize === size
                    ? "bg-cream text-olive border-olive"
                    : "bg-olive text-cream"
                } text-[12px] border-[1px] py-[2px] px-3 rounded-full cursor-pointer`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            );
          })}
        </div>
      </div>
      <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px]">
        <p
          onClick={() => setPolicyOpen(true)}
          className="text-[11px] text-sienna uppercase cursor-pointer"
        >
          Shipping & Return Policy
        </p>
      </div>
      {/* <div className="px-2 py-1 border-t-siennaOpaque border-t-[1px] flex justify-between items-center">
        <p className="text-[red] text-[10px] uppercase">
          You must select a color and size before adding to cart
        </p>
      </div> */}
      <div className="px-2 py-3 border-t-siennaOpaque border-t-[1px] flex justify-evenly items-center">
        {/* QUANTITY DECREASE COUNTER */}
        <p
          onClick={handleDecrease}
          className={`${
            selectedQuantity === 1
              ? "opacity-[.5] cursor-not-allowed"
              : "cursor-pointer"
          } text-[18px] text-chocolate uppercase`}
        >
          -
        </p>
        <p className="text-[18px] text-chocolate uppercase">
          {selectedQuantity}
        </p>
        {/* QUANTITY INCREASE COUNTER */}
        <p
          onClick={handleIncrease}
          className="cursor-pointer text-[18px] text-chocolate uppercase"
        >
          +
        </p>
      </div>
      <div onClick={() => handleAddToCart(product)} className="px-2 py-3 border-t-siennaOpaque border-t-[1.5px] border-b-siennaOpaque border-b-[1.5px] flex justify-between items-center cursor-pointer">
        <h3>ADD TO CART</h3>
      </div>
    </>
  );
}

export default AddToCart;
