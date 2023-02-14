import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteServiceCategory } from '../../../../../redux/actions/ProjectAction';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item, sn, handleViewOpen, openEdit }) => {
  const dispatch = useDispatch();
    const deleteService = (id) => {
        Swal.fire({
            title: "Delete Service",
            text: 'Do you want to delete this Service?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete Service',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                
                dispatch(deleteServiceCategory(id))
            }
        });
    }

  return (

    <tr>
      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {sn}
      </td>
      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {item.title}
      </td>
      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {item.service.name}
      </td>
      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        {item.slug}
      </td>

      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
        <div className="flex text-xl">

          <Menu placement="left-start" className="w-16">
            <MenuHandler>
              <Button className="border-none bg-transparent shadow-none hover:shadow-none text-black"><button className="lg:text-xl"><BsThreeDotsVertical /></button></Button>
            </MenuHandler>
            <MenuList className="w-16 bg-gray-100 fw-600 text-black">
              <MenuItem onClick={() => handleViewOpen(item)}>View</MenuItem>
              <MenuItem onClick={() => openEdit(item)}>Edit</MenuItem>
              <MenuItem><Link to={`buildForm/${item.id}/${item.title}`}>Create Form</Link></MenuItem>
              <MenuItem onClick={() => deleteService(item.id)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </td>
    </tr>

  )
}

export default CategoryItem