import { Breadcrumbs } from '@material-tailwind/react'
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';
import Axios from '../../../../config/config';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import { SuccessAlert } from '../../../../services/endpoint';
import Spinner from '../../../layouts/Spinner';
import useFetchHook from '../../../../hooks/useFetchHook';

export const Testimonial = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [star, setStar] = useState(0);
    const { loading: isLoading, data: testimony } = useFetchHook("/testimony/find-user-testimony")

    const ratingChanged = (newRating) => {
        console.log(newRating)
        setStar(newRating)
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (message === "" || star === 0) {
                setLoading(false);
                toaster.notify(
                    "Please fill all field",
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
                return;
            }
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            const payload = {
                star,
                message
            }
            const res = await Axios.post('/testimony/create', payload, config);
            setLoading(false);
            if (res.success === true) {
                SuccessAlert("Review Done succssfully")
            }

        } catch (error) {
            setLoading(false);
            toaster.notify(
                error?.response?.data?.message || error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    if (isLoading) {
        return <center>
            <Spinner />
        </center>
    }

    return (
        <div>

            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Testimonials</p>
                        <p className="fs-400 text-gray-600 mt-2">Share your thoughts about this platform.</p>
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
                                <span>Testimonials</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                {/* testimonial contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className='lg:w-9/12 xl:w-7/12 lg:p-5 p-3 py-7 mx-auto bg-white rounded-lg'>
                        <form>
                            {/* <div>
                            <p>Name</p>
                            <input type="text" className='py-2 rounded mt-2 border border-gray-400 px-2 w-full' />
                        </div> */}
                            <div className='mt-6'>
                                <p>Testimonial</p>
                                <textarea
                                    className='h-24 p-2 w-full rounded mt-2 border border-gray-400 '
                                    onChange={(e) => setMessage(e.target.value)}
                                    name={message}
                                    readOnly={testimony !== null ? true : false}
                                >
                                    {testimony?.message || message}
                                </textarea>
                            </div>
                            <div className='mt-6'>
                                <p>Leave a rating</p>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={55}
                                    color2={'#ffd700'}
                                    value={testimony?.star || star}
                                />
                            </div>
                            {
                                testimony !== null ?
                                    null :
                                    <>
                                        {
                                            loading ? <Spinner /> :
                                                <div className='mt-6'>
                                                    <button
                                                        type='button'
                                                        className='btn-primary w-full'
                                                        onClick={handleSubmit}
                                                    >Submit</button>
                                                </div>
                                        }

                                    </>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
