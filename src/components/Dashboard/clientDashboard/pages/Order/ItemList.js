import React from 'react'

const ItemList = ({item}) => {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex">
                <div>
                    <img src={item.product.image} alt="order" className="w-16 h-16 lg:h-20 lg:w-20 rounded-lg" />
                </div>
                <div className="grid content-between py-3 pl-4 fw-500">
                    <p><span className="text-gray-600">Name:</span> {item.product.name}</p>
                    <p><span className="text-gray-600">QTY:</span> {item.quantity}</p>
                </div>
            </div>
            <div className="fw-500 text-end">
                <p><span className="text-gray-600">PRICE:</span> &#8358;{formatNumber(item.amount)}</p>
            </div>
        </div>
    )
}

export default ItemList