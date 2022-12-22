import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Footer from './home-comp/Footer'
import Header from './home-comp/Header'

export const BAP = () => {
  return (
    <div className='font-primary'>
        <Header/>
        <div className='lg:flex h-102'>
            <div className='lg:w-6/12 relative h-80 lg:h-full'>
                <div className='absolute w-full h-full z-01 grid place-content-center'>
                    <div className='w-10/12 mx-auto'>
                        <div className='bap-hero w-full lg:p-10 p-6 lg:text-2xl fw-600 lg:mt-28 mt-20 '>
                            <div className='absolute left-0 lg:top-24 top-10 w-6/12 lg:w-8/12 xl:w-6/12 hero-head xxl:w-6/12 bg-primary text-center text-white lg:px-6 xl:px-12 lg:py-8 xl:py-16 py-8 rounded-xxl '>
                                <p className='lg:text-2xl xl:text-2xl xl:leading-2'>" With BOG Partner program "</p>
                            </div>
                            <p className='lg:text-3xl lg:fw-700 text-center text-white'>you could get the right boost for your business to succeed.</p>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full h-full z-0 bg-bap lg:bg-100 z-0 bg-cover bg-blur'></div>
            </div>
            <div className='lg:w-6/12 bg-primary grid place-content-center py-10 lg:py-0'>
                <div className='w-10/12 mx-auto text-white'>
                    <p className='lg:text-3xl text-xl fw-600 lg:fw-700 lg:mb-10'>Partner with BOG to render services and product to customers worldwide.</p>
                    <div className='flex items-center fw-600 mt-5'>
                        <span className=' text-secondary text-xl'><BsFillCheckCircleFill/></span>
                        <p className='pl-2'>Sell building material to customers</p>
                    </div>
                    <div className='flex items-center fw-600 mt-5'>
                        <span className='text-secondary text-xl'><BsFillCheckCircleFill/></span>
                        <p className='pl-2'>Render services to individuals near you</p>
                    </div>
                    <div className='flex items-center fw-600 mt-5'>
                        <span className='text-secondary text-xl'><BsFillCheckCircleFill/></span>
                        <p className='pl-2'>Get paid instantly when you sell a product or render a services</p>
                    </div>
                    <div className='flex items-center fw-600 mt-5'>
                        <span className='text-secondary text-xl'><BsFillCheckCircleFill/></span>
                        <p className='pl-2'>Upload multiple products in shop</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='mt-24 lg:mt-0'>
                    <div className='text-center'>
                        <p className='fw-600 lg:text-3xl text-xl my-6'>What would you like to be doing this time tomorrow?</p>
                        <p className='fs-500 lg:fs-700'>With BOG fast application and service process, this time tomorrow you could have the customer base you need to set your business up for success. Whatever is next on your agenda, our flexible customer care representatives are there to support almost any business need.</p>
                    </div>
                    <div className='lg:flex justify-evenly lg:mt-24 mt-12'>
                        <div className='lg:w-4/12 lg:px-12 lg:py-20 p-7 shades radius-l bg-blue-100 text-black'>
                            <img src={require("../assets/images/hero1.png")} alt="partner" className="w-28 mx-auto"/>
                            <p className='text-center text-2xl fw-700'>BOG</p>
                            <p className='text-center fw-600 text-secondary'>Product Partner</p>
                            <p className='my-8 text-center fs-500 fw-500'>Sign-Up on BOG as a product partner and sell your building material to variety of customers nationwide.</p>
                            <div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-secondary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Sell building material to customers.</p>
                                </div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-secondary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Upload multiple products to the shop.</p>
                                </div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-secondary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Instant payment after customer purchase.</p>
                                </div>
                            </div>
                            <div className='text-center mt-10'>
                                <Link to="/login">
                                    <button className='btn bg-secondary text-white fw-600'>Get Started</button>
                                </Link>
                            </div>
                        </div>
                        <div className='lg:w-4/12 lg:px-12 lg:py-20 p-7 shades bg-orange-100  text-black radius-l mt-10 lg:mt-0'>
                            <img src={require("../assets/images/hero2.png")} alt="partner" className="w-28 mx-auto"/>
                            <p className='text-center text-2xl fw-700'>BOG</p>
                            <p className='text-center fw-600 text-primary'>Service Partner</p>
                            <p className='my-8 text-center fs-500 fw-500'>Sign-Up on BOG as a Service partner and render services (building, drawing, land survey...) to clients.</p>
                            <div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-primary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Render services to readily available clients.</p>
                                </div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-primary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Get up to three(3) service contracts at a go.</p>
                                </div>
                                <div className='flex items-center fw-600 mt-5'>
                                    <span className=' text-primary text-xl'><BsFillCheckCircleFill/></span>
                                    <p className='pl-2'>Progress payment is guaranteed.</p>
                                </div>
                            </div>
                            <div className='text-center mt-10'>
                                <Link to="/login">
                                    <button className='btn bg-primary text-white fw-600'>Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* promote app */}
        <div className="section">
            <div className="box">
                <div className="bg-app bg-cover lg:flex flex-row-reverse lg:h-96 items-center justify-center rounded-xl text-white px-6">
                    <div className="lg:w-6/12 lg:flex justify-end">
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670844720/BOG/Group_47497_xksedr.png" alt="app" className="relative left-8 lg:left-1/4" />
                    </div>
                    <div className="lg:w-5/12 xl:w-4/12 lg:py-10 relative -top-6 lg:top-0 lg:text-left text-center">
                        <p className="lg:text-4xl fw-600 text-lg">Let's Build On The Go</p>
                        <p className="fw-500 fs-500 pt-12">BOG is available on iOS, Andriod and Web.</p>
                        <p className="fw-500 fs-500 pt-2">Open an account today</p>
                        <div className="mt-6 lg:mt-12">
                            <Link to="/">
                                <button className="rounded-xl bg-secondary">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670844719/BOG/Frame_466445_v7lxvt.png" alt="appstore" className="w-24 lg:w-36" />
                                </button>
                            </Link>
                            <Link to="/">
                                <button className="rounded-xl bg-secondary ml-6">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670844719/BOG/Frame_466443_nlsg5u.png" alt="appstore" className="w-24 lg:w-36" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
