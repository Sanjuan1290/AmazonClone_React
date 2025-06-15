import { getArrivingDate } from "./utils"

export let cart = JSON.parse(localStorage.getItem('cart')) || []
export let orderedCart = JSON.parse(localStorage.getItem('orderedCart')) || []
export let orderedCartId_Date = JSON.parse(localStorage.getItem('orderedCartId_Date')) || []

export function addToCart(productId, quantity){
    const existingProduct = cart.find(item => item.productId === productId)

    existingProduct ? existingProduct.quantity += quantity : cart.push({ productId, quantity, deliveryOption: '1' })

    saveCart()
}


export function getTotalQuantity(){
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity
    })

    return totalQuantity
}


export function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function updateItemQuantity(productId, newQuantity){
    
    cart = cart.map(item => (
        item.productId === productId ? {...item, quantity: newQuantity} : item
    ))

    saveCart()
}

export function removeItem(productId){
    cart = cart.filter(item => item.productId !== productId)
    saveCart()
}

export function updateDeliveryOption(productId, deliveryId){
    cart = cart.map(item => item.productId === productId ? {...item, deliveryOption: deliveryId} : item)
    saveCart()
}

export function getOrderSummary(cartItem){
    let itemTotalPrice = 0
    let totalShippingPrice = 0
    let totalPriceBeforeTax = 0;
    let taxPrice = 0;
    let totalPrice = 0;

    cartItem.forEach(item => {
        itemTotalPrice += item.priceCents * item.quantity

        if(item.deliveryOption === '1') totalShippingPrice += 0
        else if(item.deliveryOption === '2') totalShippingPrice += 499
        else if(item.deliveryOption === '3') totalShippingPrice += 999

    })
    totalPriceBeforeTax = itemTotalPrice + totalShippingPrice
    taxPrice = totalPriceBeforeTax * .10
    totalPrice = totalPriceBeforeTax + taxPrice

    return {itemTotalPrice, 
        totalShippingPrice, 
        totalPriceBeforeTax, 
        taxPrice, 
        totalPrice}
}


export function placeOrder(cartItem, getOrderDate) {
    const generateKey = crypto.randomUUID()
    const orderedDate = getOrderDate()

    // add arrivingDate to each item
    const cartItemWithDate = cartItem.map(item => ({
        ...item,
        arrivingDate: getArrivingDate(item.deliveryOption)
    }))

    orderedCart.push(cartItemWithDate)
    orderedCartId_Date.push({ generateKey, orderedDate })

    localStorage.setItem('orderedCart', JSON.stringify(orderedCart))
    localStorage.setItem('orderedCartId_Date', JSON.stringify(orderedCartId_Date))

    cart = []
    saveCart()
}
