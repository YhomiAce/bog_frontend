// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SignMain() {
  return (
    <div className="bg-login bg-fixed bg-cover min-h-screen">
      <div className="lg:w-10/12 font-primary text-sm m-auto px-4 lg:px-0">
        <div className="lg:pt-36 pt-24 ">
          <div className="text-center">
            <Link to="/">
            <img
              src={require("./images/logo.png")}
              className="w-36 m-auto lg:w-52"
              alt="App Logo"
            />
            </Link>
          </div>
        </div>
        <div className="text-center fs-600 fw-500 my-10">
          <p>Select the profile type you want to Sign Up as:</p>
        </div>
        <div className="lg:mygrid justify-around">
          <div className=" shades mt-6 lg:mt-0  text-center py-6 ">
            <Link to="profession" className="center-item px-4">
              <div>
                <Link to="/">
                  <img
                    src={require("./images/sign3.png")}
                    alt="client"
                    className="w-16"
                  />
                </Link>
              </div>
              <div className="text-left pl-4">
                <p className=" fs-500 ">Sign Up as <span className="fw-600">Service Provider</span></p>
                <p className="fs-400 mt-2 text-gray-500">Render services to clients</p>
              </div>
            </Link>
          </div>
          <div className="shades mt-6 lg:mt-0  py-6">
            <Link to="client" className="center-item px-4">
              <div>
                <img
                  src={require("./images/sign1.png")}
                  alt="client"
                  className="w-16"
                />
              </div>
              <div className="text-left pl-4">
                <p className=" fs-500 mb-2">Sign Up as a <span className="fw-600">Client</span></p>
                <p className="fs-400 text-gray-500">Get access to services and suppliers</p>
              </div>
            </Link>
          </div>
          <div className="mt-6 lg:mt-0 shades text-center py-6 ">
            <Link to="supply" className="center-item px-4">
              <div>
                <img
                  src={require("./images/sign2.png")}
                  alt="client"
                  className="w-16"
                />
              </div>
              <div className="text-left pl-4">
                <p className=" mb-2 fs-500">Sign Up as a <span className="fw-600">Supplier</span></p>
                <p className="fs-400 text-gray-500">Sell and supply goods to clients</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="my-16 fs-500 text-center">
          Already have an account?{" "}
          <span className="text-blue-500 fs-600 fw-700">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
