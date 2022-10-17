import React from 'react'
import { Link } from 'react-router-dom'

const CorporateClient = () => {
    return (
        <div className="mt-8">
            <form>
                <div className="w-full">
                    <label className="block">Company Name</label>
                    <input
                        type="text"
                        placeholder="Enter your company name"
                        className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                    />
                </div>
                <div className="w-full mt-6">
                    <label className="block">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your company email"
                        className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                    />
                </div>
                <div className="w-full mt-6">
                    <label className="block">Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                    />
                </div>
                <div className="w-full mt-6">
                    <label className="block">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your desired password"
                        className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                    />
                </div>
                <div className="mt-6 w-11/12 flex">
                    <input type="checkbox" className="p-4 border-gray-400" />
                    <p className="px-2">
                        I agree to the
                        <span className=" pl-2 text-primary">
                            terms & conditions
                        </span>
                    </p>
                </div>
                <div className="mt-6 w-full flex">
                    <button className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="mt-10">
                Already have an account?{" "}
                <Link to="/login"><span className="text-primary fw-600 fs-500">Login</span></Link>
            </div>
        </div>
    )
}

export default CorporateClient