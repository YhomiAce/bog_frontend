import { Breadcrumbs } from '@material-tailwind/react'
import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Calculator } from './Smartcalc/Calculator'

export const SmartCalc = () => {

    const [usage, setUsage] = useState(false)
    function CloseDelete() {
        setUsage(false)
    }

  return (
    <div className='min-h-screen fs-500'>
        <div className="w-full py-6 bg-white px-4 lg:flex items-center justify-between">
            <div className="">
                <p className="text-2xl fw-600"> Smart Calculator</p>
                <p className="fs-400 text-gray-600 mt-2">Calculate and get the estimate in naira to start and complete your building(s).</p>
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
                        <span>Smart Calc</span>
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="mt-4 text-end">
                {/* <button className="border-pri text-primary fw-500 btn" onClick={() => setReviews(true)}>Add New Review</button> */}
            </div>
        </div>
        <div className='lg:p-5 px-3'>
            <div className='shadow-lg lg:w-11/12 mt-6 lg:mt-0 lg:flex items-center mx-auto p-5 text-white bg-calc bg-cover bg-center rounded-lg'>
                <div className='lg:w-5/12'>
                    <p className='flex items-center'><span className='text-xl lg:text-2xl fw-700 text-secondary'>BOG</span> <span className='fw-600 text-lg lg:text-xl pl-2'>Smart</span><span className='fw-600 text-lg lg:text-xl pl-1'>Calculator</span></p>
                    <p className='fs-400 fw-500 mt-3 lg:pr-8'>Sometimes, we wonder how much it will cost to get our desired buildings. That's why we created a cost calculator that is responsive and easy to use while providing an estimated cost for your input.</p>
                    <p className='mt-3 underline text-white fw-600 cursor-pointer' onClick={() => {setUsage(!usage)}}>How to use</p>
                </div>
                <div className='lg:w-7/12 flex justify-between mt-6 lg:mt-0 text-black'>
                    <div className='w-24 lg:w-28 h-24 lg:h-28 fs-300 lg:fs-500 circle bg-blue-200 grid place-content-center hover:scale-110 duration-500 shadow-lg'>
                        <div className=''>
                            <p className='text-center fw-600 p-4 mt-1'>Estimated Cost</p>
                        </div>
                    </div>
                    <div className='w-24 lg:w-28 h-24 lg:h-28 fs-300 lg:fs-500 circle bg-purple-100 grid place-content-center hover:scale-110 duration-500 shadow-lg'>
                        <div className=''>
                            <p className='text-center fw-600 p-4'>Price Breakdown</p>
                        </div>
                    </div>
                    <div className='w-24 lg:w-28 h-24 lg:h-28 fs-300 lg:fs-500 circle bg-green-200 grid place-content-center hover:scale-110 duration-500  shadow-lg'>
                        <div className=''>
                            <p className='text-center fw-600 p-4'>Percentage Cost</p>
                        </div>
                    </div>
                    <div className='w-24 lg:w-28 h-24 hidden lg:h-28 fs-300 lg:fs-500 circle bg-red-200 md:grid place-content-center hover:scale-110 duration-500 shadow-lg'>
                        <div className=''>
                            <p className='text-center fw-600 p-4'>Rates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Calculator/>
            </div>
        </div>
        {
            usage && (
                <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                    <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div>
                            <p className='lg:text-xl fw-600'>How to Use a Smart Calculator</p>
                        </div>
                        <div></div>
                        <FaTimes className='absolute top-6 right-8 cursor-pointer' onClick={CloseDelete}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}
