import { Button } from "@material-tailwind/react";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaCheck, FaRegEye, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getDispatchedProjects } from "../../../../redux/actions/ProjectAction";
import { getProjectCategory } from "../../../../services/helper";

export function AllProject() {
    const projects = useSelector(state => state.projects.dispatchedProjects);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    console.log(projects);

    useEffect(() => {
        if (user) {
            dispatch(getDispatchedProjects(user.profile.id))
        }
    }, [dispatch, user])


    const [qoute, setQoute] = useState(false)
    const [decline, setDecline] = useState(false)

    const OpenQoute = () => {
        setQoute(true)
    }
    const OpenDecline = () => {
        setDecline(true)
    }

    const CloseModal = () => {
        setQoute(false)
        setDecline(false)
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">All Projects</p>
                    <p className="fs-400 text-gray-600 mt-2">Projects available on BOG</p>
                </div>
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    {/* all projects table*/}
                    <div className="mt-2">
                        <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                            <div className="flex px-5 justify-between">
                                <div>
                                    <p className="fw-600 fs-600 lg:text-lg mb-6 lg:mb-0">Available Projects</p>
                                </div>
                            </div>
                            <div className="px-5 mt-6">
                                <div className="overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead className="thead-light bg-light">
                                            <tr>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Location
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    1
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    BOG-PRJ-LNG-47598
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Building Contractor
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    02/02/2023
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Pending
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                        <p className="text-secondary cursor-pointer"><FaRegEye /></p>
                                                        <p className="text-primary px-3 cursor-pointer" onClick={OpenQoute}><FaCheck/></p>
                                                        <p className="text-red-600 cursor-pointer" onClick={OpenDecline}><FaTimes/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                            {
                                                projects.length > 0 ? projects.map((item, index) => (
                                                    <tr>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            {index + 1}
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            {item.project.projectSlug}
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            {getProjectCategory(item.project.projectTypes)}
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            {item.projectDetails.propertyLocation}
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            {dayjs(item.project.createdAt).format("YYYY-MM-DD")}
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            Pending
                                                        </td>
                                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                            <div className="flex text-xl">
                                                                <p><FaRegEye /></p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                )) : null
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                qoute && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md max-h-103 overflow-y-auto overscroll-none  w-11/12 pt-6 pb-10 lg:px-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <div className='flex justify-between lg:mt-3'>
                                <div>
                                    <p className="lg:text-xl fw-600">Project Interest Form</p>
                                    <p className="fs-400 mt-2">With the details contained in the view form, fill and submit the document below to show interest.</p>
                                </div>
                                <FaTimes className='cursor-pointer text-red-600 mb-4' onClick={CloseModal}/>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <label>1. Are you interested in the project</label>
                                    <div className="mt-1">
                                        <div className="flex">
                                            <input type='radio' name='interest' />
                                            <p className="pl-2">Yes</p>
                                        </div>
                                        <div className="flex">
                                            <input type='radio' name='interest' />
                                            <p className="pl-2">No</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>2. What is your best price for rendering your service on this project</label>
                                    <input className="mt-3 w-full p-2 rounded border border-gray-400"/>
                                </div>
                                <div className="mt-3">
                                    <label>3. How soon can you deliver this project? (Give answer in weeks)</label>
                                    <input className="mt-3 w-full p-2 rounded border border-gray-400"/>
                                </div>
                                <div className="mt-3">
                                    <label>4. What is your interest on this project?</label>
                                    <div className="flex">
                                        <div className="mt-1 w-6/12">
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Quantity Surveyor</p>
                                            </div>
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Architect</p>
                                            </div>
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Structural Engineer</p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-6/12">
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Electrical Engineer</p>
                                            </div>
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Mechanical Engineer</p>
                                            </div>
                                            <div className="flex">
                                                <input type='radio' name='cat' />
                                                <p className="pl-2">Contractor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 text-end">
                                    <Button className="bg-primary lg:px-12">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                decline && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                        <div className="bg-white lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                                <div className='flex justify-between px-4 py-6'>
                                    <p className="lg:fs-700 fw-500 flex">
                                        <span className='block mt-1 mr-2 text-red-600'>
                                            <BsInfoCircleFill/>
                                        </span>
                                        <span>
                                            Are you sure you want to decline this project offer.
                                        </span>
                                    </p>
                                </div>
                                <div className='mt-4 px-4 py-4 bg-light text-end'>
                                    <Button className='bg-secondary' onClick={CloseModal} >Cancel</Button>
                                    <Button className='bg-red-600 ml-4' onClick={CloseModal}>Continue</Button>
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}