import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function Blog(){

    return (
        <div>
            <div className="font-primary">
                <Header/>
                <div className="bg-blog bg-cover bg-center text-white h-80 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-2">Our Blog</p>
                            <p className="lg:w-5/12">The BOG Blog is your source for trends, deep dives, analyses, talent resources, and more in the industry </p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex fs-500">
                            <div className="w-9/12 lg:pr-8 border-r-2">
                                <div>
                                    <p className="lg:text-2xl text-lg fw-600 mb-8 ">Latest News</p>
                                    <div className="flex">
                                        <div className="w-4/12">
                                        <img src={require("../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                                        </div>
                                        <div className="w-8/12 px-5">
                                            <p className="text-xs text-gray-500">23 OCT, 2022</p>
                                            <p className="fs-600 lg:text-lg fw-500 py-3">6 Ways to Improve Machine Operators’ Safety on Construction </p>
                                            <p>It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                                            <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight/></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 lg:w-11/12">
                                    <p className="lg:text-2xl text-lg fw-600 mb-8 ">All News</p>
                                    <div className="lg:flex justify-between">
                                        <div className="w-5/12 shadow-lg">
                                            <div>
                                            <img src={require("../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                                            </div>
                                            <div className="px-3 py-4">
                                                <p className="fs-600 fw-600">Top 10 In Demand Construction Jobs </p>
                                                <p className="my-3">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                                                <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight/></span></p>
                                            </div>
                                        </div>
                                        <div className="w-5/12 mt-6 lg:mt-0 shadow-lg">
                                            <div>
                                                <img src={require("../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                                            </div>
                                            <div className="px-3 py-4">
                                                <p className="fs-600 fw-600">Top 10 In Demand Construction Jobs </p>
                                                <p className="my-3">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                                                <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight/></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:flex justify-between mt-12">
                                        <div className="w-5/12 shadow-lg">
                                            <div>
                                            <img src={require("../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                                            </div>
                                            <div className="px-3 py-4">
                                                <p className="fs-600 fw-600">Top 10 In Demand Construction Jobs </p>
                                                <p className="my-3">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                                                <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight/></span></p>
                                            </div>
                                        </div>
                                        <div className="w-5/12 mt-6 lg:mt-0 shadow-lg">
                                            <div>
                                                <img src={require("../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                                            </div>
                                            <div className="px-3 py-4">
                                                <p className="fs-600 fw-600">Top 10 In Demand Construction Jobs </p>
                                                <p className="my-3">Construction, by nature, is a cyclical business, and the decade beginning with 2020 has... </p>
                                                <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight/></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class=" relative mx-auto text-gray-600 hidden lg:block">
                                    <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search"/>
                                    <button type="submit" class="absolute bg-primary right-0 top-0 py-2 px-4 rounded-r-lg">
                                    <FontAwesomeIcon icon={faSearch} className="text-white"  />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}