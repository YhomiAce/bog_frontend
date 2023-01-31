import { Button } from '@material-tailwind/react'
import React from 'react'

const RequestItem = ({ item, openQouteModal, openAssignModal, project }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-5'>
            <p className='fw-600 border-b pb-2 text-lg'>{item.userDetails.name}</p>
            <div className='flex border-b mt-4 py-2'>
                <p className='w-4/12'>Service Category:</p>
                <p className='w-8/12'>{item.userDetails.profile.service_category.title}</p>
            </div>
            <div className='flex border-b mt-2 py-2'>
                <p className='w-4/12'>Service Score:</p>
                <p className='w-8/12'>{item.userDetails.profile.kycPoint}%</p>
            </div>
            <div className='flex border-b mt-2 py-2'>
                <p className='w-4/12'>Completed Projects:</p>
                <p className='w-8/12'>{item.completedProjects}</p>
            </div>
            <div className='flex border-b mt-2 py-2'>
                <p className='w-4/12'>Ongoing Project:</p>
                <p className='w-8/12'>{item.ongoingProjects}</p>
            </div>
            <div className='mt-8 flex justify-between'>
                {
                    project.status === 'dispatched' &&
                        <>
                            <Button className='bg-secondary' onClick={() => openQouteModal(item)}>View Qoutation</Button>
                            <Button className='bg-primary' onClick={() => openAssignModal(item)}>Assign Project</Button>
                        </>
                }

            </div>
        </div>
    )
}

export default RequestItem