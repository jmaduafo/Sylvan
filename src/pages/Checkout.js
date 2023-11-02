import React, { useState } from 'react'
import { getStripe } from '../stripe/getStripe';

function Checkout() {
    // const [ loading, setLoading ] = useState(false)

    // Handles Stripe checkout on click
    async function handleCheckout(cartItems) {
        // Wait for stripe checkout to load
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            // shipping_options: [
            //   { shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV' },
            // ],
            lineItems: cartItems?.map(item => {
                return {
                    price_data: { 
                        currency: 'usd',
                        product_data: { 
                          name: item.name,
                          image: item.images[0],
                        },
                        unit_amount: item.price * 100,
                      },
                      adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                      },
                      quantity: item.cartQuantity
                }
            }), 
            // Redirect to success if successful; redirect to full cart page if canceled
            successUrl: `${window.location.origin}/success`,
            cancelUrl:  `${window.location.origin}/cart`,
        });

        if (error) {
            console.warn(error.message);
        }
        
    }

  return (
    <div>Checkout</div>
  )
}

export default Checkout