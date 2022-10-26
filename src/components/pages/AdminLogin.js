import React from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
    
    return (

        <div className="min-h-screen bg-primary text-black font-primary">
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-4/12 w-11/12 pt-5 pb-8">
                    
                    <div  className="lg:px-8 bg-white py-8 px-5 shadow-lg ">
                        <div className="text-center">
                            <Link to="/"><img src={require("../assets/images/logo.png")} alt="adminlogo" className="w-28 m-auto pb-5 lg:w-36"/></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-lg fw-600">ADMIN LOGIN</p>
                        </div>
                        <div>
                            <form>
                                <div className="w-full mt-8">
                                    <label className="block fw-600">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter your username"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                                    />
                                </div>
                                <div className="mt-6 w-full">
                                    <label className="block fw-600">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="enter your password"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                                    />
                                </div>
                                <div className="mt-8 w-full text-center">
                                    <button className="w-full bg-primary py-3 rounded text-xl text-white fw-600">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}