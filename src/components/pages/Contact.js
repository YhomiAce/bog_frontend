import React,  {useRef } from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import ReCAPTCHA from "react-google-recaptcha";
import SimpleMap from "./home-comp/Map";

export default function Contact(){

    const captchaRef = useRef(null)

    return(
        <div>
            <div>
                <Header/>
                <div className="bg-contact bg-cover bg-center text-white h-80 flex items-center">
                    <div className="box">
                        <p className="lg:text-4xl text-2xl fw-700 mb-2">Contact Us</p>
                        <p>Reach out to us to concerning informations, feedbacks and inquiry</p>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:bg-light py-4  lg:flex justify-around mt-8">
                            <div className="lg:w-3/12 text-center relative pt-8">
                                <div className="w-20 m-auto bg-white py-3 shadow-xl rounded flex justify-center absolute -top-12 x-center"><img src={require("../assets/images/call.png")} alt="call" className="w-10" /></div>
                                <p className="fw-600 fs-700 mb-2">Phone Lines</p>
                                <p>0800 000 0000</p>
                                <p>0900 000 0000</p>
                            </div>
                            <div className="lg:w-3/12 text-center relative pt-8 mt-20 lg:mt-0">
                                <div className="w-20 m-auto bg-white py-3 shadow-xl rounded flex justify-center absolute -top-12 x-center"><img src={require("../assets/images/phone.png")} alt="phone" className="w-10" /></div>
                                <p className="fw-600 fs-700 mb-2">Email Support</p>
                                <p>support@bog.com</p>
                                <p>info@bog.com</p>
                            </div>
                            <div className="lg:w-3/12 text-center relative pt-8 mt-20 lg:mt-0">
                                <div className="w-20 m-auto bg-white py-3 shadow-xl rounded flex justify-center absolute -top-12 x-center"><img src={require("../assets/images/address.png")} alt="address" className="w-10" /></div>
                                <p className="fw-600 fs-700 mb-2">Office Address</p>
                                <p className="w-8/12 m-auto">7, Street name, estate name, state, country</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex justify-between">
                            <div className="lg:w-6/12">
                                <p className="mb-8 fs-800 fw-600">Leave Us A Message</p>
                                <div className="shadow-lg lg:py-16 py-8 px-8 rounded">
                                    <form>
                                        <div className="lg:flex">
                                            <div className="lg:mr-3">
                                                <label>First Name</label>
                                                <input type="text" className="w-full border rounded border-gray-500 py-1 px-2 mt-2 " />
                                            </div>
                                            <div className="lg:ml-3 mt-6 lg:mt-0">
                                                <label>Last Name</label>
                                                <input type="text" className="w-full border rounded border-gray-500 py-1 px-2 mt-2" />
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <label>Phone Number</label>
                                            <input type="text" className="w-full border rounded border-gray-500 py-1 px-2 mt-2" />
                                        </div>
                                        <div className="mt-6">
                                            <label>Email Address</label>
                                            <input type="email" className="w-full border rounded border-gray-500 py-1 px-2 mt-2" />
                                        </div>
                                        <div className="mt-6">
                                            <label>Message</label>
                                            <textarea className="w-full border rounded border-gray-500 mt-2 px-2 py-2" rows={5}/>
                                        </div>
                                        <div className="mt-8">
                                            <ReCAPTCHA
                                                sitekey={process.env.REACT_APP_SITE_KEY}
                                                ref={captchaRef}
                                            />
                                        </div>
                                        <div className="mt-10">
                                            <button className="btn-primary w-full">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="lg:w-5/12 mt-16 lg:mt-0">
                                <p className="mb-8 fs-800 fw-600">Location Map</p>
                                <div className="h-96 rounded overflow-hidden">
                                    <SimpleMap/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-60">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}