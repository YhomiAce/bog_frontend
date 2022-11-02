import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

const PersonalData = () => {
    return (
        <div>
            <div className="fs-400 lg:fs-600">
                <div className="mt-6 lg:mt-0 py-6 px-2 lg:px-8 rounded-lg">
                    <div className="flex items-center lg:my-6">
                        <div>
                            <img
                                src={require("../images/profile.png")}
                                alt="profifepic"
                                className="lg:w-20 w-16"
                            />
                        </div>
                        <div className="lg:fs-400 text-xs pl-2 lg:pl-6 w-6/12">
                            <p className="mb-2">Update Profile Picture</p>
                            <input type="file" accept="image" />
                        </div>
                    </div>
                    <div className="lg:grid-2 justify-between">
                        <div className="pt-5">
                            <label className="block mb-1 fw-500">First Name</label>
                            <input
                                type="text"
                                placeholder="Green"
                                className="w-10/12 lg:w-full placeholder-black py-2 px-3 rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                        <div className=" pt-5">
                            <label className="block mb-1 fw-500">Last Name</label>
                            <input
                                type="text"
                                placeholder="Green Mouse"
                                className="w-10/12 lg:w-full placeholder-black py-2 px-3 rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="lg:grid-2 justify-between lg:mt-4">
                        <div className="mt-3 ">
                            <label className="block mb-1 fw-500">Email</label>
                            <input
                                type="text"
                                placeholder="greenmouse@gmail.com"
                                className="w-10/12 lg:w-full py-2 placeholder-black px-3 rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Phone Number</label>
                            <input
                                type="text"
                                placeholder="+234 801 234 4567"
                                className="w-10/12 lg:w-full py-2 px-3 placeholder-black rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="lg:grid-2 justify-between lg:mt-4">
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Date of Birth</label>
                            <input
                                type="date"
                                className="w-10/12 lg:w-full py-2 px-3 rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Gender</label>
                            <select className="w-10/12 lg:w-full py-2 px-3 rounded-lg bg-light border border-gray-600">
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10 lg:flex justify-between items-center">
                        <button className="btn-primary lg:w-4/12">Update Profile</button>
                        <p className="flex items-center fw-500 mt-4 lg:mt-0 text-primary"><BiCheckCircle /><span className="pl-1">All Changes are saved</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalData