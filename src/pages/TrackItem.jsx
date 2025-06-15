import { NavLink, useSearchParams } from "react-router-dom"
import { orderedCart, orderedCartId_Date } from '../cart'
import { useMemo } from "react"

export default function TrackItem() {
    const [searchParams] = useSearchParams()
    const productId = searchParams.get('productId')
    const orderId = searchParams.get('orderId')

    const orderIndex = orderedCartId_Date.findIndex(order => order.generateKey === orderId)

    let item = null
    if (orderIndex !== -1 && orderedCart[orderIndex]) {
        item = orderedCart[orderIndex].find(product => product.id === productId)
    }

    const statusClass = useMemo(() => {
        if (!item?.arrivingDate) return ''

        const { monthString, date } = item.arrivingDate
        const targetDate = new Date(`${monthString} ${date}, 2025`)
        const today = new Date()

        const diffDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24))

        if (diffDays > 2) return 'preparing'
        if (diffDays > 0) return 'shipped'
        return 'delivered'
    }, [item])

    if (!item) return <p>Item not found.</p>

    return (
        <section className="trackPackage-container">
            <NavLink to='/return_orders'>View all orders</NavLink>

            <div>
                <h2>Arriving on {item.arrivingDate.dayString}, {item.arrivingDate.monthString} {item.arrivingDate.date}</h2>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
            </div>

            <img src={item.image} alt={`${item.name} Image`} />

            <div className="status-container">
                <div className="status">
                    <p>Preparing</p>
                    <p>Shipped</p>
                    <p>Delivered</p>
                </div>

                <div className="statusLoading">
                    <div className={statusClass}></div>
                </div>
            </div>
        </section>
    )
}
