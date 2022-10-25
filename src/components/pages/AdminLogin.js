/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../../redux/actions/authAction'
import { useFormik } from 'formik';
import { loginValidation } from '../../services/validation'
import Spinner from "../layouts/Spinner";

export default function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [loading, setLoading] = useState(false);
    const stopLoading = () => setLoading(false);
    const handleSubmit = (values) => {
        setLoading(true)
        console.log(values);
        dispatch(loginAdmin(values, navigate, stopLoading));
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
            navigate("/dashboard/home");
        }
    }, []);

    if (isAuthenticated === true) {
        return <Navigate to="/dashboard/home" replace />
    }

    return (

        <div className="min-h-screen bg-primary text-black font-primary">
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-4/12 w-11/12 pt-5 pb-8">

                    <div className="lg:px-8 bg-white py-8 px-5 shadow-lg ">
                        <div className="text-center">
                            <Link to='/'>
                                <img src={require("../assets/images/logo.png")} alt="adminlogo" className="w-28 m-auto pb-5 lg:w-36" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <p className="text-lg fw-600">ADMIN LOGIN</p>
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="w-full mt-8">
                                    <label className="block fw-600">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter your username"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                        name="password"
                                        value={password}
                                        id="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {
                                    error ? <p className="text-lg text-center mt-3 fw-700 text-red-600">{error}</p> : null
                                }
                                <div className="mt-8 w-full text-center">
                                    {
                                        loading ? <Spinner /> : <button type="submit" className="w-full bg-primary py-3 rounded text-xl text-white fw-600">
                                            Login
                                        </button>
                                    }

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}