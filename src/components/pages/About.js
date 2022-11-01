import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function About() {
  return (
    <div>
      <div className="font-primary">
        <Header />
        <div className="bg-privacy bg-cover bg-center text-white lg:h-80 h-40 flex items-center">
          <div className="box">
            <div>
              <p className="lg:text-4xl text-2xl fw-700 mb-2">
                About Us
              </p>
            </div>
          </div>
        </div>
        <div className="section">
            <div className="box">
                <div>
                    <div className="lg:flex items-center">
                        <div className="lg:w-6/12">
                            <p className="lg:px-10 fw-500 lg:text-3xl">BOG intends to provide products and services to intending structure owners using a digitized process.</p>
                        </div>
                        <div className="lg:w-6/12">
                            <p className="fs-600 text-gray-800 lg:px-10">BOG is an online marketplace which intends to provide a platform for individuals interested in owning structures in Nigeria/Africa achieve their aim. We are  focused on helping people throughout the world realize their dreams of building a world class structure </p>
                        </div>
                    </div>
                    <div className="lg:mt-24">
                        <div className="flex justify-center">
                            <div className="center-item py-6 shades lg:w-3/12">
                                <img src={require("../assets/images/vision.png")} alt="vision" className="w-16 pr-2" />
                                <p className="fw-600 fs-700">Vision</p>
                            </div>
                            <div className="center-item py-6 shades lg:w-3/12">
                                <p>Mission</p>
                            </div>
                        </div>
                        <div className="lg:w-9/12 lg:mt-16 mx-auto">
                            <p className="text-center">To be a digitized way of getting construction management, administrative, and procurement activities carried out in Nigeria with little or no hassle to our clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}