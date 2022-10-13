import React from "react";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div className="bg-login min-h-screen bg-cover text-black font-primary">
      <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
        <div className="lg:w-4/12 w-11/12 pt-5 pb-8">
        <img src={require('../assets/images/logo.png')} className="w-28 pb-5 lg:w-44" />
        <div className="lg:px-12 bg-white py-8 px-5 shadow-lg ">
          <div>
            <p className="text-2xl fw-600">Reset your Password</p>
            <p className="text-md mt-5 fw-400">
              Enter the email address associated with your account and we’ll
              send you a link to reset your password.
            </p>
          </div>
          <div className="mt-8">
            <form>
              <div className="w-full">
                <label className="block">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                />
              </div>

              <div className="mt-6 w-full flex">
                <button className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                  Get Link
                </button>
              </div>
            </form>
            <div className="mt-8 text-center font-400">
            <Link to="/login">
              <span className="text-secondary fw-600 fs-500">
                Return to Login
                  </span>
                  </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
