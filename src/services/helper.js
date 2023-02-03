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
export const getStatus = (type) => {
    switch (type) {
        case "pending":
            return <p className="px-2 py-1 text-orange-700 bg-orange-100 w-24 rounded-md fw-600">Pending</p>
        case "approved":
            return <p className="px-2 py-1 text-green-700 bg-green-100 w-24 rounded-md fw-600">Approved</p>
        case "declined":
            return <p className="px-2 py-1 text-red-700 bg-red-100 w-24 rounded-md fw-600">Declined</p>
        case "completed":
            return <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">Completed</p>
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

export const getProjectCategory = (type) => {
    switch (type) {
        case "land_survey":
            return "Land Survey"
        case "construction_drawing":
            return "Construction Drawing"
        case "building_approval":
            return "Building Approval"
        case "geotechnical_investigation":
            return "Geotechnical Investigation"
        case "contractor":
            return "Contractor"
        default: return ""
    }
}