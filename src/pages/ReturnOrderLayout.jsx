import OrderHistory from "../components/ReturnOrderComponents/OrderHistory"
import { orderedCart, orderedCartId_Date } from '../cart'
import { useOutletContext } from "react-router-dom"

export default function ReturnOrderLayout(){

    const setCartQuantity = useOutletContext()

    return(
        <section className="yourOrders-container">
            <h1>Your Orders</h1>

            { orderedCart.map((cartItem, index) => <OrderHistory setCartQuantity={setCartQuantity} cartItem={cartItem} index={index} key={orderedCartId_Date[index].generateKey} orderId={orderedCartId_Date[index].generateKey}/>) }
            
        </section>
    )
}