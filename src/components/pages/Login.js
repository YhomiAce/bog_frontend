/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction'
import { useFormik } from 'formik';
import { loginValidation } from '../../services/validation'
import Spinner from "../layouts/Spinner";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [loading, setLoading] = useState(false);
    const stopLoading = () => setLoading(false);
    const handleSubmit = (values) => {
        setLoading(true)
        console.log(values);
        dispatch(loginUser(values, navigate, stopLoading));
    }
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidation,
        onSubmit: handleSubmit,
    });
    const { email, password } = formik.values;
    
    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/dashboard");
        }
    }, []);

    if (isAuthenticated === true) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <div className="bg-login min-h-screen bg-cover text-black font-primary" >
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-4/12 w-11/12 pt-5 pb-8">
                    <Link to="/">
                        <img src={require('../assets/images/logo.png')} alt="App Logo" className="w-28 pb-5 lg:w-44" />
                    </Link>
                    <div className="lg:px-12 bg-white py-8 px-5 shadow-lg ">
                        <div>

                            <p className="text-xl fw-700">Log into your account</p>

                        </div>
                        <div className="mt-8">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="w-full">
                                    <label className="block">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="enter your email"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.email && formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> : null
                                    }
                                </div>
                                <div className="mt-6 w-full">
                                    <div className="flex justify-between">
                                        <label>
                                            Password
                                        </label>
                                        <Link to="/forget"><p className="text-primary">Forgot Password?</p></Link>
                                    </div>
                                    <div className="flex items-center bg-input border border-gray-400 mt-2 rounded">
                                        <input
                                            type={passwordType}
                                            placeholder="enter your password"
                                            className="w-full border-0 py-2 px-2 rounded"
                                            name="password"
                                            value={password}
                                            id="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {
                                            formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> : null
                                        }
                                        <div onClick={togglePassword} className="px-3">
                                            {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                        </div>

                                    </div>
                                </div>
                                <div className="mt-6 w-11/12 flex">
                                    <input type="checkbox" className="p-4 border-gray-400" />
                                    <p className="px-2">Remember me</p>
                                </div>
                                <div className="mt-6 w-full flex">
                                    {
                                        loading ? <Spinner /> : <button type="submit" className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                                            Log in
                                        </button>
                                    }


                                </div>
                                {
                                    error ? <p className="text-lg text-center mt-3 fw-700 text-red-600">{error}</p> : null
                                }
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