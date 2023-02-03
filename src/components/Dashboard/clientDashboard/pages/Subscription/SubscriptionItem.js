import React from 'react'
import { GiCheckMark } from "react-icons/gi"
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { usePaystackPayment } from 'react-paystack'
import Swal from 'sweetalert2';
import { formatNumber } from '../../../../../services/helper';
import Axios from '../../../../../config/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../layouts/Spinner';

const SubscriptionItem = ({ item, user }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const config = {
        reference: "TR-" + new Date().getTime().toString(),
        email: `${user.email}`,
        amount: item.amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_0c79398dba746ce329d163885dd3fe5bc7e1f243',
    };

    const subscribeToPlan = async (reference) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const data = {
                userId: user.id,
                userType: user.userType,
                planId: item.id,
                reference
            }
            const response = await Axios.post('/subscription/subscribe', data, config);
            console.log(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    // you can call this function anything
    const onSuccess = (reference) => {
        try {
            setLoading(true)
            // Implementation for whatever you want to do with reference and after success call.
            console.log(reference);
            subscribeToPlan(reference.reference);

            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Congratulation, your subscription is successful",
                buttonsStyling: "false",
                confirmButtonText: 'Continue',
                confirmButtonColor: "#3F79AD",
            }).then(function () {
                navigate("/dashboard");
            });

        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Unable to Finish subscription. Please contact administrator"
            })
        }


    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);
    if (loading) {
        return <center>
            <Spinner />
        </center>
    }
    return (
        <div className='lg:w-3/12 w-11/12 mx-auto hover:scale-110 hover:bg-black hover:text-white transition duration-300 lg:p-10 p-6 rounded-md bg-white shades'>
            <div className='flex pb-5'>
                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670591820/BOG/basic-removebg-preview_aeltgx.png' alt="basic" className='w-16 bg-primary rounded-lg' />
                <div className='pl-3  fs-400 fw-600'>
                    <p>{item.name}</p>
                    <p className=''>{item.duration} weeks</p>
                    <p>&#8358;{formatNumber(item.amount)}</p>
                </div>
            </div>
            <div className='border-t py-4'>
                {
                    item.benefits.map(ben => (
                        <div className='flex items-center' key={ben.id}>
                            <GiCheckMark />
                            <p className='pl-1'>{ben.benefit}</p>
                        </div>
                    ))
                }


            </div>
            <div className='text-center'>
                <button className='flex items-center w-full btn-primary' onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}>Choose Plan <span className='pl-2'><BsArrowRightCircleFill /></span></button>
            </div>
        </div>
    )
}

export default SubscriptionItem