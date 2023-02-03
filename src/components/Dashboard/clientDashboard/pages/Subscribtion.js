import { Breadcrumbs, Button } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsInfoCircleFill } from 'react-icons/bs'
import { useState } from 'react'
import { getAllSubscriptionPlans } from '../../../../redux/actions/SubscriptionAction'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../layouts/Spinner'
import SubscriptionItem from './Subscription/SubscriptionItem'

export function Subscription() {
    const { isLoading, plans } = useSelector(state => state.subscription);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [getKyc, setGetKyc] = useState(false);

    useEffect(() => {
        if (user) {
            if(!user.profile.isVerified){
                setGetKyc(true)
            }
            dispatch(getAllSubscriptionPlans());
        }
    }, [dispatch, user])

    const CloseModal = () => {
        setGetKyc(false)
    }


    if (isLoading) {
        return <center>
            <Spinner />
        </center>
    }
    console.log({ plans, user });


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
                    {
                        plans.length > 0 && user  ?
                            <div className='bg-white '>
                                <div className='text-center pt-6 lg:pt-12'>
                                    <p className='text-2xl fw-600'><span className='text-primary'>Flexible </span>Plans</p>
                                    <p className='mt-3 text-gray-600 lg:w-96 mx-auto'>Choose a plan that works best for you and your team.</p>
                                </div>
                                <div className='lg:grid-3s items-center gap-y-8 justify-evenly py-12 lg:pb-24'>
                                    {
                                        plans.map(item => (
                                            <SubscriptionItem key={item.id} item={item} user={user} />
                                        ))
                                    }

                                </div>
                            </div> : null
                    }
                </div>
            </div>
            {
                getKyc && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                        <div className="bg-white lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <div className='flex justify-between px-4 py-6'>
                                <p className="lg:fs-700 fw-500 flex">
                                    <span className='block mt-1 mr-2 text-secondary'>
                                        <BsInfoCircleFill />
                                    </span>
                                    <span>
                                        Please note that you are to complete and submit your KYC form before proceeding with your choiced subscription.
                                    </span>
                                </p>
                            </div>
                            <div className='mt-4 px-4 py-4 bg-light text-end'>
                                <Button className='bg-secondary' onClick={() => { navigate('/dashboard/kyc') }} >Goto KYC</Button>
                                {/* <Button className='bg-primary ml-4' onClick={CloseModal}>Continue</Button> */}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
