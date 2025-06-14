import { RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route } from 'react-router-dom'

import HomeLayout from './pages/HomeLayout'
import Products, {loader as productsLoader} from './components/HomeComponents/Products'
import CheckOutLayout, { loader as checkOutLayoutLoader} from './pages/CheckOutLayout'


export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
            <>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Products />} loader={productsLoader}/>
                </Route>

                <Route path="/checkout" element={<CheckOutLayout />} loader={checkOutLayoutLoader} />
            </>
    ))

    return(
        <>
            <RouterProvider  router={router}/>
        </>
    )
}