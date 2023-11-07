import { getStripe } from '../stripe/getStripe';

 // Handles Stripe checkout on click
 export async function handleCheckout(cartItems) {
    // Wait for stripe checkout to load
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
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
        cancelUrl:  `${window.location.origin}/cancel`,
    });

    if (error) {
        console.warn(error.message);
    }
    
}