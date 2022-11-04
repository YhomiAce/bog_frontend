import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { BsInfoCircleFill } from "react-icons/bs";
import { useFormik } from 'formik';
import { updatePasswordValidation } from '../../../../services/validation';
import Spinner from '../../../layouts/Spinner';
import { updatePassword, SuccessAlert } from '../../../../services/endpoint';

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = async (values) => {
        console.log(values);
        try {
            setLoading(true);
            const payload = {
                ...values
            }
            console.log(payload);
            const res = await updatePassword(payload);
            if (res.success === true) {
                setShow(true);
                SuccessAlert("Password update successfully!");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }

    }
    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
        validationSchema: updatePasswordValidation,
        onSubmit: handleSubmit,
    });
    const { oldPassword, newPassword, confirmPassword } = formik.values;
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="lg:w-11/12 lg:mt-6 mt-6 mx-auto">
                <div className="pt-5">
                    <label className="block mb-1 fw-500">Old Password</label>
                    <input
                        type="password"
                        className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                        name="oldPassword"
                        value={oldPassword}
                        id="oldPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.oldPassword && formik.errors.oldPassword ? <p className='text-red-500'>{formik.errors.oldPassword}</p> : null
                    }
                </div>
                <div className="mt-3">
                    <label className="block mb-1 fw-500">New Password</label>
                    <input
                        type="password"
                        className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                        name="newPassword"
                        value={newPassword}
                        id="newPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.newPassword && formik.errors.newPassword ? <p className='text-red-500'>{formik.errors.newPassword}</p> : null
                    }
                </div>
                <div className="mt-3">
                    <label className="block mb-1 fw-500">Confirm New Password</label>
                    <input
                        type="password"
                        className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
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
                <div className="my-6 fs-400 lg:w-11/12 flex justify-between items-center">
                    <p className="flex items-center fw-500 text-primary"><BsInfoCircleFill className="text-xl text-primary" /><span className="pl-3 text-primary">Password should be minmum 8 letter and include lower and uppercase letter.</span></p>
                </div>
                <div className="mt-10 lg:w-11/12 lg:flex justify-between items-center">
                    {
                        loading ? <Spinner /> :
                            <button
                                type="submit"
                                className="btn-primary"
                            >Update Password</button>
                    }
                    {
                        show ? <p className="flex items-center fw-500 mt-4 lg:mt-0 text-primary"><BiCheckCircle /><span className="pl-1">All Changes are saved</span></p> : null
                    }
                </div>
                {/* <div className="mt-8 bg-light lg:px-5 px-3 py-4 rounded-lg">
                <p className="fw-600 fs-700 lg:text-lg">Two-Factor Verification</p>
                <p className="fs-400 pt-5">Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                <div className="mt-10 lg:w-11/12 lg:flex justify-between items-center">
                    <button className="btn border border-blue-600 fs-500">Enable 2FA</button>
                    <p className="flex items-center fs-300 fw-500 text-gray-500 mt-4 lg:mt-0">CURRENT STATUS: <p>DISABLED</p></p>
                </div>
            </div> */}
            </div>
        </form>
    )
}

export default ChangePassword