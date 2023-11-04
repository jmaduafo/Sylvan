import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        totalQuantity: 0,
        totalPrice: 0, 
        cartOpen: true
    },
    reducers: {
        ADD_TO_CART(state, action) {
            const cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            // If the cartIndex is not -1, then increment just the cartQuantity
            // else add a new item with just a quantity of 1 and push to array
            if (cartIndex >= 0) {
                state.cartItems[cartIndex].cartQuantity++
            } else {
                const newItem = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(newItem)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            state.cartOpen = true;

        },
        REMOVE_FROM_CART(state, action) {
            // Filter and check for any item that doesn't match the id of item 
            const cartFilter = state.cartItems.filter(item => item.id !== action.payload.id);

            state.cartItems.push(cartFilter)

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        CLEAR_CART(state) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        DECREASE_QUANTITY(state, action) {
            const cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (state.cartItems[cartIndex].cartQuantity > 1) {
                state.cartItems[cartIndex].cartQuantity--
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        GET_TOTALS(state, action) {
            // reduce(initial_value, current_value)
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const itemTotal = cartItem.price * cartItem.cartQuantity

                // Accumulate cart total price
                cartTotal.total += itemTotal;
                // Accumulate cart total quantity
                cartTotal.quantity += cartItem.cartQuantity

                return cartTotal
            }, 
            {
                total: 0,
                quantity: 0
            })

            state.totalPrice = total;
            state.totalQuantity = quantity
        },
        CLOSE_CART(state) {
            state.cartOpen = false
        },
        OPEN_CART(state) {
            state.cartOpen = true
        }

    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, GET_TOTALS, CLOSE_CART, OPEN_CART } = cartSlice.actions

export default cartSlice.reducer