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

export const getUserType = (type) => {
    switch (type) {
        case "admin":
            return "Super Admin"
        case "professional":
            return "Service Partner"
        case "vendor":
            return "Product Partner"
        case "private_client":
            return "Private Client"
        case "corporate_client":
            return "Corporate Client"
        case "all":
            return "All Users"
        case "product_partner":
            return "Product Partner"
        case "service_partner":
            return "Service Partner"
        default: return ""
    }
}

export const getUserTypeRevserse = (type) => {
    switch (type) {
        case "vendor":
            return "product_partner"
        case "professional":
            return "service_partner"
        case "private_client":
            return "private_client"
        case "corporate_client":
            return "corporate_client"
        case "all":
            return "All Users"
        case "product_partner":
            return "product_partner"
        case "service_partner":
            return "service_partner"
        default: return ""
    }
}