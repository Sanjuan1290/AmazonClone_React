import buyAgainIcon from '../../assets/icons/buy-again.png'

export default function OrderItem(){

    return(
        <section className="item-container">
            <img src="/images/products/6-piece-non-stick-baking-set.webp" alt="Item Image" />

            <div className='info-container'>
                <strong>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</strong>
                <p>Arriving on: Monday, June 16</p>
                <p>Quantitiy: 1</p>
                <button>
                    <img src={buyAgainIcon} alt="buy again icon" />
                    <p>Buy it again</p>
                </button>
            </div>

            <div className="trackPackage">
                <button>Track package</button>
            </div>
        </section>
    )
}