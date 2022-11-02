import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

const BankDetail = () => {
    return (
        <div className="lg:w-11/12 lg:mt-6 mx-auto">
            <div className="pt-5">
                <label className="block mb-1 fw-500">Bank Name</label>
                <input
                    type="text"
                    className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                />
            </div>
            <div className="mt-3">
                <label className="block mb-1 fw-500">Bank Account Name</label>
                <input
                    type="text"
                    className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                />
            </div>
            <div className="mt-3">
                <label className="block mb-1 fw-500">Bank Account Number</label>
                <input
                    type="number"
                    className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                />
            </div>
            <div className="mt-3">
                <label className="block mb-1 fw-500">Account Type</label>
                <select className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400">
                    <option>Savings</option>
                    <option>Current</option>
                    <option>Others</option>
                </select>
            </div>
            <div className="mt-10 lg:w-11/12 lg:flex justify-between items-center">
                <button className="btn-primary">Update Bank Details</button>
                <p className="flex items-center fw-500 text-primary mt-4 lg:mt-0"><BiCheckCircle /><span className="pl-1">All Changes are saved</span></p>
            </div>
        </div>
    )
}

export default BankDetail