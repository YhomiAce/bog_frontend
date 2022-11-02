import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiCheckCircle } from 'react-icons/bi';
import { BsInfoCircleFill } from "react-icons/bs";

export default function Settings() {


  return (
    <div className="p-5">
      <div className="min-h-screen fs-500 relative">
        <div className="w-full py-6 bg-white px-4 rounded-lg">
          <p className="fs-400 text-gray-500">Overview</p>
          <p className="text-2xl fw-600">User Profile</p>
        </div>
        <div className="lg:grid-74">
          <div className="mt-6 py-6 bg-white px-4 rounded-lg">
            <Tabs>
              <TabList>
                <Tab>Personal Data</Tab>
                <Tab>Change Password</Tab>
                <Tab>Bank Details</Tab>
              </TabList>
              <TabPanel>
                <div>
                  <div>
                    <div className="mt-6 lg:mt-0 py-6 px-8 rounded-lg">
                      <div className="flex items-center lg:my-6">
                        <div>
                            <img
                              src={require("../images/profile.png")}
                              alt="profifepic"
                              className="lg:w-20 w-12"
                            />
                        </div>
                        <div className="fs-300 pl-6">
                          <p>Update Profile Picture</p>
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
                      <div className="mt-10 flex justify-between items-center">
                        <button className="btn-primary lg:w-4/12">Update Profile</button>
                        <p className="flex items-center fw-500 text-primary"><BiCheckCircle/><span className="pl-1">All Changes are saved</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="lg:w-11/12 lg:mt-6 mx-auto">
                  <div className="pt-5">
                    <label className="block mb-1 fw-500">Old Password</label>
                    <input
                      type="password"
                      className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="block mb-1 fw-500">New Password</label>
                    <input
                      type="password"
                      className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="block mb-1 fw-500">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                    />
                  </div>
                  <div className="my-6 fs-400 lg:w-11/12 flex justify-between items-center">
                    <p className="flex items-center fw-500 text-primary"><BsInfoCircleFill className="text-xl text-primary"/><span className="pl-3 text-primary">Password should be minmum 8 letter and include lower and uppercase letter.</span></p>
                  </div>
                  <div className="mt-10 lg:w-11/12 flex justify-between items-center">
                    <button className="btn-primary">Update Password</button>
                    <p className="flex items-center fw-500 text-primary"><BiCheckCircle/><span className="pl-1">All Changes are saved</span></p>
                  </div>
                  <div className="mt-8 bg-light lg:px-5 px-2 py-4 rounded-lg">
                    <p className="fw-600 lg:text-lg">Two-Factor Verification</p>
                    <p className="fs-400 pt-5">Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                    <div className="mt-10 lg:w-11/12 flex justify-between items-center">
                      <button className="btn border border-blue-600 fs-500">Enable 2FA</button>
                      <p className="flex items-center fs-300 fw-500 text-gray-500">CURRENT STATUS: <p>DISABLED</p></p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
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
                  <div className="mt-10 lg:w-11/12 flex justify-between items-center">
                    <button className="btn-primary">Update Bank Details</button>
                    <p className="flex items-center fw-500 text-primary"><BiCheckCircle/><span className="pl-1">All Changes are saved</span></p>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <div className="bg-white w-full py-6 lg:px-5 rounded-lg mt-6">
              <p className="fs-700 fw-600">Your Account Status</p>
              <div className="flex py-6">
                <p className="px-4 py-2 bg-green-500 fw-600 fs-400 text-white rounded-lg">Email Verified</p>
                <p className="px-4 py-2 bg-orange-500 fw-600 fs-400 text-white rounded-lg ml-5">KYC Pending</p>
              </div>
            </div>
            <div className="bg-white w-full py-6 lg:px-5 rounded-lg mt-6">
              <p className="fs-700 fw-600">Identity Verification - KYC</p>
              <p className="mt-4">To comply with regulation, participant will have to go through indentity verification.</p>
              <p className="mb-6 mt-3">You have not submitted your KYC application to verify your indentity.</p>
              <button className="btn-primary">Click to Proceed</button>
              <p className="mt-7 text-red-600">* KYC verification required for verification badge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}