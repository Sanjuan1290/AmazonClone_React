import { NavLink } from "react-router-dom"
import { getOrderSummary } from "../../cart"
import { convertFromPriceCents } from "../../utils"

export default function OrderSummary({cartItem}){

    const orderSummary = getOrderSummary(cartItem) 

    return(
        <section className="orderSummary-container">
            <h3>Order Summary</h3>

            <div className="price">
                <p>Items (3):</p>
                <p>${convertFromPriceCents(orderSummary.itemTotalPrice)}</p>
            </div>
            <div className="price">
                <p>Shipping & handling:</p>
                <p>${convertFromPriceCents(orderSummary.totalShippingPrice)}</p>
            </div>

            <div className="line-1"></div>

            <div className="price tax">
                <p>Total before tax:</p>
                <p>${convertFromPriceCents(orderSummary.totalPriceBeforeTax)}</p>
            </div>
            <div className="price">
                <p>Estimated tax (10%):</p>
                <p>${convertFromPriceCents(orderSummary.taxPrice)}</p>
            </div>

            <div className="line-2"></div>
            <div className="price items">
                <p>Items (3):</p>
                <p>${convertFromPriceCents(orderSummary.totalPrice)}</p>
            </div>

            <NavLink to="/return_orders">
                <button>Place your order</button>
            </NavLink>
        </section>
    )
}