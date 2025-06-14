
import Header from '../components/CheckOutComponents/Header'
import ReviewYourOrderLayout from '../components/CheckOutComponents/ReviewYourOrderLayout'
import { fetchProducts } from '../api'
import { defer, Await, useLoaderData } from "react-router-dom"
import { Suspense, useState } from "react"
import { getTotalQuantity } from '../cart'

export function loader(){
    return defer({products: fetchProducts()})
}

export default function CheckOutLayout(){

    const [headerQuantity, setHeaderQuantity] = useState(getTotalQuantity())
    
    const { products } = useLoaderData()

    return(
        <>
            <Header headerQuantity={headerQuantity}/>
            <Suspense fallback={<h2 className='loadingItems'>Cart loading... Please wait.</h2>}>
                <Await resolve={products}>
                    { (data) => <ReviewYourOrderLayout products={data} setHeaderQuantity={setHeaderQuantity}/> }
                </Await>
            </Suspense>

        </>
    )
}