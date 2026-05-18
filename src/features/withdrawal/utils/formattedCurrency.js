export function formattedCurrency (amount, type, currency){
    return amount.toLocaleString(type, {
        style:"currency",
        currency:currency
    })
}