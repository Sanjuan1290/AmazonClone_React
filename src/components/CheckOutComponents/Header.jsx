import { useEffect, useState } from 'react'
import lockIcon from '../../assets/icons/checkout-lock-icon.png'

export default function Header(){
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
            <img 
                src={isMobile ? '/logos/amazon-mobile-logo.png' : 
                                '/logos/amazon-logo.png'} 
                alt="amazon logo"
                className={isMobile ? 'mobile' : 'window'}/>

            <div>
                <p>Checkout (<span> 0 items </span>)</p>
            </div>

            <img src={lockIcon} alt="lock icon" />
        </header>
    )
}

//amazon-mobile-logo.png