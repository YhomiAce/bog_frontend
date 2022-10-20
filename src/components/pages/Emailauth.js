/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from '../../config/config';
import Swal from "sweetalert2";
import Spinner from "../layouts/Spinner";

export default function Userauth() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const email = new URLSearchParams(search).get("email");
  const token = new URLSearchParams(search).get("token");
  console.log({ email, token });
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const url = `/user/verify?email=${email}&token=${token}`;
    axios.get(url).then((res) => {
      setLoading(false);
      console.log(res);
    }).catch(error => {
      setLoading(false);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Unable to Verify Email Address. Please open the link again from your email"
      }).then(() => {
        navigate("/login")
      });

    })
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="bg-login min-h-screen bg-cover text-black font-primary">
      <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
        <div className="lg:w-4/12 w-11/12 pt-5 pb-8">
          <img
            src={require("../assets/images/logo.png")}
            alt="logomain"
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
