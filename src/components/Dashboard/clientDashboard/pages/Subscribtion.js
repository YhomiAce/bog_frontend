import { Breadcrumbs, Button } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi"
import { BsArrowRightCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import { usePaystackPayment } from 'react-paystack'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Swal from 'sweetalert2'

export function Subscription() {

    const navigate = useNavigate()
    const[getKyc, setGetKyc] = useState(true)

    const CloseModal = () => {
        setGetKyc(false)
    }

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_0c79398dba746ce329d163885dd3fe5bc7e1f243',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      Swal.fire({
        title: "Success",
        imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
        imageWidth: "75px",
        text: "Congratulation, your subscription is successful",
        buttonsStyling: "false",
        confirmButtonText: '<Link to="/dashboard">Continue</Link>',
        confirmButtonColor: "#3F79AD",
        }).then(function() {
            window.location.href = "/dashboard";
        })
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    
    const initializePayment = usePaystackPayment(config);
    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Subscription</p>
                        <p className="fs-400 text-gray-600 mt-2">subscribe to gain access to all services.</p>
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
                                <span>Subscription</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>  
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className='bg-white '>
                        <div className='text-center pt-6 lg:pt-12'>
                            <p className='text-2xl fw-600'><span className='text-primary'>Flexible </span>Plans</p>
                            <p className='mt-3 text-gray-600 lg:w-96 mx-auto'>Choose a plan that works best for you and your team.</p>
                        </div>
                        <div className='lg:flex justify-evenly py-12 lg:pb-24'>
                            <div className='lg:w-3/12 w-11/12 mx-auto hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 p-6 rounded-md bg-white shades'>
                                <div className='flex pb-5'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670591820/BOG/basic-removebg-preview_aeltgx.png' alt="basic" className='w-16 bg-primary rounded-lg' />
                                    <div className='pl-3  fs-400 fw-600'>
                                        <p>Basic Plan</p>
                                        <p className=''>1 year</p>
                                        <p>NGN 5000</p>
                                    </div>
                                </div>
                                <div className='border-t py-4'>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Sell your products to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Render services to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Flexible team meeting</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Available for 12 months.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='flex items-center w-full btn-primary' onClick={() => {
                                        initializePayment(onSuccess, onClose)}}>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                            <div className='lg:w-3/12 w-11/12 mx-auto p-6 mt-7 lg:mt-0 hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 rounded-md bg-white shades'>
                                <div className='flex pb-5'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670591820/BOG/basic-removebg-preview_aeltgx.png' alt="basic" className='w-16 bg-secondary rounded-lg' />
                                    <div className='pl-3  fs-400 fw-600'>
                                        <p>Ultra Plan</p>
                                        <p className=''>2 year</p>
                                        <p>NGN 9000</p>
                                    </div>
                                </div>
                                <div className='border-t py-4'>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Sell your products to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Render services to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Flexible team meeting</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Available for 24 months.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='flex items-center w-full btn-primary' onClick={() => {
                                        initializePayment(onSuccess, onClose)}}>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                            <div className='lg:w-3/12  w-11/12 mx-auto p-6 mt-7 lg:mt-0 hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 rounded-md bg-white shades'>
                                <div className='flex pb-5'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670591820/BOG/basic-removebg-preview_aeltgx.png' alt="basic" className='w-16 bg-green-300 rounded-lg' />
                                    <div className='pl-3  fs-400 fw-600'>
                                        <p>Pro Plan</p>
                                        <p className=''>5 years</p>
                                        <p>NGN 20000</p>
                                    </div>
                                </div>
                                <div className='border-t py-4'>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Sell your products to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Render services to clients</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Flexible team meeting</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <GiCheckMark/>
                                        <p className='pl-1'>Available for 60 months.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='flex items-center w-full btn-primary' onClick={() => {
                                        initializePayment(onSuccess, onClose)}}>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                getKyc && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                        <div className="bg-white lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                                <div className='flex justify-between px-4 py-6'>
                                    <p className="lg:fs-700 fw-500 flex">
                                        <span className='block mt-1 mr-2 text-secondary'>
                                            <BsInfoCircleFill/>
                                        </span>
                                        <span>
                                            Please note that you are to complete and submit your KYC form before proceeding with your choiced subscription.
                                        </span>
                                    </p>
                                    <FaTimes className='cursor-pointer text-red-600 mb-3' onClick={CloseModal}/>
                                </div>
                                <div className='mt-4 px-4 py-4 bg-light text-end'>
                                    <Button className='bg-secondary' onClick={() => {navigate('/dashboard/kyc')}} >Goto KYC</Button>
                                    <Button className='bg-primary ml-4' onClick={CloseModal}>Continue</Button>
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
        )
}
