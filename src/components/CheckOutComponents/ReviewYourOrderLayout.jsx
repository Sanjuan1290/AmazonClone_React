import YourOrder from "./YourOrder"
import OrderSummary from "./OrderSummary"
import { cart } from '../../cart'

export default function ReviewYourOrderLayout({ products, setHeaderQuantity }){

    const cartItem = cart.map(item => {
        return {...products.find(product => product.id === item.productId), quantity: item.quantity}
    })


    return(
        <main className={`checkout-orderReview-container`}>
            <div className={`review-order-container `}>
                <h2>Review your order</h2>

                {
                    cartItem.map(item => <YourOrder item={item} setHeaderQuantity={setHeaderQuantity} key={item.id}/>)
                }
            </div>

            <OrderSummary />
        </main>
    )
}