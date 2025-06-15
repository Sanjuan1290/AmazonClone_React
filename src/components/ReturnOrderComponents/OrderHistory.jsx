import OrderItem from './OrderItem'
import { convertFromPriceCents } from '../../utils'
import { orderedCartId_Date, getOrderSummary } from '../../cart'

export default function OrderHistory({ cartItem, index }) {
    const totalPrice = convertFromPriceCents(getOrderSummary(cartItem).totalPrice)

    const orderedDate = orderedCartId_Date[index]?.orderedDate
    const formattedDate = orderedDate
        ? `${orderedDate.dayString}, ${orderedDate.monthString} ${orderedDate.date}`
        : 'Unknown'

    const orderId = orderedCartId_Date[index]?.generateKey || 'Unknown'
    return (
        <section className="orderList-container">
            <section className="top-section">
                <div className="orderPlace">
                    <p>Order Placed:</p>
                    <p>{formattedDate}</p>
                </div>

                <div className="total">
                    <p>Total:</p>
                    <p>${totalPrice}</p>
                </div>

                <div className="orderId">
                    <p>Order ID:</p>
                    <p>{orderId}</p>
                </div>
            </section>

            <section className="all-items-container">
                {cartItem.map((item, index) => (
                    <OrderItem item={item} index={index} key={item.id} />
                ))}
            </section>
        </section>
    )
}
