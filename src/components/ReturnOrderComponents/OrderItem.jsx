import buyAgainIcon from '../../assets/icons/buy-again.png'
import { orderedCartId_Date } from '../../cart'

export default function OrderItem({ item }){
    
    return(
        <section className="item-container">
            <img src={item.image} alt="Item Image" />

            <div className='info-container'>
                <strong>{item.name}</strong>
                <p>Arriving on: {item.arrivingDate}</p>

                <p>Quantitiy: {item.quantity}</p>
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