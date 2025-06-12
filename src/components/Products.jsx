import { fetchProducts } from '../api'
import { convertFromPriceCents } from '../utils'
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
                                {[...Array(10)].map((_, i) => (
                                <option key={i+1} value={i+1}>{i+1}</option>
                                ))}
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


