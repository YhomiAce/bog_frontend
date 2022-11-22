import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const CategoryItem = ({item, sn}) => {
  return (
    <tr>
    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {sn}
    </td>
    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {item.name}
    </td>
    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {item.totalProducts}
    </td>
    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        <div className="flex text-xl">
            <p className="bg-orange-100" ><BsThreeDotsVertical /></p>
        </div>
    </td>
</tr>
  )
}

export default CategoryItem