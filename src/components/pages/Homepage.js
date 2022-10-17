import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
    
    return(
        <div>
            <div className="bg-login min-h-screen bg-cover">
                <img src={require('../assets/images/logo.png')} alt="App Logo" className="m-auto w-96"/>
                <p className="py-12 text-center text-3xl">The homepage</p>
                <div className="flex justify-evenly lg:w-6/12 m-auto">
                <Link to="/login"><button className="btn bg-blue-500 text-white">Login</button></Link>
                <Link to="/signup"><button className="btn btn-default">Sign Up</button></Link>
                </div>
            </div>
        </div>
        )

}