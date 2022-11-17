import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import AdminProductListItem from './AdminProductListItem';
import { DownloadTableExcel } from "react-export-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const AdminProductLists = ({ status }) => {
    let adminProducts = useSelector((state) => state.products.adminProducts);
    if (status) {
        adminProducts = adminProducts.filter(where => where.status === status)
    }
    const isLoading = useSelector((state) => state.products.isLoading);
    const products = useRef(null);

    if (isLoading) {
        return <center><Spinner /></center>
    }

    return (
        <>
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
                                Product Name
                            </th>
                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                Created By
                            </th>
                            <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                Category
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
                        {
                            adminProducts.length > 0 ? adminProducts.map((product, index) => {
                                return <AdminProductListItem key={product.id} item={product} sn={index + 1} />
                            }) : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminProductLists