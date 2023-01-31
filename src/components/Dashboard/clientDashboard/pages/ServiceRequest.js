import { Button } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineIdentification } from 'react-icons/hi'

export const ServiceRequest = () => {

    const [qoute, setQoute] = useState(false)
    const [assign, setAssign] = useState(false)

    const  CloseModal = () => {
        setQoute(false)
        setAssign(false)
    }

  return (
    <div className='min-h-screen'>
        <div className='px-3 py-10 bg-white'>
            <p className='fw-600 text-xl pb-3'>Project Request(s) from service partner(s)</p>
            <p className='flex items-center fw-500'><span className='pr-1 text-primary'><HiOutlineIdentification/></span> Project Id: <span className='text-primary pl-6'>BOG/PRJ/GTI/1071215520</span></p>
        </div>
        <div className='lg:p-5 px-3'>
            <div className='lg:grid-2 gap-4 justify-evenly'>
                <div className='bg-white shadow-lg rounded-lg p-5'>
                    <p className='fw-600 border-b pb-2 text-lg'>Green Mouse Ltd</p>
                    <div className='flex border-b mt-4 py-2'>
                        <p className='w-4/12'>Service Category:</p>
                        <p className='w-8/12'>Geotechnical Investigation</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Service Score:</p>
                        <p className='w-8/12'>85%</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Completed Projects:</p>
                        <p className='w-8/12'>7</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Ongoing Project:</p>
                        <p className='w-8/12'>2</p>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <Button className='bg-secondary' onClick={() => {setQoute(!qoute)}}>View Qoutation</Button>
                        <Button className='bg-primary' onClick={() => {setAssign(!assign)}}>Assign Project</Button>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-5'>
                    <p className='fw-600 border-b pb-2 text-lg'>Green Mouse Ltd</p>
                    <div className='flex border-b mt-4 py-2'>
                        <p className='w-4/12'>Service Category:</p>
                        <p className='w-8/12'>Geotechnical Investigation</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Service Score:</p>
                        <p className='w-8/12'>85%</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Completed Projects:</p>
                        <p className='w-8/12'>7</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Ongoing Project:</p>
                        <p className='w-8/12'>2</p>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <Button className='bg-secondary' onClick={() => {setQoute(!qoute)}}>View Qoutation</Button>
                        <Button className='bg-primary' onClick={() => {setAssign(!assign)}}>Assign Project</Button>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-5'>
                    <p className='fw-600 border-b pb-2 text-lg'>Green Mouse Ltd</p>
                    <div className='flex border-b mt-4 py-2'>
                        <p className='w-4/12'>Service Category:</p>
                        <p className='w-8/12'>Geotechnical Investigation</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Service Score:</p>
                        <p className='w-8/12'>85%</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Completed Projects:</p>
                        <p className='w-8/12'>7</p>
                    </div>
                    <div className='flex border-b mt-2 py-2'>
                        <p className='w-4/12'>Ongoing Project:</p>
                        <p className='w-8/12'>2</p>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <Button className='bg-secondary' onClick={() => {setQoute(!qoute)}}>View Qoutation</Button>
                        <Button className='bg-primary' onClick={() => {setAssign(!assign)}}>Assign Project</Button>
                    </div>
                </div>
            </div>
        </div>
        {
            qoute && (
                <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                    <div className="bg-white px-4 lg:w-5/12 rounded-md max-h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow scale-ani" onClick={e => e.stopPropagation()}>
                        <p className='fw-600 border-b pb-2 text-lg'>Interest form from Green Mouse Ltd</p>
                        <div className='bg-light p-2 mb-2 mt-4'>
                            <p>Are you interested in this project: </p>
                            <p className='fw-500 mt-1'>Yes</p>
                        </div>
                        <div className='bg-light p-2 my-2'>
                            <p>Partner's best price for rendering this project: </p>
                            <p className='fw-500 mt-1'>#30,000,000</p>
                        </div>
                        <div className='bg-light p-2 my-2'>
                            <p>Project duration: </p>
                            <p className='fw-500 mt-1'>4 weeks</p>
                        </div>
                        <div className='bg-light p-2 my-2'>
                            <p>Partner's interest on project: </p>
                            <p className='fw-500 mt-1'>Structural Engineer</p>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer text-red-600' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
        {
            assign && (
                <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                    <div className="bg-white lg:w-4/12 rounded-md overflow-y-auto overscroll-none  w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <p className='fw-500 text-center py-12  px-4'>Are you sure you want to assign this project to Green Mouse Ltd</p>
                        <div className='flex justify-between py-4 px-4 bg-light'>
                            <Button className='bg-red-600' onClick={CloseModal}>Cancel</Button>
                            <Button className='bg-primary' onClick={() => {setAssign(!assign)}}>Assign Project</Button>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}
