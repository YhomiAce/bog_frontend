import React from 'react'
import Footer from './home-comp/Footer'
import Header from './home-comp/Header'

export const OrderSuccess = () => {
  return (
    <div>
        <div className='font-primary'>
            <Header/> 
            <div className='section'>
                <div className='box'>
                    <div className='flex justify-center items-center'>
                        <div className='text-center lg:w-8/12'>
                            <img src='https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg' alt='success' className='w-28 mx-auto circle' />
                            <p className='text-2xl fw-600 mt-5'>Thank you for your order</p>
                            <p className='mt-3 fs-500'>The order confimation email with details of your order and a link to track the progress has been sent to your email address.</p>
                            <p className='mt-3 fw-500'>Your Order-ID is ORD-2345-4583 - Pending</p>
                            <p className='mt-3 fs-500'>Order Date - {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className='grid-3 mt-10'>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div> 
  )
}
