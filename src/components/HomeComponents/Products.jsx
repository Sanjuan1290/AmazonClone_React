import { fetchProducts } from '../../api'
import { convertFromPriceCents } from '../../utils'
import { useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'

export function loader(){
    return defer({products: fetchProducts()})
}

export default function Products(){

    const { products } = useLoaderData()


    return(
        <section className="products-container"> 
            <Suspense  fallback={<h1>Products Loading...</h1>}>
                <Await resolve={products}>
                {(resolvedProducts) => (
                    resolvedProducts.map(product => (
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

                            <select>
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

                        <button className='addToCart'>Add to cart</button>
                    </div>
                    ))
                )}
                </Await>
            </Suspense>
        </section>
    )
}


