import { Breadcrumbs } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../../../config/config";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from "../../../layouts/Spinner";
import ReviewItem from "./Review/ReviewItem";
import { SuccessAlert } from "../../../../services/endpoint";

export default function Review() {

    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        try {
            setLoading(true);

            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            const res = await Axios.get('/testimony/testimonies', config);
            setLoading(false);
            if (res.success === true) {
                setReviews(res.data)
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

    const addReviewToHompage = async (id, isHomepage) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            const config = {
                    'Authorization': authToken
            }
            const res = await Axios.patch(`/testimony/homepage/${id}`, config);
            setLoading(false);
            if (res.success === true) {
                const index = reviews.findIndex(where => where.id === id);
                const oldReview = [...reviews];
                oldReview[index].isHomepage = !oldReview[index].isHomepage;
                setReviews(oldReview);
                if (!isHomepage) {
                    SuccessAlert("Review Added to hompage")
                }
                else {
                    SuccessAlert("Review Removed from homepage");
                }
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

    const removeReview = async (id) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            const res = await Axios.delete(`/testimony/delete/${id}`, config);
            setLoading(false);
            if (res.success === true) {
                const oldReview = [...reviews];
                const newReview = oldReview.filter(where => where.id !== id);
                setReviews(newReview);
                SuccessAlert("Review Deleted successfully")
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

    useEffect(() => {
        getReviews();
    }, []);

    if (loading) {
        return <center>
            <Spinner />
        </center>
    }
    console.log(reviews);


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex items-center justify-between">
                    <div className="">
                        <p className="text-2xl fw-600">Testimonials</p>
                        <p className="fs-400 text-gray-600 mt-2">Manage testimonials and reviews shown on the homepage.</p>
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
                    <div className="mt-4 text-end">
                        {/* <button className="border-pri text-primary fw-500 btn" onClick={() => setReviews(true)}>Add New Review</button> */}
                    </div>
                </div>
                {/* Reviews */}
                <div className="lg:p-5 px-2 py-4">
                    {reviews.map(item => (
                        <ReviewItem
                            key={item.id}
                            item={item}
                            addReviewToHompage={addReviewToHompage}
                            removeReview={removeReview}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}