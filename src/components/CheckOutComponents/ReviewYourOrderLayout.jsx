import YourOrder from "./YourOrder"
import OrderSummary from "./OrderSummary"

export default function ReviewYourOrderLayout(){

    return(
        <main className="checkout-orderReview-container">
            <div className="review-order-container">
                <h2>Review your order</h2>
                 <YourOrder />
            </div>

            <OrderSummary />
        </main>
    )
}