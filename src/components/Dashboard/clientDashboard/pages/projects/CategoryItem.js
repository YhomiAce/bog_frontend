import React from 'react'
import { BsEye } from 'react-icons/bs'
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteServiceCategory } from '../../../../../redux/actions/ProjectAction';

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

  const iconStyle = {
    cursor: "pointer",
    marginLeft: "5px"
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
        <div className="flex text-xl">

          <span style={iconStyle}>
            <BsEye onClick={() =>handleViewOpen(item)} />
          </span>
          <span style={iconStyle}>
            <BiEdit onClick={() =>openEdit(item)} />
          </span>
          <span style={iconStyle}>
            <BiTrash onClick={() => deleteService(item.id)} />
          </span>


        </div>
      </td>
    </tr>

  )
}

export default CategoryItem