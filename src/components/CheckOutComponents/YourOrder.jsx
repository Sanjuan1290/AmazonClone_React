import { convertFromPriceCents } from '../../utils'

export default function YourOrder({ item }){

    return(
        <section className="order-container">

            <div className="delivery-date">
                <strong>Delivery date: Monday, June 23</strong>
            </div>

            <div className="orderDetails-deliveryOptions">
                <div className="orderDetails">
                    <img src={item.image} alt="dsfds" />
                    <div>
                        <strong className="name">{item.name}</strong>
                        <strong className="price">${convertFromPriceCents(item.priceCents * item.quantity)}</strong>
                        <div className="quantity">
                            <p>Quantity: {item.quantity}</p>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="deliveryOptions">
                    <strong>Choose a delivery option:</strong>

                    <div>
                        <label>
                            <input type="radio" name={`deliveryOption-${item.id}`} value={0} defaultChecked/>
                            <div>
                                <p>Monday, June 23</p>
                                <span>FREE Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input type="radio" name={`deliveryOption-${item.id}`} value={4.99}/>
                            <div>
                                <p>Friday, June 20</p>
                                <span>$4.99 - Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input type="radio" name={`deliveryOption-${item.id}`} value={9.99}/>
                            <div>
                                <p>Monday, June 16</p>
                                <span>$9.99 - Shipping</span>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
        </section>
    )
}