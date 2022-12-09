import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi"
import { BsArrowRightCircleFill } from 'react-icons/bs'

export function Subscription() {
    

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
                            <p className='mt-3 text-gray-600 lg:w-96 mx-auto'>Choose a plan thet works best for you and your team.</p>
                        </div>
                        <div className='lg:flex justify-evenly py-12 lg:pb-24'>
                            <div className='lg:w-3/12 hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 rounded-md bg-white shades'>
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
                                        <p className='pl-1'>Render services clients</p>
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
                                    <button className='flex items-center w-full btn-primary'>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                            <div className='lg:w-3/12 hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 rounded-md bg-white shades'>
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
                                        <p className='pl-1'>Render services clients</p>
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
                                    <button className='flex items-center w-full btn-primary'>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                            <div className='lg:w-3/12 hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 rounded-md bg-white shades'>
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
                                        <p className='pl-1'>Render services clients</p>
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
                                    <button className='flex items-center w-full btn-primary'>Choose Plan <span className='pl-2'><BsArrowRightCircleFill/></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="scale-ani" onClick={e => e.stopPropagation()}>
                        <form>
                            <div className="bg-white px-4 rounded-md pt-8 pb-8 lg:p-10 lg:pb-16 shadow fw-500">
                                <div className="lg:flex">
                                    <div className="mt-5 lg:mt-8 lg:pr-5 lg:w-6/12">
                                        <label className="block">Your TIN (Taxpayer Identification Number)</label>
                                        <input type="text" className="w-full border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter your TIN" required/>
                                    </div>
                                    <div className="mt-5 lg:mt-8 lg:pl-5 lg:w-6/12">
                                        <div className="flex justify-between"><label className="block">Upload your CAC</label> <p className="pr-4"><AiOutlineInfoCircle/></p></div>
                                        <input type="file" className="w-full border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="mt-5 lg:mt-7 lg:w-6/12 lg:pr-6">
                                        <label className="block">Bank Account Holder Number</label>
                                        <input type="text" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter your bank account name" required/>
                                    </div>
                                    <div className="mt-5 lg:mt-7 lg:w-6/12 lg:pl-6">
                                        <label className="block">Bank Name</label>
                                        <input type="text" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter your bank name" required/>
                                    </div>
                                </div>
                                <div className="mt-5 lg:mt-7 lg:w-6/12 lg:pr-6">
                                    <label className="block">Account Number</label>
                                    <input type="text" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" placeholder="Enter your bank account number" required/>
                                </div>
                            </div>
                            <div className="my-8 border-t border-gray-300 pt-8">
                                <div className="text-end">
                                    <button className="btn bg-primary text-white lg:px-24 lg:fw-600">Submit KYC</button>
                                </div>
                            </div>
                        </form>
                    </div>  */}
                </div>
            </div>
        </div>
        )
}
