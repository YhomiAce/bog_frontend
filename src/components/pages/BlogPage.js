/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../config/config";
import useFetchHook from "../../hooks/useFetchHook";
import Spinner from "../layouts/Spinner";
import RelatedNews from "./Blog/RelatedNews";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function BlogPage() {
  const { blogId } = useParams();
  const { data: blog, loading } = useFetchHook(`/blog/find/${blogId}`);
  const [ posts, setPosts] = useState([]);
  const [ isLoading, setIsLoading] = useState([]);
  
  const fetchRelatedBlog = async () => {
    try {
        setIsLoading(true);
        const config = {
            headers: {
                "Content-Type": "Application/json",
                authorization: localStorage.getItem("auth_token"),
            },
        };
        const url =`/blog/get-category-blogs/${blog?.category[0].id}`;
        const res = await Axios.get(url,config);
        const data = res.data;
        const filteredPost = data.filter(where => where.id !== blogId).filter(where => where.isPublished);
        const postData = filteredPost.slice(0,2)
        console.log({postData});
        setPosts(postData);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
    }
}

  useEffect(() => {
    if(blog){
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
              <div className="lg:w-2/12 pr-4 hidden lg:block">
                <p className="fw-600 mt-12 bg-primary pl-2 text-white">Related News</p>
                
                {
                  !isLoading && posts.length > 0 ? posts.map(post => (
                    <RelatedNews key={post.id} item={post} />
                  )) : null
                }
              </div>
              <div className="lg:w-8/12 lg:px-10 ">
                <div>
                  <p className="fw-800 text-xl lg:text-3xl">
                    {blog?.title}
                  </p>
                  <div className="lg:flex my-5">
                    <p>BoG</p>
                    <p>@Admin | {dayjs(blog?.createdAt).format(" HH:mmA  DD MMM, YYYY")}</p>
                  </div>
                  <div>
                    <img
                      src={blog?.images[0].image}
                      alt="blog1"
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="mt-6 lg:mt-12">
                    <p>
                      {blog?.body}
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-2/12"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
