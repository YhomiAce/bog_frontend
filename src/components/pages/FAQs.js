import React, {useState} from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import { Faq, Faq2, Faq3, Faq4, Faq5, Faq6 } from "./home-comp/Faqs";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function Faqs() {

    const [general, setGeneral] = useState(true);
    const [mobile, setMobile] = useState(false);
    const [safety, setSafety] = useState(false);
 
  const OpenGeneral = () => {
    setGeneral(true)
    setMobile(false)
    setSafety(false)
  };
  const OpenMobile = () => {
    setGeneral(false)
    setMobile(true)
    setSafety(false)
  };
  const OpenSafety = () => {
    setGeneral(false)
    setMobile(false)
    setSafety(true)
  };

    return (
        <div>
            <div>
                <Header />
                <div className="bg-faq bg-cover bg-center text-white h-80 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-2">How can we help ? </p>
                            <div className="flex my-6 items-center text-black px-3 bg-white lg:w-6/12 rounded ">
                                <BsSearch className="text-black lg:w-1/12"/>
                                <input type="search" placeholder="Type keyword to find answer" className="py-2 px-2 lg:w-11/12 outline-0" />
                            </div>
                            <p className="flex items-center">Do you need more help, Contact Us <span className="pl-3"><BsArrowRight className="text-secondary text-xl"/></span></p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex items-center">
                            <div className="lg:w-3/12">
                                <div className="bg-light py-5">
                                    <div className="px-4">
                                        <p className="fw-600 text-lg">Categories</p>
                                        <hr className="bg-black w-3/12 h-1"/>
                                    </div>
                                    <div className="mt-6">
                                        <ul className="text-gray-500">
                                            <li className="hover:bg-primary  rounded py-2 px-4 hover:text-white " onClick={OpenGeneral}>General</li>
                                            <li className="hover:bg-primary hover:text-white rounded py-2 px-4" onClick={OpenMobile}>Using the Mobile App</li>
                                            <li className="hover:bg-primary hover:text-white  rounded py-2 px-4" onClick={OpenSafety}>Safety & Security</li>
                                            <li className="hover:bg-primary hover:text-white  rounded py-2 px-4">Become a service patner</li>
                                            <li className="hover:bg-primary hover:text-white  rounded py-2 px-4">Become a service provider</li>
                                            <li className="hover:bg-primary hover:text-white  rounded py-2 px-4">Terms & Conditions </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-9/12 mt-8 lg:mt-0">
                                {general && (
                                    <div className="lg:flex justify-around" >
                                    <div className="lg:w-5/12"><Faq/></div>
                                    <div className="lg:w-5/12 mt-6 lg:mt-0"><Faq2/></div>
                                </div>
                                )}
                                {mobile && (
                                    <div className="lg:flex justify-around" >
                                    <div className="lg:w-5/12 "><Faq3/></div>
                                    <div className="lg:w-5/12 mt-6 lg:mt-0"><Faq4/></div>
                                </div>
                                )}
                                {safety && (
                                    <div className="lg:flex justify-around" >
                                    <div className="lg:w-5/12"><Faq5/></div>
                                    <div className="lg:w-5/12 mt-6 lg:mt-0"><Faq6/></div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}