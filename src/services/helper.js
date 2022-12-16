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

export const cutText = (text, count, insertDots) =>{
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}

export const stripHtml = (str)=> {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}