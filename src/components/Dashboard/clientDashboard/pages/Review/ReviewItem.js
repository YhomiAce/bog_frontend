import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdDeleteOutline } from "react-icons/md";
import Avatar from 'react-avatar';
import Swal from 'sweetalert2';
import { getUserType } from '../../../../../services/helper';

const ReviewItem = ({ item, addReviewToHompage, removeReview }) => {
    const cursor = {
        cursor: "pointer"
    }
    const addToHomePage = (id) => {
        Swal.fire({
            title: item.isHomepage ? "Remove from Homepage" : "Add to Homepage",
            text: item.isHomepage ? 'Do you want to remove from Homepage?' : 'Do you want to Add to Homepage?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: item.isHomepage ? 'Yes Remove' : "Yes Add",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                addReviewToHompage(id, item.isHomepage)

            }
        });
    }

    const deleteReview = (id) => {
        Swal.fire({
            title: "Delete Review",
            text: 'Do you want to delete this Review?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete Review',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                removeReview(id)

            }
        });
    }

    return (
        <div className="lg:flex lg:w-11/12 mx-auto py-6 px-4 bg-white shadow rounded-lg mt-6 items-center justify-between">
            <div className="flex items-center">
                <div>
                    <Avatar variant="circular" src={item.user.photo} alt="review" className="w-24 h-24" />
                </div>
                <div className="pl-4">
                    <p className="fw-500">{item.name}</p>
                    <p>{getUserType(item.user.userType)}</p>
                </div>
            </div>
            <div className="lg:w-9/12">
                <div className="flex items-center justify-between">
                    <ReactStars
                        edit={false}
                        value={item.star}
                        size={20}
                    />
                    <p
                        style={cursor} className="lg:text-xl text-red-500"><MdDeleteOutline onClick={() => deleteReview(item.id)} /></p>
                </div>
                <div className="pt-2 pb-4"><p>{item.message}</p></div>
                <div className="lg:flex justify-evenly">
                    {/* <button className="btn py-2 bg-light text-primary fw-600 ">Add to Homepage</button> */}
                    <button
                        onClick={() => addToHomePage(item.id)}
                        className="btn py-2 bg-orange-100 text-secondary fw-600 block my-4 lg:my-0"
                    >
                        {item.isHomepage ? "Remove from Homepage" : "Add to Homepage"}  </button>
                    {/* <button className="btn py-2 bg-green-100 text-green-600 fw-600">Reply</button> */}
                </div>
            </div>
        </div>
    )
}

export default ReviewItem