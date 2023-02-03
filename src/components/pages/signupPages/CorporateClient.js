import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Spinner from '../../layouts/Spinner';
import { useDispatch } from 'react-redux';
import { register } from "../../../redux/actions/authAction";
import { corporateClientSchema } from '../../../services/validation';
import ReCAPTCHA from "react-google-recaptcha";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import {AiOutlineInfoCircle}  from 'react-icons/ai';

const CorporateClient = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const stopLoading = () => setLoading(false);
    const captchaRef = useRef(null)

    const handleSubmit = (values) => {
        try {
            setLoading(true)
            console.log(values);
            const paylaod = {
                ...values,
                userType: "corporate_client",
                company_name: values.name,
                captcha: captchaRef.current.getValue(),
                fname: name,
                lname: name
            }
            dispatch(register(paylaod, navigate, stopLoading));
        } catch (error) {
            setLoading(false)
            console.log({ error });
        }
    }

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const [refTooltip, setRefTooltip] = useState(false)
    const [passTooltip, setPassTooltip] = useState(false)

    const referenceValue = localStorage.getItem("reference");
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
            aboutUs: "",
            terms: false,
            reference: referenceValue || "",
        },
        validationSchema: corporateClientSchema,
        onSubmit: handleSubmit,
    });
    const { name, email, password, phone, terms, aboutUs, reference, password2 } = formik.values;
    return (
        <div className="mt-8">
            {
                loading ? <Spinner /> :
                    <form onSubmit={formik.handleSubmit}>
                        <div className="w-full">
                            <label className="block">Company Name</label>
                            <input
                                type="text"
                                placeholder="Enter your company name"
                                className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                                value={name}
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null
                            }
                        </div>
                        <div className="w-full mt-6">
                            <label className="block">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your company email"
                                className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                                value={email}
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.email && formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> : null
                            }
                        </div>
                        <div className="w-full mt-6">
                            <label className="block">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                                value={phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="phone"
                                name="phone"
                            />
                            {
                                formik.touched.phone && formik.errors.phone ? <p className='text-red-500'>{formik.errors.phone}</p> : null
                            }
                        </div>
                        <div className="w-full mt-6">
                            <label className="block">Password</label>
                            {passTooltip && (
                                <div className='flex scale-ani py-2 px-2 my-2 bg-tool rounded fs-300' onClick={() => setPassTooltip((prev) => !prev)}>
                                    <AiOutlineInfoCircle className="text-lg text-gray-700"/>
                                    <p className='pl-2'>The password must contain minimum of 8 characters, uppercase character and a unique character</p>
                                </div>
                            )}
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Enter your desired password"
                                    className="w-full border-0 py-2 px-2 rounded"
                                    value={password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onFocus={() => setPassTooltip(true)}
                                    id="password"
                                    name="password"
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
                            {
                                formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> : null
                            }
                        </div>
                        <div className="w-full mt-6">
                            <label className="block">Confirm Password</label>
                            
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Enter your desired password"
                                    className="w-full border-0 py-2 px-2 rounded"
                                    value={password2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onFocus={() => setPassTooltip(true)}
                                    id="password2"
                                    name="password2"
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
                            {
                                formik.touched.password2 && formik.errors.password2 ? <p className='text-red-500'>{formik.errors.password2}</p> : null
                            }
                        </div>
                        <div className="w-full mt-6">
                            <div className='flex justify-between pr-2'>
                                <label className='block'>Referral Code (Optional)</label>
                                <AiOutlineInfoCircle className="text-lg text-gray-700" onClick={() => setRefTooltip((prev) => !prev)}/>
                            </div>
                            {refTooltip && (
                                <div className='flex scale-ani py-2 px-2 my-2 bg-tool rounded fs-300'>
                                    <AiOutlineInfoCircle className="text-lg text-gray-700"/>
                                    <p className='pl-2'>Please, only enter the referral. Leave empty if you dont have a referral code.</p>
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Enter your referral code"
                                className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                                id="reference"
                                name="reference"
                                value={reference}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="w-full mt-6">
                            <label className='block'>Where did you hear about us?</label>
                            <select
                                className='mt-2 py-2 px-2 bg-white border border-gray-500 rounded w-full'
                                id="aboutUs"
                                name="aboutUs"
                                defaultValue={aboutUs}
                                onChange={formik.handleChange}
                            >
                                <option disabled >Select an option</option>
                                <option value="apple">Apple App Store</option>
                                <option value="email">Email</option>
                                <option value="facebook">Facebook</option>
                                <option value="google">Google</option>
                                <option value="playstore">Google Play Store</option>
                                <option value="instagram">Instagram</option>
                                <option value="referral">Referral</option>
                                <option value="twitter">Twitter</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                        <div className="mt-6 w-11/12 flex">
                            <input
                                type="checkbox"
                                className="p-4 border-gray-400"
                                value={terms}
                                onChange={formik.handleChange}
                                id="terms"
                                name="terms"
                                required
                            />
                            <p className="px-2">
                                I agree to the
                                <Link to="/terms"><span className=" pl-2 text-primary hover:text-red-600 cursor-pointer  ">
                                    Terms & Conditions
                                </span></Link>.
                            </p>
                        </div>
                        <div className="mt-8">
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                ref={captchaRef}
                            />
                        </div>
                        <div className="mt-6 w-full flex">
                            <button type='submit' onClick={formik.handleSubmit} className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                                Sign Up
                            </button>
                        </div>

                    </form>
            }
            <div className="mt-10">
                Already have an account?{" "}
                <Link to="/login"><span className="text-primary fw-600 fs-500">Login</span></Link>
            </div>
        </div>
    )
}

export default CorporateClient