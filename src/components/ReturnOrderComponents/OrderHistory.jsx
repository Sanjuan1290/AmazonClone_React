import OrderItem from './OrderItem'
import { convertFromPriceCents } from '../../utils';
import { orderedCartId, getOrderSummary } from '../../cart'

export default function OrderHistory({ cartItem, index }){

    console.log(cartItem);
    console.log(orderedCartId);

    const totalPrice = convertFromPriceCents(getOrderSummary(cartItem).totalPrice)
    console.log(totalPrice);

    return(
        <section className="orderList-container">

            <section className="top-section">
                <div className="orderPlace">
                    <p>Order Placed:</p>
                    <p>Thursday, June 12</p>
                </div>

                <div className="total">
                    <p>Total:</p>
                    <p>${totalPrice}</p>
                </div>

                <div className="orderId">
                    <p>Order ID:</p>
                    <p>{orderedCartId[index]}</p>
                </div>
            </section>

            <section className="all-items-container">
                <OrderItem />
            </section>
        </section>
    )
}