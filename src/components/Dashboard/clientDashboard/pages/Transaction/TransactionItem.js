import dayjs from 'dayjs'
import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { formatNumber } from '../../../../../services/helper'

const TransactionItem = ({item, sn}) => {
    return (
        <tr>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {sn +1}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.TransactionId}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                Products
            </td>
           
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
            &#8358; {formatNumber(item.amount)}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {dayjs(item.createdAt).format("DD-MMM-YYYY")}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                <div className="flex text-xl">
                    <p><FaRegEye /></p>
                </div>
            </td>
        </tr>
    )
}

export default TransactionItem