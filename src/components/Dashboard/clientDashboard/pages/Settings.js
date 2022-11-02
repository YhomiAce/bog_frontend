import { faBagShopping, faMultiply, faPersonDigging, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector } from "react-redux";

export default function Settings() {

  const [editProfile, setEditProfile] = useState(false);
  const user = useSelector((state)=> state.auth.user);

  function OpenEdit() {
    setEditProfile(true)
  }
  function CloseEdit() {
    setEditProfile(false)
  }

  return (
    <div className="p-5">
      <div className="min-h-screen fs-500 relative">
        <div className="w-full py-6 bg-white px-4 rounded-lg">
          <p className="fs-400 text-gray-500">Overview</p>
          <p className="text-2xl fw-600">User Profile</p>
        </div>
        <div className="lg:flex justify-between mt-6">
          <div className="lg:w-4/12 bg-white text-center rounded-lg py-5">
            <div>
              <img
                src={require("../images/profile.png")}
                alt="profifepic"
                className="m-auto lg:w-32"
              />
              <p className="fw-500 mt-4">{user?.name}</p>
              <p className="fw-500">Client</p>
            </div>
            <div className="mt-3 text-start px-6 border-t pt-3">
              <div className="mt-4 flex justify-between pr-5">
                <p>
                <FontAwesomeIcon icon={faBagShopping} className="pr-3 text-2xl text-blue-500"/>Items Aquired 
                </p>
                <p className="fw-600">13</p>
              </div>
              <div className="mt-4 flex justify-between pr-5">
                <p><FontAwesomeIcon icon={faPersonDigging} className="pr-3 text-2xl text-red-500" />Sevices Obtained</p>
                <p className="fw-600">05</p>
              </div>
              <div className="mt-4 flex justify-between pr-5">
                <p><FontAwesomeIcon icon={faRetweet} className="pr-3 text-2xl text-green-500" />My Referral</p>
                <p className="fw-600">02</p>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 mt-6 lg:mt-0 bg-white py-6 px-8 rounded-lg">
            <p className="fw-500">Account Details</p>
            <div className="border-t pt-5">
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                value={user?.name}
                disabled
                className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
              />
            </div>
            <div className="mt-3 ">
              <label className="block mb-1">Email</label>
              <input
                type="text"
                value={user?.email}
                disabled
                className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
              />
            </div>
            <div className="mt-3">
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                value={user?.phone}
                disabled
                className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
              />
            </div>
            <div className="mt-3">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value="greenmouse@gmail.com"
                disabled
                className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
              />
            </div>
            <div className="mt-10">
            <button className="btn-primary lg:w-6/12" onClick={OpenEdit}>Update Account</button>
            </div>
          </div>
        </div>
        {editProfile && (
          <div className="flex absolute top-0 w-full  z-10 modal-bg h-full justify-center items-center">
          <div>
            <FontAwesomeIcon icon={faMultiply} onClick={CloseEdit} className="absolute text-2xl modal-cancel top-24"/>
          </div>
          <Tabs className="bg-white px-6 py-6 lg:w-6/12">
            <TabList>
              <Tab>Update User-info</Tab>
              <Tab>Change Password</Tab>
            </TabList>
            <TabPanel>
              <div className="pt-5">
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-3 ">
                <label className="block mb-1">Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email address"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-3">
                <label className="block mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-8">
                <button className="btn-primary">Update Info</button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="pt-5">
                <label className="block mb-1">Old Password</label>
                <input
                  type="password"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-3">
                <label className="block mb-1">New Password</label>
                <input
                  type="password"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-3">
                <label className="block mb-1">Confirm New Password</label>
                <input
                  type="password"
                  className="w-10/12 py-2 px-3 rounded bg-gray-200 border border-gray-600"
                />
              </div>
              <div className="mt-8">
                <button className="btn-primary">Update Password</button>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        )}
      </div>
    </div>
  );
}