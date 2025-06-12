import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'

export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<HomeLayout />}>
            
        </Route>

    ))

    return(
        <>
            <RouterProvider  router={router}/>
        </>
    )
}