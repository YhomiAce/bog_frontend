import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

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
        <Menu placement="left-start" className="w-16">
                    <MenuHandler>
                      <Button className="border-none bg-transparent shadow-none hover:shadow-none text-black px-0"><button className="lg:text-xl"><BsThreeDotsVertical /></button></Button>
                    </MenuHandler>
                    <MenuList className="w-16 bg-gray-100 fw-600 text-black">
                      <MenuItem >View</MenuItem>
                      <MenuItem className="bg-red-600 text-white">Delete</MenuItem>
                    </MenuList>
                  </Menu>
        </div>
    </td>
</tr>
  )
}

export default CategoryItem