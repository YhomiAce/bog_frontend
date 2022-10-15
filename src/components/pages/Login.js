import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromFakeApi } from '../../redux/actions/authAction'


export default function Login() {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const handlerLogin = (e) =>{
        e.preventDefault();
        dispatch(getUserFromFakeApi());
    }
    
    return (
        <div className="bg-login min-h-screen bg-cover text-black font-primary" >
            
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-5/12 w-11/12 pt-5 pb-8">
                <img src={require('../assets/images/logo.png')} className="w-28 pb-5 lg:w-44" />
                <div className="lg:px-12 bg-white py-8 px-5 shadow-lg ">
                    <div>
                    {
                            profile?.error !== null ? <p className="text-xl fw-700 text-red-600">{profile?.error}</p> : null
                        }
                        <p className="text-xl fw-700">Log into your account</p>
                        
                    </div>
                    <div className="mt-8">
                        <form>
                            <div className="w-full">
                                <label className="block">
                                    Email
                                </label>
                                <input type="email" placeholder="enter your email" className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"/>
                            </div>
                            <div className="mt-6 w-full">
                                <div className="flex justify-between">
                                <label>
                                    Password
                                    </label>
                                    <Link to="/forget"><p className="text-primary">Forgot Password?</p></Link>
                                </div>
                                <input type="password" placeholder="enter your password" className="w-full border-gray-400 mt-2 py-2 px-2 rounded border"/>
                            </div>
                            <div className="mt-6 w-11/12 flex">
                                <input type="checkbox" className="p-4 border-gray-400" />
                                <p className="px-2">Remember me</p>
                            </div>
                            <div className="mt-6 w-full flex">
                                <button type="submit" onClick={handlerLogin} className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                                    Log in
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 text-center">
                            Don't have an account yet? <span className="text-secondary fs-500 fw-600"><Link to="/signup">Sign Up</Link></span>
                        </div>
                    </div>
                </div>
                </div>
           </div>
        </div>
    );
}