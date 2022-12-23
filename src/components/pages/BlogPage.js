/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Axios from "../../config/config";
import useFetchHook from "../../hooks/useFetchHook";
import Spinner from "../layouts/Spinner";
import RelatedNews from "./Blog/RelatedNews";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
const year = d.getFullYear()
const monthName = months[d.getMonth()]
const dayName = days[d.getDay()] // Thu


export default function BlogPage() {
  const { blogId } = useParams();
  const { data: blog, loading } = useFetchHook(`/blog/find/${blogId}`);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchRelatedBlog = async () => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "Application/json",
          authorization: localStorage.getItem("auth_token"),
        },
      };
      const url = `/blog/get-category-blogs/${blog?.category[0].id}`;
      const res = await Axios.get(url, config);
      const data = res.data;
      const filteredPost = data.filter(where => where.id !== blogId).filter(where => where.isPublished);
      const postData = filteredPost.slice(0, 2)
      console.log({ postData });
      setPosts(postData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (blog) {
      fetchRelatedBlog();
    }
  }, [blog]);

  if (loading || !blog) {
    return <center>
      <Spinner />
    </center>
  }


  return (
    <div>
      <div className="font-primary">
        <Header />
        <div className="section">
          <div className="box">
            <div className="lg:flex lg:mt-5">
              <div className="lg:w-2/12 bg-light hidden lg:block">
                <p className="fw-600 bg-primary py-2 pl-2 text-white">Related News</p>

                {
                  !isLoading && posts.length > 0 ? posts.map(post => (
                    <RelatedNews key={post.id} item={post} />
                  )) : null
                }
              </div>
              <div className="lg:w-8/12 lg:px-10">
                <div>
                  <p className="fw-800 text-xl lg:text-3xl">
                    {blog?.title}
                  </p>
                  <div className="lg:flex my-5">
                    <p>BoG</p>
                    <p>@Admin | {dayjs(blog?.createdAt).format(" HH:mmA  DD MMM, YYYY")}</p>
                  </div>
                  <div>
                    {
                      blog?.images.length > 0 ?
                        <img
                          src={blog?.images[0].image}
                          alt="blog1"
                          className="w-full rounded-md ar-32"
                        /> : null
                    }

                  </div>
                  <div className="mt-6 lg:mt-12">
                    <p>
                      {blog?.body}
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-2/12 bg-light px-4 py-12">
                <div className=" bg-white w-24 py-3 text-center shadow-lg rounded-lg mx-auto mb-12">
                    <p className="fw-600 text-primary">{dayName}</p>
                    <p className="text-3xl fw-600 text-secondary">{new Date().getDay()}</p>
                    <div className="flex justify-center fs-500 fw-500">
                      <p>{monthName}</p>
                      <p>-{year}</p>
                    </div>
                </div>
                <div>
                  <p className="fw-600">Socials</p>
                  <ul className="mt-6 fw-500 fs-500">
                    <li className="flex items-center"><span className="text-xl pr-2 text-blue-500"><FaFacebook/></span> Facebook</li>
                    <li className="flex items-center mt-3"><span className="text-xl pr-2 text-blue-800"><FaTwitter/></span> Twitter</li>
                    <li className="flex items-center mt-3"><span className="text-xl pr-2 text-orange-800"><FaInstagram/></span> Instagram</li>
                    <li className="flex items-center mt-3"><span className="text-xl pr-2"><FaTiktok/></span> Tiktok</li>
                  </ul>
                </div>
                <div className="mt-12">
                  <p className="fw-600">Category</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
