export const capitalizeFirstLetter = (string) => {
    console.log({string});
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getSubTotal = (items) => {
    const total = items.reduce((sum, data) => {
        return sum + data.amount;
    }, 0);
    return total;
}