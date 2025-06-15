import searchIcon from '../../assets/icons/search-icon.png'
import cartIcon from '../../assets/icons/cart-icon.png'
import hamburgerMenuIcon from '../../assets/icons/hamburger-menu.png'
import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props){
    const [isMobileWidthSize, setIsMobileWidthSize] = useState(window.innerWidth <= 620)
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef()
    const searchRef = useRef()

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

    function handleSearch(){
        console.log(searchRef.current.value);
        props.setSearch(searchRef.current.value.toLowerCase())
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
                <input ref={searchRef} onKeyDown={(e)=>{
                    if(e.key === 'Enter')
                        props.setSearch(e.target.value.toLowerCase())
                }} type="text" placeholder="Search" />
                <img onClick={handleSearch} src={searchIcon} alt="search icon" />
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
                                <span>{props.cartQuantity}</span>
                            </div>

                            <p>Cart</p>
                        </div>
                    </NavLink>
                </div>
            }
            {
                isMobileWidthSize  &&
                    <div className={`menuItems`} ref={menuRef}>
                        <NavLink to="/return_orders"><button>Returns & Orders</button></NavLink>
                        <NavLink to="/checkout"><button>Cart (<span>{props.cartQuantity}</span>)</button></NavLink>
                    </div>
            }

        </header>
    )
}