import { RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route } from 'react-router-dom'

import HomeLayout from './pages/HomeLayout'
import Products, {loader as productsLoader} from './components/Products'


export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<HomeLayout />}>
            <Route index element={<Products />} loader={productsLoader}/>

        </Route>

    ))

    return(
        <>
            <RouterProvider  router={router}/>
        </>
    )
}