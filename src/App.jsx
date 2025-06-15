import { RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route } from 'react-router-dom'

import HomeLayout from './pages/HomeLayout'
import Products, {loader as productsLoader} from './components/HomeComponents/Products'
import CheckOutLayout, { loader as checkOutLayoutLoader} from './pages/CheckOutLayout'
import ReturnOrderLayout from './pages/ReturnOrderLayout'
import TrackItem from './pages/TrackItem'

export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
            <>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Products />} loader={productsLoader}/>
                    <Route  path='/return_orders' element={<ReturnOrderLayout />} />
                    <Route path='/trackpackage' element={<TrackItem/>} />
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