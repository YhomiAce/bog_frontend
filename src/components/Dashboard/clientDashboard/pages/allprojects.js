import React from "react";
import { useState } from "react";
import { FaCheck, FaRegEye, FaTimes } from "react-icons/fa";

export function AllProject() {

    const [assign, setAssign] = useState(false)
    
    const CloseModal = () => {
        setAssign(false)
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
                                                DRAW-VAC-20E42 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Construction Drawing
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Ogba, Lagos
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                20-04-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Pending
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p><FaRegEye/></p>
                                                    <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                                                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    2
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRAW-ERC-20E42 
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Architectural Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ojo, Lagos
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    10/10/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Pending
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                    <p><FaRegEye/></p>
                                                    <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                                                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                3
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                DRAW-PDL-18L40
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Construction Drawing
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Island, Lagos
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                19/11/2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Pending
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p><FaRegEye/></p>
                                                    <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                                                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                4
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                DRAW-DCL-20E42
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Electrical Drawing
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Ikeja, Lagos
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                17/10/2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Pending
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p><FaRegEye/></p>
                                                    <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                                                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                assign && (
                    <div onClick={CloseModal}></div>
                )
            }
        </div>
    )
}