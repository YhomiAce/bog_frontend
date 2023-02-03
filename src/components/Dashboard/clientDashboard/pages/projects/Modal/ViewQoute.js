import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { formatNumber } from '../../../../../../services/helper'

const ViewQoute = ({ item, closeModal }) => {
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md max-h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow scale-ani" onClick={e => e.stopPropagation()}>
                <p className='fw-600 border-b pb-2 text-lg'>Interest form from {item.userDetails.name}</p>
                <div className='bg-light p-2 mb-2 mt-4'>
                    <p>Are you interested in this project: </p>
                    <p className='fw-500 mt-1'>{item.areYouInterested ? 'Yes' : 'No'}</p>
                </div>
                <div className='bg-light p-2 my-2'>
                    <p>Partner's best price for rendering this project: </p>
                    <p className='fw-500 mt-1'>&#8358;{formatNumber(item.projectCost)}</p>
                </div>
                <div className='bg-light p-2 my-2'>
                    <p>Project duration: </p>
                    <p className='fw-500 mt-1'>{item.deliveryTimeLine} weeks</p>
                </div>
                <div className='bg-light p-2 my-2'>
                    <p>Partner's interest on project: </p>
                    <p className='fw-500 mt-1'>{item.reasonOfInterest}</p>
                </div>
                <FaTimes className='absolute top-5 right-5 cursor-pointer text-red-600' onClick={closeModal} />
            </div>
        </div>
    )
}

export default ViewQoute