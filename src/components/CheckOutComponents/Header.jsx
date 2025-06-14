import { useEffect, useState } from 'react'
import lockIcon from '../../assets/icons/checkout-lock-icon.png'
import { NavLink } from 'react-router-dom'
import { getTotalQuantity } from '../../cart'

export default function Header({ headerQuantity }){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 620)

    useEffect(()=>{
        const handleResize = ()=>{   
            window.innerWidth <= 620 ? setIsMobile(true) : setIsMobile(false)
        }
        window.addEventListener('resize', handleResize)   

        return ()=> window.removeEventListener('resize', handleResize)
    })
    
    return(
        <header className="checkOutHeader">
            <NavLink to="/">
                    <img 
                    src={isMobile ? '/logos/amazon-mobile-logo.png' : 
                                    '/logos/amazon-logo.png'} 
                    alt="amazon logo"
                    className={isMobile ? 'mobile' : 'window'}/>
            </NavLink>

            <div>
                <p>Checkout (<span> {headerQuantity} items </span>)</p>
            </div>

            <img className='lockIcon' src={lockIcon} alt="lock icon" />
        </header>
    )
}