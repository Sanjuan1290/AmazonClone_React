
export default function OrderSummary(){

    return(
        <section className="orderSummary-container">
            <h3>Order Summary</h3>

            <div className="price">
                <p>Items (3):</p>
                <p>$39.84</p>
            </div>
            <div className="price">
                <p>Shipping & handling:</p>
                <p>$4.99</p>
            </div>

            <div className="line-1"></div>

            <div className="price tax">
                <p>Total before tax:</p>
                <p>$44:83</p>
            </div>
            <div className="price">
                <p>Estimated tax (10%):</p>
                <p>$4.48</p>
            </div>

            <div className="line-2"></div>
            <div className="price items">
                <p>Items (3):</p>
                <p>$49.31</p>
            </div>

            <button>Place your order</button>
        </section>
    )
}