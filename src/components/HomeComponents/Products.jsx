import { useLoaderData, defer, Await, useOutletContext } from 'react-router-dom'
import { Suspense, useState } from 'react'
import { fetchProducts } from '../../api'
import { convertFromPriceCents } from '../../utils'
import checkIcon from '../../assets/icons/checkmark.png'
import { addToCart, getTotalQuantity } from '../../cart'

export function loader(){
    return defer({products: fetchProducts()})
}

export default function Products(){
    const [activeEffects, setActiveEffects] = useState([])
    const { products } = useLoaderData()
    const [quantity, setQuantity] = useState({})
    const {setCartQuantity, search} = useOutletContext()

    function handleAddToCartEvent(productId){
        setActiveEffects(prev => [...prev, productId])

        const setTimer = setTimeout(() => {
            setActiveEffects(prev => prev.filter(id => id !== productId))
        }, 1500)

        addToCart(productId, Number(quantity[productId] || 1))
        setCartQuantity(getTotalQuantity())
    }

    function handleQuantityChange(productId, selectQuantity){
        setQuantity(prev => (
            { ...prev, [productId]: selectQuantity }
        ))
    }

    return(
        <section className="products-container"> 
            <Suspense  fallback={<h1>Products Loading...</h1>}>
                <Await resolve={products}>
                    {(resolvedProducts) => (
                        resolvedProducts.map(product => (
                            product.name.toLowerCase().includes(search) &&
                                <div className="product" key={product.id}>
                                    <div className="image">
                                        <img src={`/${product.image}`} alt="product image" />
                                    </div>

                                    <div className="details">
                                        <p className='productName'>{product.name}</p>
                                        <div>
                                            <img src={`/ratings/rating-${product.rating.stars * 10}.png`} alt="ratings" />
                                            <p>{product.rating.count}</p>
                                        </div>
                                        <p>${convertFromPriceCents(product.priceCents)}</p>

                                        <select onChange={(e)=> { 
                                                    handleQuantityChange(product.id, e.target.value) 
                                                }} >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    
                                    {activeEffects.includes(product.id) && (
                                        <div className="addEffect">
                                            <img src={checkIcon} alt="added to cart" />
                                            <p>Added</p>
                                        </div>
                                    )}
                                    
                                    <button onClick={()=>{handleAddToCartEvent(product.id)}} className='addToCart'>Add to cart</button>
                                </div>
                                ))
                    )}
                </Await>
            </Suspense>
        </section>
    )
}