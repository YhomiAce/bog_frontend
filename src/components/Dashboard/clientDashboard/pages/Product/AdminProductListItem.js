import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



const AdminProductListItem = ({ item, sn }) => {
    const navigate = useNavigate()
    const gotoDetailsPage = (id) => {
        navigate(`/dashboard/productdetailadmin?productId=${id}`)
    }
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const formatStatus = (status) => {
        switch (status) {
            case "in_review":
                return "In Review"
            case "approved":
                return "Approved"
            case "disapproved":
                return "Disapproved"
            case "pending":
                return "Pending"
            case "draft":
                return "Draft"

            default: return status
        }

    }

    return (
        <tr>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {sn}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.name}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.creator.name}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.category.name}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                NGN {formatNumber(item.price)}
            </td>
            <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {formatStatus(item.status)}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                <div className="flex text-xl">
                    <p className="bg-orange-100" onClick={() => gotoDetailsPage(item.id)}><BsThreeDotsVertical /></p>
                </div>
            </td>
        </tr>
    )
}

export default AdminProductListItem