import { useRef, useState } from 'react'
import { convertFromPriceCents, getDeliveryDate } from '../../utils'
import { updateItemQuantity, getTotalQuantity, removeItem, updateDeliveryOption } from '../../cart'

export default function YourOrder({ item, setHeaderQuantity, setRender }){
    
    const [isUpdateClicked, setIsUpdateClicked] = useState(false)
    const quantityRef = useRef()

    function handleUpdateQuantity(){
        setIsUpdateClicked(true)
    }

    function handleSaveQuantity(){
        setIsUpdateClicked(false)

        updateItemQuantity(item.id, Number(quantityRef.current.value))
        setHeaderQuantity(getTotalQuantity()) // this is in checkOutLayout and this rerender all under it
    }

    function handleDeleteItem(){
        removeItem(item.id)
        setHeaderQuantity(getTotalQuantity()) // this is in checkOutLayout and this rerender all under it - its just i don't wanna make cart jsx then pass it on App then base on cart the rerender :)
    }


    

    return(
        <section className="order-container">

            <div className="delivery-date">
                <strong>Delivery date: {getDeliveryDate(item.deliveryOption)}</strong>
            </div>

            <div className="orderDetails-deliveryOptions">
                <div className="orderDetails">
                    <img src={item.image} alt="item image" />
                    <div>
                        <strong className="name">{item.name}</strong>
                        <strong className="price">${convertFromPriceCents(item.priceCents * item.quantity)}</strong>
                        <div className="quantity">
                            <p>
                                Quantity: {isUpdateClicked ? <input type='number' ref={quantityRef} defaultValue={item.quantity}/> : item.quantity}
                            </p>
                            {
                                isUpdateClicked ? 
                                <button onClick={handleSaveQuantity}>Save</button> 
                                :
                                <button onClick={handleUpdateQuantity}>Update</button>
                            }
                            <button onClick={handleDeleteItem}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="deliveryOptions">
                    <strong>Choose a delivery option:</strong>

                    <div>
                        <label>
                            <input onChange={()=>{
                                    updateDeliveryOption(item.id, '1')
                                    setRender(prev => !prev)
                                }} 
                                type="radio" 
                                name={`deliveryOption-${item.id}`} 
                                value={0} 
                                checked={item.deliveryOption === '1' ? true : false}/>
                            <div>
                                <p>{getDeliveryDate('1')}</p>
                                <span>FREE Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input onChange={()=>{
                                    updateDeliveryOption(item.id, '2')
                                    setRender(prev => !prev)
                                }} 
                                type="radio" 
                                name={`deliveryOption-${item.id}`} 
                                value={4.99} 
                                checked={item.deliveryOption === '2' ? true : false}/>
                            <div>
                                <p>{getDeliveryDate('2')}</p>
                                <span>$4.99 - Shipping</span>
                            </div>
                        </label>

                        <label>
                            <input onChange={()=>{
                                    updateDeliveryOption(item.id, '3')
                                    setRender(prev => !prev)
                                }} 
                                type="radio" 
                                name={`deliveryOption-${item.id}`} 
                                value={9.99} 
                                checked={item.deliveryOption === '3' ? true : false}/>
                            <div>
                                <p>{getDeliveryDate('3')}</p>
                                <span>$9.99 - Shipping</span>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
        </section>
    )
}