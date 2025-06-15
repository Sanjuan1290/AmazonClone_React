import OrderHistory from "../components/ReturnOrderComponents/OrderHistory"
import { orderedCart, orderedCartId } from '../cart'

export default function ReturnOrderLayout(){
    return(
        <section className="yourOrders-container">
            <h1>Your Orders</h1>

            { orderedCart.map((cartItem, index) => <OrderHistory cartItem={cartItem} index={index} key={orderedCartId[index]}/>) }
            
        </section>
    )
}