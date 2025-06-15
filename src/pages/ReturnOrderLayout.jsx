import OrderHistory from "../components/ReturnOrderComponents/OrderHistory"
import { orderedCart, orderedCartId_Date } from '../cart'

export default function ReturnOrderLayout(){
    return(
        <section className="yourOrders-container">
            <h1>Your Orders</h1>

            { orderedCart.map((cartItem, index) => <OrderHistory cartItem={cartItem} index={index} key={orderedCartId_Date[index].generateKey}/>) }
            
        </section>
    )
}