export default function YourOrder(){

    return(
        <section className="order-container">

            <div className="delivery-date">
                <strong>Delivery date: Monday, June 23</strong>
            </div>

            <div className="orderDetails-deliveryOptions">
                <div className="orderDetails">
                    <img src="/images/products/athletic-cotton-socks-6-pairs.jpg" alt="dsfds" />
                    <div>
                        <strong className="name">Black and Gray Athletic Cotton Socks - 6 Pairs</strong>
                        <strong className="price">$10.90</strong>
                        <div className="quantity">
                            <p>Quantity: 1</p>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="deliveryOptions">
                    <strong>Choose a delivery option:</strong>

                    <div>
                        <label>
                            <input type="radio" />
                            <div>
                                <p>Monday, June 23</p>
                                <span>FREE Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input type="radio" />
                            <div>
                                <p>Friday, June 20</p>
                                <span>$4.99 - Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input type="radio" />
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