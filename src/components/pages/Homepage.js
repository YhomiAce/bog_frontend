import React from "react";
import Header from "./home-comp/Header";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import { BsArrowRight, BsBag } from "react-icons/bs";
import Faqs from "./home-comp/Faqs";
import Footer from "./home-comp/Footer";
import ProfSlides, { ProfSlidesSm } from "./home-comp/ProfSlides";
import BlogSlides, { BlogSlidesSm } from "./home-comp/BlogSlide";

export default function Homepage() {
    
    return(
        <div className="font-primary">
            <Header/>
            {/* hero banner */}
            <div className="bg-hero">
                <div className="box">
                    <div className="lg:flex flex-row-reverse items-center py-1">
                        <div className="lg:w-6/12 relative">
                            <img src={require("../assets/images/hero.png")} alt="hero" className="lg:w-10/12 m-auto animate-pulse"/>
                            <img src={require("../assets/images/hero1.png")} alt="hero1" className="absolute lg:w-28 w-20 hero1" />
                            <img src={require("../assets/images/hero2.png")} alt="hero2" className="absolute lg:w-28 w-20 hero2" />
                            <img src={require("../assets/images/hero3.png")} alt="hero3" className="absolute lg:w-28 w-20 hero3" />
                            <img src={require("../assets/images/hero4.png")} alt="hero4" className="absolute lg:w-28 w-20 hero4" />
                        </div>
                        <div className="lg:w-6/12 text-white">
                            <p className="lg:text-4xl text-2xl fw-600">
                                Providing products and services to intending structure owners accross borders.
                            </p>
                            <p className="my-7">A platform where people can monitor and manage their projects without being encumbered by time and distance.</p>
                            <button className="px-4 py-2 rounded bg-secondary">
                                Get Started
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* start and monitor */}
            <div className="box">
                <div className="section">
                    <div>
                        <p className="lg:w-6/12 m-auto text-center lg:text-3xl text-2xl fw-600">Start, monitor and complete your project hazzle free in one app</p>
                    </div>
                    <div className="lg:flex justify-between mt-16">
                        <div className="text-center lg:w-2/12 px-4">
                            <img src={require("../assets/images/calculator.png")} alt="calculator" className="lg:w-20 w-16 m-auto mb-6"/>
                            <p>Price/Cost calculator</p>
                        </div>
                        <div className="text-center mt-6 lg:mt-0 lg:w-2/12 px-4">
                            <img src={require("../assets/images/tv.png")} alt="tv" className="lg:w-20 w-16 m-auto mb-6"/>
                            <p className="w-6/12 lg:w-full m-auto">In app meetings and reviews</p>    
                        </div>
                        <div className="text-center mt-6 lg:mt-0 lg:w-2/12 px-4">
                            <img src={require("../assets/images/prof.png")} alt="providers" className="lg:w-20 w-16 m-auto mb-6"/>
                            <p className="w-6/12 lg:w-full m-auto">Find expert construction workers</p>
                        </div>
                        <div className="text-center mt-6 lg:mt-0 lg:w-2/12 px-4">
                        <img src={require("../assets/images/tractor.png")} alt="tractor" className="lg:w-20 w-16 m-auto mb-6"/>
                            <p className="w-6/12 lg:w-full m-auto">Shop for construction materials</p>
                        </div>
                        <div className="text-center mt-6 lg:mt-0 lg:w-2/12 px-4">
                        <img src={require("../assets/images/call.png")} alt="call" className="lg:w-20 w-16 m-auto mb-6"/>
                            <p>Quality customer care</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* online market place */}
            <div className="bg-ash">
                <div className="box">
                    <div className="section">
                        <div className="flex">
                            <div className="w-2/12 flex justify-center">
                                <ImQuotesLeft className="text-primary lg:text-6xl text-3xl" />
                            </div>
                            <div className="w-8/12">
                                <p className="lg:text-3xl text-lg fw-400 py-8 text-center">
                                    BOG is an online marketplace which intends to provide a platform for individuals interested in owning structures in Nigeria/Africa achieve their aim.
                                </p>
                            </div>
                            <div className="w-2/12 flex justify-center self-end">
                            <ImQuotesRight className="text-primary lg:text-6xl text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video section */}
            <div className="section">
                <div className="box">
                    <div className="text-center mb-6">
                        <p className="text-2xl lg:text-4xl fw-600">How It Works</p>
                    </div>
                    <div className="lg:w-9/12 m-auto">
                        <img src={require("../assets/images/video.png")} alt="video" className="w-full"/>
                    </div>
                </div>
            </div>
            {/* shop on bog */}
            <div className="section bg-primary">
                <div className="box">
                    <div>
                        <div className="text-white">
                            <p className="lg:text-4xl text-2xl fw-600 mb-3">Shop on BOG</p>
                            <p>Purchase quality products for your construction project</p>
                        </div>
                        <div className="lg:grid-4 justify-between mt-12">
                            <div className="bg-white w-11/12 lg:w-full m-auto">
                                <div className="">
                                    <img src={require("../assets/images/sand.png")} alt="sand" className="w-full h-72"/>
                                </div>
                                <div className="flex items-center py-4 pl-4"><BsBag/><p className="pl-2">Shop for Sand</p></div>
                            </div>
                            <div className="mt-6 lg:mt-0 w-11/12 lg:w-full m-auto bg-white">
                                <div className="">
                                    <img src={require("../assets/images/steel.png")} alt="steel" className="w-full h-72"/>
                                </div>
                                <div className="flex items-center py-4 pl-4"><BsBag/><p className="pl-2">Shop for Steel</p></div>
                            </div>
                            <div className=" mt-6 lg:mt-0 w-11/12 lg:w-full m-auto bg-white">
                                <div className="">
                                    <img src={require("../assets/images/granite.png")} alt="steel" className="w-full h-72"/>
                                </div>
                                <div className="flex items-center py-4 pl-4"><BsBag/><p className="pl-2">Shop for Granite</p></div>
                            </div>
                            <div className=" mt-6 lg:mt-0 w-11/12 lg:w-full m-auto bg-white">
                                <div className="">
                                    <img src={require("../assets/images/cement.png")} alt="steel" className="w-full h-72"/>
                                </div>
                                <div className="flex items-center py-4 pl-4"><BsBag/><p className="pl-2">Shop for Cement</p></div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <button className="px-8 lg:px-12 lg:py-3 py-2 rounded text-white bg-secondary">Shop Materials</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* hire experts */}
            <div className="section">
                <div className="box">
                    <div>
                        <div>
                            <p className="text-xl lg:text-3xl m-auto text-center lg:w-6/12 fw-500 mb-4 ">Hire Expert Construction workers to get the work done.</p>
                            <p className="text-center m-auto lg:w-6/12">Find the qualified construction workers you need from our global network of over 12 thousand experienced professionals.</p>
                        </div>
                    </div>
                    <div className="mt-12 lg:block hidden">
                        <ProfSlides/>
                    </div>
                    <div className="mt-12 lg:hidden">
                        <ProfSlidesSm/>
                    </div>
                </div>
            </div>
            {/* provide service */}
            <div className="section bg-light">
                <div className="box">
                    <div>
                        <div>
                            <p className="text-xl lg:text-3xl m-auto text-center lg:w-6/12 w-10/12 fw-600 mb-4 ">Are your looking to provide Services or Goods on BOG?</p>
                            <p className="text-center m-auto lg:w-5/12 w-10/12">Sign up as a professional service provider or, a vendor today and get more jobs.</p>
                        </div>
                        <div className="mt-12 lg:flex justify-around">
                            <div className="lg:w-4/12 border-primary h-64 rounded-lg px-6 pt-8">
                                <p className="text-lg fw-600">Sign Up as a Service Partner</p>
                                <p className="mt-5 mb-7">Setup your account as a vendor and start selling your products fast and easy </p>
                                <p className="text-secondary text-lg flex items-center fw-600"><span className="pr-3">Sign Up</span> <BsArrowRight/></p>
                            </div>
                            <div className="lg:w-4/12 mt-6 lg:mt-0 border-secondary rounded-lg p-8">
                                <p className="text-lg fw-600">Sign Up as a Product Partner</p>
                                <p className="mt-5 mb-7">Setup your account as a vendor and start selling your products fast and easy </p>
                                <p className="text-primary text-lg flex items-center fw-600"><span className="pr-3">Sign Up</span> <BsArrowRight/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* updated with blogs */}
            <div className="section bg-tertiary">
                <div className="box">
                    <div className="hidden lg:flex">
                        <div className="mt-6 w-4/12 text-white mt-24 pr-6">
                            <p className="lg:text-3xl ">Stay updated with our blog posts</p>
                            <p className="my-6">Stay engaged with the latest news and insights from BOG</p>
                            <button className="mt-6 px-6 py-2 btn-primary">
                                See All Blog Post
                            </button>
                        </div>
                        <div className="w-8/12">
                            <BlogSlides/>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <BlogSlidesSm />
                    </div>
                </div>
            </div>
            {/* bringing community together */}
            <div className="section">
                <div className="box">
                    <div className="lg:flex justify-center items-center">
                        <div className="lg:w-5/12 ">
                            <p className="text-xl lg:text-3xl fw-500">
                                Bringing together a community of service partners, product partners
                                and clients.
                            </p>
                            <p className="my-3">An online marketplace which intends to provide a platform for individuals interested in owning structures in Nigeria/Africa achieve their aim.</p>
                            <button className="btn-primary px-6 mt-6">Get Started</button>
                        </div>
                        <div className="lg:w-6/12 mt-6 lg:mt-0">
                            <img src={require("../assets/images/build.png")} alt="build" className="lg:w-10/12 w-full m-auto"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* faqs */}
            <div className="section">
                <div className="box">
                    <div>
                        <div>
                            <p className="text-xl lg:text-3xl fw-600 text-center">Frequently Asked Questions</p>
                        </div>
                        <div className="lg:w-8/12 mt-12 m-auto">
                            <Faqs/>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div>
                <Footer/>
            </div>
        </div>
        )

}