import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useFetchHook from "../../../../hooks/useFetchHook";
import { AdminTransactTable } from "../../assets/Tables/AdminTransaction";
import { Spinner2 } from "../../../layouts/Spinner";

export default function AdminTransactions() {
    const { loading, data: transactions } = useFetchHook("/transactions");    
    console.log(transactions)

    if (loading){
        return <center><Spinner2 /></center>
      }   

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
                        {
                            !loading && transactions !== null ? 
                            <AdminTransactTable item={transactions} /> : <Spinner2/>
                        }
                    </div>
                </div>
            </div>
        </div>
        )
}