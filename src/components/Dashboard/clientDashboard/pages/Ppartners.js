import React, { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Ppartners() {
    
    const ptableRef = useRef(null);

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Product Partner</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and review your all product partners</p>
                    <Breadcrumbs className="bg-white pl-0 mt-4">
                        <Link to="/" className="opacity-60">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                        <Link to="/dashboard" className="opacity-60">
                            <span>Dashboard</span>
                        </Link>
                        <Link to="" className="">
                            <span>Product Partners</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    {/* transaction table */}
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        <TabList className="">
                            <Tab>All Product Partners</Tab>
                            <Tab>Active</Tab>
                            <Tab>Inactive</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="mt-10">
                                <div className="flex items-center">
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
                                    <DownloadTableExcel
                                        filename="All product partners"
                                        sheet="users"
                                        currentTableRef={ptableRef.current}
                                    >
                                        <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary"/> </button>
                                    </DownloadTableExcel>
                                </div>
                            </div>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse" ref={ptableRef}>
                                    {/* <thead >
                                        
                                    </thead> */}
                                    <tbody>
                                        <tr className="thead-light bg-light">
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                S/N
                                            </th>
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                Full Name
                                            </th>
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                Email
                                            </th>
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                No of Product
                                            </th>
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                Total Sales
                                            </th>
                                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                Status
                                            </th>
                                            <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                Action
                                            </th>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            1
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Chukka Uzo 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            email@gmail.com
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            120
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            NGN 3,150,000
                                        </td>
                                        <td className="border-b text-green-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Active
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            2
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Chukka Uzodinma
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            email@gmail.com
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            31
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            NGN 4,200,000
                                        </td>
                                        <td className="border-b border-gray-200 text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Active
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            3
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Afo Promise  
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            email@gmail.com
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            19
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            NGN 760,000
                                        </td>
                                        <td className="border-b border-gray-200 text-yellow-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Inactive
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            4
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Green Mouse
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            email@yahoomail.com
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            25
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            NGN 925,000
                                        </td>
                                        <td className="border-b text-yellow-500 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Inactive
                                        </td>
                                        <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p className="bg-orange-100"><BsThreeDotsVertical/></p>
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
                                        Full Name
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Email
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        No of Product
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Total Sales
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
                                            Chukka Uzo 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            email@gmail.com
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            120
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            NGN 3,150,000
                                        </td>
                                        <td className="border-b text-green-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Active
                                        </td>
                                        <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Chukka Uzodinma
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        email@gmail.com
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        31
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 4,200,000
                                    </td>
                                    <td className="border-b border-gray-200 text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Active
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                            <p className="bg-orange-100"><BsThreeDotsVertical/></p>
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
                                        Full Name
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Email
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        No of Product
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Total Sales
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
                                        Afo Promise  
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        email@gmail.com
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        19
                                    </td>
                                    <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 760,000
                                    </td>
                                    <td className="border-b border-gray-200 text-yellow-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Inactive
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        2
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Green Mouse
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        email@yahoomail.com
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        25
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        NGN 925,000
                                    </td>
                                    <td className="border-b text-yellow-500 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Inactive
                                    </td>
                                    <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex text-xl">
                                        <p className="bg-orange-100"><BsThreeDotsVertical/></p>
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