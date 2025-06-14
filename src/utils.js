

export function convertFromPriceCents(priceCents){
    return (priceCents / 100).toFixed(2)
}

export function getDeliveryDate(deliveryId){
    const currentDate = new Date()
    const deliveryDate = new Date()

    // Days to add
    const daysToAdd =
        deliveryId === '1' ? 10 :
        deliveryId === '2' ? 7 :
        deliveryId === '3' ? 3 :
        0

    deliveryDate.setDate(currentDate.getDate() + daysToAdd)

    // Adjust if delivery date falls on weekend
    const deliveryDay = deliveryDate.getDay()
    if (deliveryDay === 6) deliveryDate.setDate(deliveryDate.getDate() + 2) // Saturday → Monday
    else if (deliveryDay === 0) deliveryDate.setDate(deliveryDate.getDate() + 1) // Sunday → Monday

    const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthString = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const day = deliveryDate.getDay()
    const month = deliveryDate.getMonth()
    const date = deliveryDate.getDate()

    return `${dayString[day]}, ${monthString[month]} ${date}`
}