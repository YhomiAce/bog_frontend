/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { changePasswordValidation } from '../../services/validation';
import Spinner from "../layouts/Spinner";
import Axios from "../../config/config";
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export default function ResetPassword() {
    const { search } = useLocation();
    const email = new URLSearchParams(search).get("email");
    const token = new URLSearchParams(search).get("token");
    console.log({ email, token });
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            console.log(values);
            if (values.password !== values.confirmPassword) {
                setLoading(false)
                toaster.notify(
                    "Passwords do not match",
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
                return;
            }
            const payload = {
                email,
                token,
                password: values.password
            };
            const resp = await Axios.post('/user/reset-password', payload);
            setLoading(false)
            console.log(resp);
            Swal.fire({
                title: "Success",
                icon: "success",
                text: "Password created successfully"
            }).then(() => {
                navigate("/login")
            });
        } catch (error) {
            setLoading(false)
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: changePasswordValidation,
        onSubmit: handleSubmit,
    });
    const { confirmPassword, password } = formik.values;

    return (
        <div className="bg-login min-h-screen bg-cover text-black font-primary" >
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-5/12 w-11/12 pt-5 pb-8">
                    <Link to="/"><img src={require('../assets/images/logo.png')} alt="App Logo" className="w-28 pb-5 lg:w-44" /></Link>
                    <div className="lg:px-12 bg-white py-8 px-5 shadow-lg ">
                        <div>

                            <p className="text-xl fw-700">Create New Password</p>

                        </div>
                        <div className="mt-8">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mt-6 w-full">
                                    <div className="flex justify-between">
                                        <label>
                                            New Password
                                        </label>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="enter your password"
                                        className="w-full border-gray-400 mt-2 py-2 px-2 rounded border"
                                        name="password"
                                        value={password}
                                        id="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> : null
                                    }
                                </div>
                                <div className="mt-6 w-full">
                                    <div className="flex justify-between">
                                        <label>
                                            Confirm Password
                                        </label>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full border-gray-400 mt-2 py-2 px-2 rounded border"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        id="confirmPassword"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='text-red-500'>{formik.errors.confirmPassword}</p> : null
                                    }
                                </div>
                                <div className="mt-6 w-full flex">
                                    {
                                        loading ? <Spinner /> :
                                            <button type="submit" className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                                                Create Password
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