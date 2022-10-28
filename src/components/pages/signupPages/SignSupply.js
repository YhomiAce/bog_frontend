import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Spinner from '../../layouts/Spinner';
import { useDispatch } from 'react-redux';
import { register } from "../../../redux/actions/authAction";
import { supplierValidationSchema } from '../../../services/validation';

const SignSupply = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const stopLoading = () => setLoading(false);
  const handleSubmit = (values, actions) => {
    setLoading(true)
    console.log(values);
    const paylaod = {
      ...values,
      userType: "vendor"
    }
    dispatch(register(paylaod, navigate, stopLoading));
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      email: "",
      phone: "",
      password: "",
      terms: false
    },
    validationSchema: supplierValidationSchema,
    onSubmit: handleSubmit,
  });
  const { name, email, password, phone, terms, company_name } = formik.values;
  return (
    <div className="bg-login bg-fixed bg-cover text-black font-primary">
      <Link to="/">
        <img
          src={require("./images/logo.png")}
          className="w-32 mt-2 ml-2 lg:hidden lg:36"
          alt="Alnt"
        />
      </Link>
      <div className="flex lg:py-24 py-12 relative  lg:ml-12 text-sm justify-end">
        {/* the list of services */}
        <div className="lg:w-4/12 tags fixed pr-10 pt-16 hidden lg:block">
          <Link to="/"><img src={require('./images/logo.png')} alt="logo" className="w-48 mb-10 relative " /></Link>
          <ul>
            <li className="flex">
              <img src={require('./images/icon2.png')} className="w-7 h-7 mr-5" alt="App Logo" />
              <div>
                <p className="fw-600 fs-600 mb-2">Get Started Easily</p>
                <p>Sign up and start enjoying all your features tailored to suit you </p>
              </div>
            </li>
            <li className="my-6 flex">
              <img src={require('./images/icon2.png')} className="w-7 h-7 mr-5" alt="App Logo" />
              <div>
                <p className="fw-600 fs-600 mb-2">All Access Control</p>
                <p>Control all parts of your construction from start to finish all in one place</p>
              </div>
            </li>
            <li className="flex">
              <img src={require('./images/icon2.png')} className="w-7 h-7 mr-5" alt="App Logo" />
              <div>
                <p className="fw-600 fs-600 mb-2">Sell Products & Services</p>
                <p>Easily market your products and provide services to clients in need </p>
              </div>
            </li>
          </ul>
        </div>
        {/* form section */}
        <div className="lg:w-5/12 fw-500 w-11/12 m-auto bg-white lg:mr-24 py-10 lg:px-10 px-5 shadow-lg">
          <div>
            <p className="text-2xl fw-600">Sign Up as Product Partner</p>
            <p className="mt-1">Not a product partner ? <Link to="/signup" className="text-primary">Switch User type</Link></p>
          </div>
          <div className="mt-8">
            {
              loading ? <Spinner /> :

                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full">
                    <label className="block">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
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
                    <label className="block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
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
                      placeholder="Enter your email address"
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
                    <label className="block">Company Name</label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                      value={company_name}
                      id="company_name"
                      name="company_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {
                      formik.touched.company_name && formik.errors.company_name ? <p className='text-red-500'>{formik.errors.company_name}</p> : null
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
                    <input
                      type="password"
                      placeholder="Enter your desired password"
                      className="mt-1 w-full py-2 px-2 border-gray-400 rounded border"
                      value={password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="password"
                      name="password"
                    />
                    {
                      formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> : null
                    }
                  </div>
                  <div className="mt-8 w-11/12 flex">
                    <input
                      type="checkbox"
                      className="p-4 border-gray-400"
                      value={terms}
                      onChange={formik.handleChange}
                      id="terms"
                      name="terms"
                      required
                    />
                    {
                      formik.touched.terms && formik.errors.terms ? <p className='text-red-500'>{formik.errors.terms}</p> : null
                    }
                    <p className="px-2">
                      I agree to the
                      <span className="pl-2 text-primary">terms & conditions</span>.
                    </p>
                  </div>
                  <div className="mt-6 w-full flex">
                    <button type='submit' className="w-full text-lg text-white bg-primary py-2 rounded fw-600">
                      Sign Up
                    </button>
                  </div>
                </form>
            }
            <div className="mt-10">
              Already have an account?{" "}
              <Link to="/login"><span className="text-primary pl-2 fw-600 fs-500">Login</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignSupply;
