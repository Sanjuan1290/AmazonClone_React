import searchIcon from '../assets/icons/search-icon.png'
import cartIcon from '../assets/icons/cart-icon.png'
import { useEffect, useState } from 'react'

export default function Header(){

    const [isMobileWidthSize, setIsMobileWidthSize] = useState(window.innerWidth === 620)

    useEffect(()=>{
        const isMobile = window.innerWidth === 620;
        window.addEventListener('resize', ()=> {
            setIsMobileWidthSize(prev => (prev === isMobile ? prev : isMobile))
        })
    }, [isMobileWidthSize])

    console.log(isMobileWidthSize);

    return(
        <header>
            <div className="amazon-logo">
                <img 
                    src={isMobileWidthSize ? 
                        "/logos/amazon-mobile-logo-white.png":
                        "/logos/amazon-logo-white.png" }
                    alt="amazon logo" />
            </div>

            <div className="search-input">
                <input type="text" placeholder="Search" />
                <img src={searchIcon} alt="search icon" />
            </div>

            <div className="return_orders-cart">
                <div className='return-orders'>
                    Returns <span>& Orders</span>
                </div>

                <div className='cart'>
                    <div>
                        <img src={cartIcon} alt="cart icon" />
                        <span>4</span>
                    </div>

                    <p>Cart</p>
                </div>

            </div>
        </header>
    )
}