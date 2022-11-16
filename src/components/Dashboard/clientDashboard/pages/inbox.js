import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { BsCheck2, BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Inbox() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Inbox</p>
                        <p className="fs-400 text-gray-600 mt-2">Send and recieve messages from your service providers</p>
                        <Breadcrumbs className="bg-white pl-0 mt-4">
                            <Link to="/" className="opacity-60">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </Link>
                            <Link to="/dashboard" className="opacity-60">
                                <span>Dashboard</span>
                            </Link>
                            <Link to="" className="">
                                <span>Inbox</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div>
                        <button className="btn border-pri text-primary">New Message</button>
                    </div>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    <div className="bg-white lg:p-8 rounded-md flex">
                        <div className="w-3/12">
                            <div class="flex text-gray-600">
                                <input
                                class="border-2 border-gray-300 bg-white h-8 px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                                type="search"
                                name="search order by name"
                                placeholder="Search"
                                />
                                <button
                                type="submit"
                                class=" bg-primary right-0 top-0 h-8 py-2 px-4 rounded-r-lg"
                                >
                                <FontAwesomeIcon icon={faSearch} className="text-white relative -top-1" />
                                </button>
                            </div>
                            <div className="mt-6 py-6 border rounded-md px-3">
                                <div className="flex">
                                    <div>
                                        <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                    </div>
                                    <div className="pl-2">
                                        <p className="fs-400 fw-500">Land Survey</p>
                                        <p className="text-gray-400 text-xs flex mt-2"><span className="pr-1 mt-1"><BsCheck2/></span>Have you seen the things i sent ?</p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                    </div>
                                    <div className="pl-2">
                                        <p className="fs-400 fw-500">Land Survey</p>
                                        <p className="text-gray-400 text-xs flex mt-2"><span className="pr-1 mt-1"><BsCheck2/></span>Have you seen the things i sent ?</p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                    </div>
                                    <div className="pl-2">
                                        <p className="fs-400 fw-500">Land Survey</p>
                                        <p className="text-gray-400 text-xs flex mt-2"><span className="pr-1 mt-1"><BsCheck2/></span>Have you seen the things i sent ?</p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                    </div>
                                    <div className="pl-2">
                                        <p className="fs-400 fw-500">Land Survey</p>
                                        <p className="text-gray-400 text-xs flex mt-2"><span className="pr-1 mt-1"><BsCheck2/></span>Have you seen the things i sent ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-9/12 lg:px-10">
                            <div className="border py-6 px-4 rounded-md">
                                <div className="flex justify-between pb-3 items-center border-b">
                                    <div>
                                        <div className="flex">
                                            <div>
                                                <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                            </div>
                                            <div className="pl-2">
                                                <p className="fs-400 fw-500">Land Survey</p>
                                                <p className="text-gray-400 text-xs flex mt-2">Active Now</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="bg-light"><BsThreeDotsVertical/></p>
                                    </div>
                                </div>
                                <div className="relative grid content-end lg:h-96">
                                    <div className="absolute left-45">
                                        <p className="bg-light fs-300 p-1 px-2 rounded-md">Yesterday</p>
                                    </div>
                                    <div>
                                        <div className="flex mt-6 w-full">
                                            <div>
                                                <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                            </div>
                                            <div className="pl-2">
                                                <p className="fs-500  bg-gray-100 px-2 py-1">Hello</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-6 float-right">
                                            <div className="pr-2">
                                                <p className="fs-500  bg-gray-100 px-2 py-1">Hello how are you doing ? </p>
                                            </div>
                                            <div>
                                                <Avatar variant="circular" src={require("../images/pic1.jpg")} alt="favlogo"  />
                                            </div>
                                        </div>
                                        <div className="flex mt-6 w-full">
                                            <div>
                                                <Avatar variant="circular" src={require("../images/favlogo.png")} alt="favlogo"  />
                                            </div>
                                            <div className="pl-2">
                                                <p className="fs-500  bg-gray-100 px-2 py-1">I’m doing great</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-6 float-right">
                                            <div className="pr-2">
                                                <p className="fs-500  bg-gray-100 px-2 py-1">How is the project going ? </p>
                                            </div>
                                            <div>
                                                <Avatar variant="circular" src={require("../images/pic1.jpg")} alt="favlogo"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-md bg-gray-100 mt-6 flex justify-between items-center">
                                            <input type="text" className="w-10/12 py-2 px-2 outline-none rounded-md bg-gray-100" />
                                            <p className="text-2xl text-primary"><IoMdAttach/></p>
                                            <p className="text-2xl text-primary"><MdKeyboardVoice/></p>
                                            <button className="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        )
}