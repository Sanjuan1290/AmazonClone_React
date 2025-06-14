
import Header from '../components/CheckOutComponents/Header'
import ReviewYourOrderLayout from '../components/CheckOutComponents/ReviewYourOrderLayout'
import { fetchProducts } from '../api'
import { defer, Await, useLoaderData } from "react-router-dom"
import { Suspense } from "react"

export function loader(){
    return defer({products: fetchProducts()})
}

export default function CheckOutLayout(){

    const { products } = useLoaderData()

    return(
        <>
            <Header />
            <Suspense fallback={<h2 className='loadingItems'>Cart loading... Please wait.</h2>}>
                <Await resolve={products}>
                    { (data) => <ReviewYourOrderLayout products={data}/> }
                </Await>
            </Suspense>

        </>
    )
}