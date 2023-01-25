import React from 'react'
// import { FaRegEye } from 'react-icons/fa';
import dayjs from 'dayjs';

const RequestItem = ({ item, index }) => {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <tr>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {index + 1}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.product.name}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                &#8358;{formatNumber(item.amount)}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.quantity}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {dayjs(item.createdAt).format('DD-MM-YYYY')}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                Active
            </td>
            {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                <div className="flex text-xl">
                    <p style={{ cursor: "pointer" }}><FaRegEye /></p>
                </div>
            </td> */}
        </tr>
    )
}

export default RequestItem