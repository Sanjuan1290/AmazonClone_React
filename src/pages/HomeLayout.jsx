
import Header from '../components/HomeComponents/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { getTotalQuantity } from '../cart'

export default function HomeLayout(){
    const [cartQuantity, setCartQuantity] = useState(getTotalQuantity())

    return(
        <>
            <Header cartQuantity={cartQuantity}/>
            <Outlet context={setCartQuantity}/>
        </>
    )
}