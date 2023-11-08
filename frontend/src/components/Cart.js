import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, {
  CLEAR_CART,
  GET_TOTALS,
  REMOVE_FROM_CART,
} from "../redux/cartSlice";
import TrashCan from "./icons/TrashCan";
import Cancel from "./icons/Cancel";
import QuantityCounter from "./QuantityCounter";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { handleCheckout } from "../utils/handleCheckout";
import { getStripe } from "../stripe/getStripe";

const Cart = ({ setCartOpen, cartOpen }) => {
//   const [ dataItems, setDataItems ] = useState()
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleCancel = () => {
    setCartOpen(false);
  };

  const getTotals = () => {
    dispatch(GET_TOTALS());
  };

  useEffect(
    function () {
      getTotals();
      console.log(cartItems);
    },
    [cartItems]
  );

  const handleCheckout = async (items) => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    }).catch(err => console.log(err))
  }

  return (
    <motion.section
      className={`${
        cartOpen === true ? "visible" : "invisible"
      } duration-[.4s] z-[88] fixed right-0`}
    >
      <motion.div
        initial={{
          opacity: cartOpen === true ? 0 : 1,
          x: cartOpen === true ? "100%" : 0,
        }}
        animate={{
          opacity: cartOpen === true ? 1 : 0,
          x: cartOpen === true ? 0 : "100%",
        }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className={`${
          cartOpen === true ? "w-[100%]" : "w-[0%]"
        } bg-cream border-l-siennaOpaque border-l-[1px] h-screen xs:w-[80vw] md:w-[55vw] lg:w-[45vw] w-[100vw]`}
      >
        <div className="py-3 px-5 text-sienna flex justify-between items-center border-b-siennaOpaque border-b-[1px]">
          <h4 className="uppercase font-medium text-[25px]">
            Your Bag ({totalQuantity})
          </h4>
          <div onClick={handleCancel}>
            <Cancel />
          </div>
        </div>
        <div className="py-3 px-5 max-h-[55vh] overflow-y-auto cartBag border-b-siennaOpaque border-b-[1px]">
          {cartItems?.length ?
            cartItems?.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="p-3 flex border-b-siennaOpaque border-b-[1px] last:border-none gap-4"
                >
                  <div className="basis-[20%] h-[150px] object-cover object-bottom">
                    <img className="w-full h-full" src={cart.images && cart.images[0]} />
                  </div>
                  <div className="basis-[80%]">
                    <div className="text-sienna flex items-center justify-between">
                      <h6 className="uppercase text-[14px]">{cart.name}</h6>
                      <div
                        className="cursor-pointer"
                        onClick={() => dispatch(REMOVE_FROM_CART(cart))}
                      >
                        <TrashCan />
                      </div>
                    </div>
                    <div className="text-sienna">
                      <h5 className="text-[13px]">
                        ${cart.price.toString().length > 6 ? Intl.NumberFormat().format(parseFloat(cart.price).toFixed(2)) : parseFloat(cart.price).toFixed(2)}
                      </h5>
                    </div>
                    <div className="text-sienna flex justify-between items-end h-[65%]">
                      <div className="flex gap-1 items-center">
                        <p className="text-[12px]">{cart.selectedSize}</p>
                        <div className="w-[12px] h-[12px] border-sienna border-[1px] rounded-full flex justify-center items-center">
                          <div
                            className="w-[8px] h-[8px] rounded-full"
                            style={{ backgroundColor: cart.selectedColor }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <QuantityCounter
                          cart={cart}
                          count={cart.cartQuantity}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            :
            <div className="text-center py-[3rem] flex justify-center items-center">
                <p className="text-sienna font-light">No items added to your bag yet</p>
            </div>}
            
        </div>
        <div className="py-3 px-4">
          <div className="my-2 px-2 text-sienna flex justify-between items-center">
            <p
              onClick={() => cartItems?.length && dispatch(CLEAR_CART())}
              className={`${cartItems.length && 'cursor-pointer'} uppercase text-[12px]`}
            >
              {cartItems?.length ? 'clear all' : 'subtotal'}
            </p>
            <h3 className="text-[20px]">
              ${totalPrice.toString().length > 6 ? Intl.NumberFormat().format(parseFloat(totalPrice).toFixed(2)) : parseFloat(totalPrice).toFixed(2)}
            </h3>
          </div>
          {cartItems.length ?
            <button onClick={() => handleCheckout(cartItems)} className="py-2 rounded-lg bg-olive text-cream sm:text-[18px] text-[15px] w-full uppercase text-center font-light">
                Proceed to Checkout
            </button>
         : ''
          }
          <Link to="/shop/all">
            <button className="py-2 mt-2 hover:bg-[#9b4e17b2] hover:text-cream duration-[.4s] border-siennaOpaque border-[1px] text-sienna sm:text-[15px] text-[13px] w-full uppercase text-center font-light">
              Continue Shopping
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Cart;
