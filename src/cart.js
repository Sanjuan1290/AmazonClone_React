
export let cart = JSON.parse(localStorage.getItem('cart')) || []

export function addToCart(productId, quantity){
    const existingProduct = cart.find(item => item.productId === productId)

    existingProduct ? existingProduct.quantity += quantity : cart.push({ productId, quantity })

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

export function removeItem(){

}