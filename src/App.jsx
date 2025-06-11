import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Header from './components/Header'

export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header />}/>
    ))

    return(
        <>
            <RouterProvider  router={router}/>
        </>
    )
}