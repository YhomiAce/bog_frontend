import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalData from "../Setting/PersonalData";
import ChangePassword from "../Setting/ChangePassword";
import BankDetail from "../Setting/BankDetail";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Settings() {

  const navigate = useNavigate()

  return (
    <div className="p-5">
      <div className="min-h-screen fs-500 relative">
        <div className="w-full py-6 bg-white px-4 rounded-lg">
          <p className="fs-400 text-gray-500">Overview</p>
          <p className="text-2xl fw-600">User Profile</p>
          <p className="fs-400 text-gray-600 mt-2">Update/edit your account and profile settings </p>
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
                <span>Settings</span>
            </Link>
          </Breadcrumbs>
        </div>
        <div className="lg:grid-74">
          <div className="mt-6 py-6 bg-white px-4 rounded-lg">
            <Tabs>
              <TabList className="fs-400 lg:fs-600 px-0 flex text-center">
                <Tab>Personal Data</Tab>
                <Tab>Change Password</Tab>
                <Tab>Bank Details</Tab>
              </TabList>
              <TabPanel>
                <PersonalData />
              </TabPanel>
              <TabPanel>
                <ChangePassword />
              </TabPanel>
              <TabPanel>
                <BankDetail />
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <div className="bg-white w-full py-6 lg:px-6 px-3 rounded-lg mt-6">
              <p className="fs-700 fw-600">Your Account Status</p>
              <div className="flex py-6">
                <p className="px-4 py-2 bg-green-500 fw-600 fs-400 text-white rounded-lg">Email Verified</p>
                <p className="px-4 py-2 bg-orange-500 fw-600 fs-400 text-white rounded-lg ml-5">KYC Pending</p>
              </div>
            </div>
            <div className="bg-white w-full py-6 lg:px-6 px-3 rounded-lg mt-6">
              <p className="fs-700 fw-600">Identity Verification - KYC</p>
              <p className="mt-4">To comply with regulation, participant will have to go through indentity verification.</p>
              <p className="mb-6 mt-3">You have not submitted your KYC application to verify your indentity.</p>
              <button className="btn-primary" onClick={() => {navigate("/dashboard/kyc")}}>Click to Proceed</button>
              <p className="mt-7 text-red-600">* KYC verification required for verification badge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}