import React from "react";
// import ProductTable from "../../assets/Tables/ProductTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";


export default function Meetings() {
    
    const [rMeet, setRMeet] = useState(false)

    function CloseDelete() {
        setRMeet(false)
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white flex justify-between items-center px-4">
                    <div>
                        <p className="text-2xl fw-600">Meetings</p>
                        <p className="fs-400 text-gray-600 mt-2">Request and manage in app meetings with BOG team</p>
                    </div>
                    <div>
                        <button className="text-primary px-3 py-1 rounded border-pri" onClick={() => {setRMeet(true)}}>Request Meetings</button>
                    </div>
                </div> 
                <div className="lg:p-5 px-2">
                    {/* <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                         <ProductTable/>
                    </div> */}
                    <div className="bg-white lg:p-5  mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        <TabList className="flex fs-400">
                            <Tab>Completed</Tab>
                            <Tab>Upcoming</Tab>
                            <Tab>Pending Request</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="mt-10">
                            <div class="flex text-gray-600">
                                <input
                                class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                                type="search"
                                name="search order by name"
                                placeholder="Search"
                                />
                                <button
                                type="submit"
                                class=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                >
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                                </button>
                            </div>
                            </div>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light bg-light">
                                    <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        S/N
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Meeting ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Project ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Date
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Time
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Status
                                    </th>
                                    <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            1
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            SUR-MET-20343 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            LND-RET-56784
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            11:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Attended
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-primary cursor-pointer items-center text-xl">
                                                <BsCameraVideo />
                                                <p className="underline fs-400 pl-1">See Recording</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            2
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Sand-VAC-20E42 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            SND-WET-56782
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Attended
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-primary cursor-pointer items-center text-xl">
                                                <BsCameraVideo />
                                                <p className="underline fs-400 pl-1">See Recording</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            3
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            DRAW-VAC-20E42 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            DRW-BTT-5962
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            16/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            9:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Attended
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-primary cursor-pointer items-center text-xl">
                                                <BsCameraVideo />
                                                <p className="underline fs-400 pl-1">See Recording</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            4
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            STEEL-MET-20343 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            STL-NFT-32456
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            11:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Attended
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-primary cursor-pointer items-center text-xl">
                                                <BsCameraVideo />
                                                <p className="underline fs-400 pl-1">See Recording</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        <TabPanel>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light bg-light">
                                    <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        S/N
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Meeting ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Project ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Date
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Time
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Status
                                    </th>
                                    <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        1
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        SUR-MET-20343 
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        LND-RET-56781
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        12/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        11:00am
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Upcoming
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-red-600 cursor-pointer items-center text-xl">
                                            <MdOutlineCancel />
                                            <p className="underline fs-400 pl-1">Cancel Meeting</p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        SUR-MET-20343 
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        LND-REU-34567
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        12/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        11:00am
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Upcoming
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-red-600 cursor-pointer items-center text-xl">
                                            <MdOutlineCancel />
                                            <p className="underline fs-400 pl-1">Cancel Meeting</p>
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        <TabPanel>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light bg-light">
                                    <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        S/N
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Project Name
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Date
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Time
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Status
                                    </th>
                                    <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            1
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Land Survey
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            11:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            pending
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-red-600 cursor-pointer items-center text-xl">
                                                <MdOutlineCancel />
                                                <p className="underline fs-400 pl-1">Cancel Request</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            1
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Land Survey
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            11:00am
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            pending
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-red-600 cursor-pointer items-center text-xl">
                                                <MdOutlineCancel />
                                                <p className="underline fs-400 pl-1">Cancel Request</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        </Tabs>
                    </div>
                </div>
                {rMeet && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <form>
                                <div className="flex justify-between">
                                    <p className="lg:text-lg fw-600">Request Meeting</p>
                                    <FaTimes onClick={CloseDelete}/>
                                </div>
                                <div className="mt-5 lg:mt-8">
                                    <label className="block">Project ID</label>
                                    <input type="text" className="w-full lg:w-11/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Preffered Meeting Date/Time</label>
                                    <div className="flex">
                                        <input type="date" className="w-4/12 lg:w-4/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                        <input type="time" min="00:00" max="23:59" className="w-4/12 ml-6 lg:w-4/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Description</label>
                                    <textarea className="w-full lg:w-11/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                </div>
                                <div className="mt-8 flex lg:w-11/12 justify-between">
                                    <button className="btn bg-red-500 lg:px-7 text-white" onClick={CloseDelete}>
                                        Cancel
                                    </button>
                                    <button className="btn-primary lg:px-7">
                                        Set Meeting
                                    </button>
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
            </div>
        </div>
        )
}