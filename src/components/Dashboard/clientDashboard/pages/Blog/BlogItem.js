import dayjs from 'dayjs';
import React from 'react';
import { BsEye } from 'react-icons/bs'
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteBlogPost } from '../../../../../redux/actions/PostAction';
import { useNavigate } from "react-router-dom";

const BlogItem = ({ item, sn }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gotoEdit = (id) => {
        navigate({
            pathname: `/dashboard/editpost/${id}`,
        })
    }
    const gotoView = (id) => {
        navigate({
            pathname: `/dashboard/viewpost/${id}`,
        })
    }
    const deletePost = (id) => {
        Swal.fire({
            title: "Delete Blog Post",
            text: 'Do you want to delete this Post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete Post',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                
                dispatch(deleteBlogPost(id))
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
                {sn + 1}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.title}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {/* {item.category.name} */}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                {dayjs(item.createdAt).format("DD-MMMM-YYYY")}
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
               {
                item.isPublished ?
                <span className='text-green-700 bg-green-100'>Published</span> : <span className='text-red-700 bg-red-100'>Unpublished</span>
               } 
            </td>
            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                <div className="flex text-xl">
                    <span style={iconStyle}>
                        <BsEye onClick={() => gotoView(item.id)} />
                    </span>
                    <span style={iconStyle}>
                        <BiEdit onClick={() => gotoEdit(item.id)} />
                    </span>
                    <span style={iconStyle}>
                        <BiTrash onClick={() => deletePost(item.id)} />
                    </span>


                </div>
            </td>
        </tr>
    )
}

export default BlogItem