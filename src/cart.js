
export const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2
    }
]


export function addToCart(productId, quantity){
    const existingProduct = cart.find(item => item.productId === productId)

    existingProduct ? existingProduct.quantity += quantity : cart.push({ productId, quantity })
}

export function getTotalQuantity(){
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity
    })

    return totalQuantity
}