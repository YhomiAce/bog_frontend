import React from "react";
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function SignClient() {
  return (
    <div>
      <div className="bg-login bg-fixed bg-cover text-black font-primary">
        <img
          src={require("./images/logo.png")}
          className="w-32 mt-2 ml-2 lg:hidden lg:36"
        />
        <div className="flex lg:py-24 py-12 relative  lg:ml-12 text-sm justify-end">
          {/* the list of services */}
          <div className="lg:w-4/12 tags fixed pr-10 pt-16 hidden lg:block">
          <img src={require('./images/logo.png')} alt="logo" className="w-48 mb-10 relative "/>
            <ul>
              <li className="flex">
              <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5"/>
              <div>
              <p className="fw-600 fs-600 mb-2">Get Started Easily</p>
              <p>Sign up and start enjoying all your features tailored to suit you </p>
              </div>
              </li>
              <li className="my-6 flex">
              <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5"/>
              <div>
              <p className="fw-600 fs-600 mb-2">All Access Control</p>
              <p>Control all parts of your construction from start to finish all in one place</p>
              </div>
              </li>
              <li className="flex">
              <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5"/>
              <div>
              <p className="fw-600 fs-600 mb-2">Sell Products & Services</p>
              <p>Easily market your products and provide services to clients in need </p>
              </div>
              </li>
            </ul>
          </div>
          {/* form section */}
          <div className="lg:w-5/12 fw-500 w-11/12 m-auto bg-white lg:mr-24 py-10 lg:px-10 px-5 shadow-lg ">
            <div>
              <p className="text-xl fw-600">Sign Up as a Client</p>
              <p className="mt-1">Not a service provider ? <Link to="/signup" className="text-primary">Switch User type</Link></p>
            </div>
            <Tabs className="mt-6">
              <TabList>
                <Tab>Private Client</Tab>
                <Tab>Corporate Client</Tab>
              </TabList>

              <TabPanel>
                <div className="mt-8">
                  <form>
                    <div className="w-full">
                      <label className="block">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                      />
                    </div>
                    <div className="w-full mt-6">
                      <label className="block">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
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
                    <div className="mt-8 w-11/12 flex">
                      <input type="checkbox" className="p-4 border-gray-400" />
                      <p className="px-2">
                        I agree to the
                        <span className="text-primary pl-2">
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
                    <Link to="/login"><span className="text-primary fw-600 fs-500 pl-2">Login</span></Link>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
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
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
