import lockIcon from '../../assets/icons/checkout-lock-icon.png'

export default function Header(){
    
    return(
        <header className="checkOutHeader">
            <img src="/logos/amazon-logo.png" alt="amazon logo" />

            <div>
                <p>Checkout (<span> 0 items </span>)</p>
            </div>

            <img src={lockIcon} alt="lock icon" />
        </header>
    )
}