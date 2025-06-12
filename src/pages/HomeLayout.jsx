
import Header from '../components/HomeComponents/Header'
import { Outlet } from 'react-router-dom'

export default function HomeLayout(){

    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}