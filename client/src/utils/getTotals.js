export const totals = (items) => {
    let {total, quantity} = items?.reduce((cartTotal, cartItem) => {
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

    const allTotals = {
        itemTotal: total,
        itemQuantity: quantity
    }

    return allTotals
}