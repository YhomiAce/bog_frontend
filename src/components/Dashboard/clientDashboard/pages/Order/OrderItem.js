import React from 'react'
import { FaRegEye } from 'react-icons/fa';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const OrderItem = ({ item, index }) => {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <tr>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {index + 1}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.orderSlug}
            </td>
            {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                Granite
            </td> */}
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                &#8358;{formatNumber(item.totalAmount)}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {dayjs(item.createdAt).format('DD-MM-YYYY')}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.status.toUpperCase()}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                <div className="flex text-xl">
                    {/* <p className="border border-gray-500 text-red-600 "><FaTimes /></p>
                    <p className="border border-gray-500 text-green-600 mx-5"><FaCheck /></p> */}
                    
                    <Link to={`/dashboard/order-detail/${item.id}`}> 
                    <p style={{cursor:"pointer"}}><FaRegEye /></p>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default OrderItem