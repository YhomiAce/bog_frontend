import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Axios from '../../../../../config/config';
import { SuccessAlert } from '../../../../../services/endpoint';
import Spinner from '../../../../layouts/Spinner';

export const OrderReview = ({ review, productId }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [star, setStar] = useState(0);

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
                review: message,
                productId
            }
            const res = await Axios.post('/review/product/create-review', payload, config);
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

    return (
        <div>
            <form>
                <div>
                    <textarea
                        className='h-24 p-2 w-full rounded mt-2 border border-gray-400 '
                        onChange={(e) => setMessage(e.target.value)}
                        name={message}
                        readOnly={review !== null ? true : false}
                    >
                        {review?.review || message}
                    </textarea>
                </div>
                <div className='mt-6'>
                    <p>Leave a rating</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={45}
                        color2={'#ffd700'}
                        value={review?.star || star}
                    />
                </div>
                <div className='mt-6'>
                    {
                        review !== null ?
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
                </div>
            </form>
        </div>
    )
}
