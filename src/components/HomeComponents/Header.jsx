import searchIcon from '../../assets/icons/search-icon.png'
import cartIcon from '../../assets/icons/cart-icon.png'
import hamburgerMenuIcon from '../../assets/icons/hamburger-menu.png'
import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){

    const [isMobileWidthSize, setIsMobileWidthSize] = useState(window.innerWidth <= 620)
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef()

    useEffect(()=>{
        const handleSize = ()=>{
            const isMobile = window.innerWidth <= 620;
            setIsMobileWidthSize(prev => (prev === isMobile ? prev : isMobile))
        }
        window.addEventListener('resize', handleSize)

        return ()=> window.removeEventListener('resize', handleSize)
    }, [])

    useEffect(() => {
        if(!isMobileWidthSize) setShowMenu(false)
    }, [isMobileWidthSize])

    useEffect(()=>{
        if(menuRef.current){
            if(showMenu){
                menuRef.current.classList.add('menuItemTransition')
            }else{
                menuRef.current.classList.remove('menuItemTransition')
            }
        }
    }, [showMenu])

    function handleBurgerMenuClick(){
        setShowMenu(prev => !prev)
    }

    return(
        <header className='amazonHeader'>
            <NavLink to="/">
                <div className="amazon-logo">
                    <img 
                        src={isMobileWidthSize ? 
                            "/logos/amazon-mobile-logo-white.png":
                            "/logos/amazon-logo-white.png" }
                        className={isMobileWidthSize ? 'phoneLogo' : 'windowLogo'}
                        alt="amazon logo" />
                </div>
            </NavLink>

            <div className="search-input">
                <input type="text" placeholder="Search" />
                <img src={searchIcon} alt="search icon" />
            </div>

            {
                isMobileWidthSize ? 
                    <img onClick={handleBurgerMenuClick} 
                        className='burgerMenu' 
                        src={hamburgerMenuIcon} alt="menu icon"/> 
                        
                        :

                <div className="return_orders-cart">

                    <NavLink to="/return_orders" className='return-orders-container'>
                        <div className='return-orders'>
                            Returns <span>& Orders</span>
                        </div>
                    </NavLink>

                    <NavLink to="/checkout" className='cart-container'>
                        <div className='cart'>
                            <div>
                                <img src={cartIcon} alt="cart icon" />
                                <span>4</span>
                            </div>

                            <p>Cart</p>
                        </div>
                    </NavLink>
                </div>
            }
            {
                isMobileWidthSize  &&
                    <div className={`menuItems`} ref={menuRef}>
                        <button>Returns & Orders</button>
                        <button>Cart (<span>5</span>)</button>
                    </div>
            }

        </header>
    )
}