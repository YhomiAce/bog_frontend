import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import React from "react";
import { Link } from "react-router-dom";

export default function Userauth() {
  return (
    <div className="bg-login min-h-screen bg-cover text-black font-primary">
      <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
        <div className="lg:w-4/12 w-11/12 pt-5 pb-8">
          <img
            src={require("../assets/images/logo.png")}
            className="w-28 pb-5 lg:w-44"
          />
          <div className="lg:px-12 bg-white py-8 px-5 shadow-lg ">
          <div className="text-center">
              <div className="w-full">
                <p className="text-xl fw-600">Account Activated</p>
                <div className="text-primary my-6"><FontAwesomeIcon icon={faEnvelopeCircleCheck} size="3x" /> </div>
                <p className="fw-600 mb-6">Hello <span className="text-secondary">Greenmouse</span></p>
              </div>
              <div>
                      <p>Thank you, your e-mail has been verified. Your account is now active. Please use the link below to login to your account.</p>        
              </div>
              <div className="mt-6 w-full flex">
                <Link to="/login" className="w-full text-md text-white bg-primary rounded fw-600">
                  <button className="w-full text-md text-white bg-primary py-2 rounded fw-600">
                    LOGIN TO YOUR ACCOUNT
                  </button>
                </Link>
              </div>
              <div className="mt-8 text-center font-400">
                Return to BOG <Link to="/" className="text-secondary fs-500">Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
