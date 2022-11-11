import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegEye} from "react-icons/fa";
import { CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Transactions() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Transactions</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and view your transaction history</p>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    {/* transaction table */}
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        <TabList className="">
                            <Tab>All Transactions</Tab>
                            <Tab>Successful</Tab>
                            <Tab>Failed</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="mt-10">
                            <div class="flex text-gray-600">
                                <input
                                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-l-lg text-sm focus:outline-none"
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
                                        Transaction ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Transaction Type
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Delivery Date
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Price
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
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        1
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Granite-VAC-20E42 
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Products
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        12/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 150,000
                                    </td>
                                    <td className="border-b text-green-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Delivered
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        SURVEY-DCL-20E42
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Services
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        31/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 200,000
                                    </td>
                                    <td className="border-b border-gray-200 text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Delivered
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        3
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Cement-PDL-18L40
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Product
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        19/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 60,000
                                    </td>
                                    <td className="border-b border-gray-200 text-yellow-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Awaiting Delivery
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        4
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        DRAW-PCL-20E42
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Services
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        25-12-22
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 325,000
                                    </td>
                                    <td className="border-b text-red-500 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Cancelled
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
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
                                        Order ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Product Category
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Quantity
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
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        1
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Granite-VAC-20E42 
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Granite
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        12/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Completed
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </th>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Cement- PDL-18L40
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Cement
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        50 bags
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        10/11/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Completed
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
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
                                        Order ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Product Category
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Quantity
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
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Sand- DCL-20E42
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Sand
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        3
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        10/10/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Active
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
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
                                        Order ID
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Product Category
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Quantity
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
                                        4
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Sand- DCL-20E42
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Sand
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        17/10/2022
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        pending
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p><FaRegEye/></p>
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
            </div>
        </div>
        )
}