import React from "react";
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from 'react-redux';
import PrivateClient from "./PrivateClient";
import CorporateClient from "./CorporateClient";

export default function SignClient() {
  // const auth = useSelector((state) => state.auth);
  return (
    <div>
      <div className="bg-login bg-fixed bg-cover text-black font-primary">
        <img
          src={require("./images/logo.png")}
          className="w-32 mt-2 ml-2 lg:hidden lg:36"
          alt="Client Logo"
        />
        <div className="flex lg:py-24 py-12 relative  lg:ml-12 text-sm justify-end">
          {/* the list of services */}
          <div className="lg:w-4/12 tags fixed pr-10 pt-16 hidden lg:block">
            <img src={require('./images/logo.png')} alt="logo" className="w-48 mb-10 relative " />
            <ul>
              <li className="flex">
                <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5" alt="Client Logo" />
                <div>
                  <p className="fw-600 fs-600 mb-2">Get Started Easily</p>
                  <p>Sign up and start enjoying all your features tailored to suit you </p>
                </div>
              </li>
              <li className="my-6 flex">
                <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5" alt="Client Logo" />
                <div>
                  <p className="fw-600 fs-600 mb-2">All Access Control</p>
                  <p>Control all parts of your construction from start to finish all in one place</p>
                </div>
              </li>
              <li className="flex">
                <img src={require('./images/icon3.png')} className="w-7 h-7 mr-5" alt="Client Logo" />
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
                <PrivateClient />
              </TabPanel>
              <TabPanel>
                <CorporateClient />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
