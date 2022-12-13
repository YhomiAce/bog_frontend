import React, { useRef, useState, useEffect } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../redux/actions/ProductAction";
import CategoryItem from "./Product/CategoryItem";
import CreateCategoryProject from "./projects/Modal/CreateCategory";

export default function ProjectCategory() {
    const dispatch = useDispatch();
    const products = useRef(null);

    const [adminAdd, setAdminAdd] = useState(false);
    const categories = useSelector((state) => state.products.categories);

    function CloseModal() {
        setAdminAdd(false)
    }

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Manage Service Categories</p>
                        <p className="fs-400 text-gray-600 mt-2">Update, add and edit service categories for service providers</p>
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
                                <span>Category</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded border-pri text-primary" onClick={() => setAdminAdd(!adminAdd)}>Add New Category</button>
                    </div>
                </div>
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>Products Category</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="mt-10">
                                    <div className="flex items-center">
                                        <div class="flex text-gray-600">
                                            <input
                                                className="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-5 rounded-l-lg text-sm focus:outline-none"
                                                type="search"
                                                name="search order by name"
                                                placeholder="Search"
                                            />
                                            <button
                                                type="submit"
                                                className=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                            >
                                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                                            </button>
                                        </div>
                                        <DownloadTableExcel
                                            filename="All product partners"
                                            sheet="users"
                                            currentTableRef={products.current}
                                        >
                                            <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary" /> </button>
                                        </DownloadTableExcel>
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <table className="items-center w-full bg-transparent border-collapse" ref={products}>
                                        <tbody>
                                            <tr className="thead-light bg-light">
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Category Name
                                                </th>
                                                {/* <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Category ID
                                                </th> */}
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    No of Products
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                           {
                                            categories.length > 0 ? categories.map((category, index) => (
                                                <CategoryItem item={category} key={category.id} sn={index+1} />
                                            )) : <center><h5>No Categories added. Add new ones</h5></center>
                                           }
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            {adminAdd && (
                <CreateCategoryProject CloseModal={CloseModal} />
            )}
        </div>
    )
}