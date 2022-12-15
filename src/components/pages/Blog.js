import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLocationArrow } from "react-icons/fa";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogPosts, getAllBlogCategories } from "../../redux/actions/PostAction";
import NewsCategory from "./Blog/NewsCategory";
import News from "./Blog/News";
import { cutText, stripHtml } from "../../services/helper";
import Spinner from "../layouts/Spinner";
import dayjs from "dayjs";

export default function Blog() {
    const dispatch = useDispatch();

    const { posts, categories, isLoading } = useSelector((state) => state.blog);
    const recentPost = posts.filter(where => where.isPublished)
    const recent = recentPost.length > 0 ? recentPost[0] : null

    useEffect(() => {
        dispatch(getAllBlogPosts());
        dispatch(getAllBlogCategories());
    }, [dispatch]);

    if (isLoading) {
        return <center>
            <Spinner />
        </center>
    }

    return (
        <div>
            <div className="font-primary">
                <Header />
                <div className="bg-blog bg-cover bg-center text-white lg:h-80 h-52 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-2">Our Blog</p>
                            <p className="lg:w-5/12">The BOG Blog is your source for trends, deep dives, analyses, talent resources, and more in the industry </p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex fs-500 mb-16">
                            <div className="lg:w-9/12 lg:pr-8 lg:border-r-2">
                                <div>
                                    <p className="lg:text-2xl text-lg fw-600 mb-8 ">Latest News</p>
                                    {
                                        recent &&
                                        <div className="lg:flex">
                                            <div className="lg:w-5/12">
                                                <img src={recent?.images[0].image} alt="blog1" className="w-full rounded-md" />
                                            </div>
                                            <div className="lg:w-7/12 px-5">
                                                <p className="text-xs text-gray-500 mt-6 lg:mt-0"> {dayjs(recent?.createdAt).format("DD-MMMM-YYYY")}</p>
                                                <p className="fs-600 lg:text-lg fw-600 py-3">{recent?.title}</p>
                                                <p>{cutText(stripHtml(recent?.body), 100, '...')}</p>
                                                <Link to={`/blognews/${recent?.id}`}><p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2"><BsArrowRight /></span></p></Link>
                                            </div>
                                        </div>
                                    }

                                </div>
                                <div className="mt-16 lg:mt-24 ">
                                    <p className="lg:text-2xl text-lg fw-600 mb-8 ">All News</p>
                                    <div className="lg:flex justify-between">
                                        {
                                            posts.length > 0 ? posts.filter(where => where.isPublished).map(post => (
                                                <News key={post.id} item={post} />
                                            )) : null
                                        }

                                    </div>

                                </div>
                            </div>
                            <div className="hidden lg:block w-3/12 pl-8">
                                <div class=" relative mx-auto text-gray-600 hidden lg:block">
                                    <input class="border-2 border-gray-300 bg-white h-10 px-6 pr-16 rounded text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Search Blog Post" />
                                    <button type="submit" class="absolute bg-tertiary right-0 top-0 py-2 px-4 rounded-r">
                                        <FontAwesomeIcon icon={faSearch} className="text-white" />
                                    </button>
                                </div>
                                <div className="mt-10 py-8 px-4 bg-tertiary text-white rounded-lg">
                                    <p className="fs-500 fw-600">Never Miss A Thing </p>
                                    <p className="fs-400 mt-1">Subscribe for more content</p>
                                    <div className="flex border border-black rounded mt-7 text-xs">
                                        <input type="text" placeholder="Enter your email" className="w-10/12 px-2 text-black border-0 rounded-l" />
                                        <div className="bg-secondary w-2/12 pl-3 py-1 rounded-r">
                                            <FaLocationArrow className="lg:text-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <p className="fs-700 fw-600">CATEGORIES</p>
                                    {
                                        categories.length > 0 ? categories.map(category => (
                                            <NewsCategory key={category.id} item={category} />
                                        )) : null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}