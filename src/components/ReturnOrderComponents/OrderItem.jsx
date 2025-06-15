import { NavLink } from 'react-router-dom'
import buyAgainIcon from '../../assets/icons/buy-again.png'
import { addToCart, getTotalQuantity } from '../../cart'

export default function OrderItem({ item, setCartQuantity, orderId }){
    
    return(
        <section className="item-container">
            <img src={item.image} alt="Item Image" />

            <div className='info-container'>
                <strong>{item.name}</strong>
                <p>Arriving on: {item.arrivingDate}</p>

                <p>Quantitiy: {item.quantity}</p>
                <button onClick={()=> {
                        addToCart(item.id, 1)
                        setCartQuantity(getTotalQuantity())
                    }}>
                    <img src={buyAgainIcon} alt="buy again icon" />
                    <p>Buy it again</p>
                </button>
            </div>

            <div className="trackPackage">
                <NavLink to={`/trackpackage?productId=${item.id}&orderId=${orderId}`}>
                    <button>Track package</button>
                </NavLink>
            </div>
        </section>
    )
}