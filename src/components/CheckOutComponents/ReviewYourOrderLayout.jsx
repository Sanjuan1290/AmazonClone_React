import YourOrder from "./YourOrder"
import OrderSummary from "./OrderSummary"
import { cart } from '../../cart'

export default function ReviewYourOrderLayout({ products }){

    const cartItem = cart.map(item => {
        return {...products.find(product => product.id === item.productId), quantity: item.quantity}
    })

    console.log(cartItem);

    return(
        <main className={`checkout-orderReview-container`}>
            <div className={`review-order-container `}>
                <h2>Review your order</h2>

                {
                    cartItem.map(item => <YourOrder item={item} key={item.id}/>)
                }
            </div>

            <OrderSummary />
        </main>
    )
}