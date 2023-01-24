import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import { FaFileDownload } from "react-icons/fa";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import useFetchHook from "../../../../hooks/useFetchHook";
import { AdminTransactTable } from "../../assets/Tables/AdminTransaction";

export default function Transactions() {
    const { loading, data: transactions } = useFetchHook("/transactions/user");    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Transactions</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and view your transaction history</p>
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
                            <span>Transactions</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    {/* transaction table */}
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        {/* <TabList className="">
                            <Tab>All Transactions</Tab>
                            <Tab>Successful</Tab>
                            <Tab>Failed</Tab>
                        </TabList> */}
                        <TabPanel>
                            <div className="mt-10 flex justify-between">
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
                                <Menu>
                                    <MenuHandler>
                                        <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center"> Export <FaFileDownload className="text-2xl"/></Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem >
                                            Export as CSV
                                        </MenuItem>
                                        <MenuItem>
                                            Export as Excel
                                        </MenuItem>
                                        <MenuItem>
                                            Export as PDF 
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
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
                                    {/* <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Delivery Date
                                    </th> */}
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Price
                                    </th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                        Date
                                    </th>
                                    <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !loading && transactions !== null ?
                                        transactions.map((item, index) => (
                                            // <TransactionItem key={item.id} sn={index} item={item} />
                                            <AdminTransactTable key={item.id} sn={index} item={item} />
                                        )) : null
                                    }                                   
                                    
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