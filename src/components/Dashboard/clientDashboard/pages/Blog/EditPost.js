/* eslint-disable react-hooks/exhaustive-deps */
import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogCategories, updateBlogPost } from '../../../../../redux/actions/PostAction';
import MultiSelectableItem from "../../../../widgets/MultiSelectItem";
import Spinner from "../../../../layouts/Spinner";
import Axios from "../../../../../config/config";
import PostImageItem from "./PostImageItem";
import { capitalizeFirstLetter } from "../../../../../services/helper";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export default function EditPost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [blog, setBlog] = useState(null);
    const [categorys, setCategorys] = useState([]);
    const [defaultData, setDefaultData] = useState([]);
    const [photos, setPhotos] = useState([]);
    const categories = useSelector((state) => state.blog.categories);
    const { postId } = useParams();
    const [postData, setPostData] = useState({
        title: "",
        body: ""
    });
    const { title, body } = postData;

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            const res = await Axios.get(`/blog/find/${postId}`, config);
            const data = res.data;
            const category = data.category.map(cat => {
                return {
                    label: `${cat.name}`,
                    value: cat.id
                }
            });
            console.log({ category });
            setDefaultData(category);
            setPostData({
                title: data.title,
                body: data.body,
            });
            setComment(data.isCommentable ? "enable" : "disable")
            setBlog(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
        dispatch(getAllBlogCategories());
    }, []);

    const options = categories.length > 0 ? categories.map(category => {
        return {
            label: `${category.name}`,
            value: category.id
        }
    }) : [];

    const handleCategoryChange = (val) => {
        const selectVals = val;
        setCategorys(selectVals);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value })

    };

    const handleComment = e => setComment(e.target.value)

    const stopLoading = () => setLoading(false);

    const handlePhotoChange = (e) => {
        setPhotos(Array.from(e.target.files));
    }

    const submitHandler = () => {
        setLoading(true);
        const category = categorys.map(cat => cat.value);
        const isCommentable = comment === "enable" ? true : false
        const fd = new FormData();
        for (let i = 0; i < photos.length; i++) {
            fd.append(`photos[]`, photos[i]);
        }
        for (let i = 0; i < category.length; i++) {
            fd.append(`categoryIds`, category[i]);
        }
        fd.append("blogId", postId);
        fd.append("title", title);
        fd.append("body", body);
        fd.append("isCommentable", isCommentable);
        dispatch(updateBlogPost(fd, stopLoading, navigate));
    }

    const publishBlogPost = async (status) => {
        try {
            setLoading(true);
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            const url = "/blog/publish-post";
            const payload = {
                blogId: postId,
                status: status ? "published" : "review",
                isPublished: status
            }
            console.log(payload);
            const res = await Axios.patch(url, payload, config);
            if (res.success === true) {
                Swal.fire({
                    title: "Blog Post Published",
                    text: "Blog Post Published successfully",
                    icon: "success"
                }).then(() => {
                    navigate("/dashboard/blog");
                })
            }
        } catch (error) {
            setLoading(false);
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    if (loading || !blog) {
        return (
            <center>
                <Spinner />
            </center>
        )
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Edit Post</p>
                        <p className="fs-400 text-gray-600 mt-2">Edit and share post with viewers</p>
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
                            <Link to="" className="opacity-60">
                                <span>Blog</span>
                            </Link>
                            <Link to="" className="">
                                <span>Edit Post</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    <div className="lg:grid-83 mb-8">
                        <div>
                            {/* blog post tittle */}
                            <div className="lg:p-6 p-3 pb-4 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg mb-3">Blog Post Title</p>
                                <input
                                    type="text"
                                    placeholder="Enter the blog tittle"
                                    className="w-full px-3 rounded-md py-2 border border-gray-400"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* blog post*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white mt-6">
                                <p className="fw-600 lg:text-lg mb-3">Blog Post</p>
                                <textarea
                                    placeholder="Type your post here"
                                    className="lg:h-56 h-28 w-full border border-gray-400 rounded-md px-2 py-4"
                                    id="body"
                                    name="body"
                                    value={body}
                                    onChange={handleInputChange}
                                >
                                </textarea>
                            </div>
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Photo(s)</p>
                                <div className="flex mt-4">
                                    <div className="lg:w-3/12 w-4/12 border py-8 rounded-lg">
                                        <input
                                            type="file"
                                            className="w-10/12 ml-2 text-sm"
                                            name='photos'
                                            multiple
                                            onChange={handlePhotoChange}
                                        />
                                    </div>
                                    {
                                        blog?.images.length > 0 ? blog?.images.map(img => (
                                            <PostImageItem key={img.id} item={img} />
                                        )) : null
                                    }

                                </div>
                            </div>
                        </div>
                        <div>
                            {/* blog post category*/}
                            <div className="lg:p-6 mt-6 lg:mt-0 p-3 pb-4 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Comments</p>
                                <div className="mt-4 fs-500">
                                    <div className="flex">
                                        <p className="text-gray-500">Status :</p>
                                        <p className="ml-2">{capitalizeFirstLetter(blog.status)}</p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="text-gray-500">Comments :</p>
                                        <p className="ml-2">none</p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="text-gray-500">Published :</p>
                                        <p className="ml-2"> {dayjs(blog.createdAt).format("DD-MMMM-YYYY")}</p>
                                    </div>
                                </div>
                            </div>
                            {/* blog post category*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white mt-6">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Category</p>
                                <div className="mt-4">
                                    <MultiSelectableItem
                                        options={options}
                                        handleChange={handleCategoryChange}
                                        default={defaultData} />
                                </div>
                            </div>
                            {/* blog post comments*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Comments</p>
                                <div className="mt-4">
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            name="comments"
                                            value="enable"
                                            onChange={handleComment}
                                            checked={comment === "enable" ? true : false}
                                        />
                                        <p className="pl-2">Enable Comments</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            type="radio"
                                            name="comments"
                                            value="disable"
                                            onChange={handleComment}
                                            checked={!comment === "disable" ? true : false}
                                        />
                                        <p className="pl-2">Disable Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t py-6 border-gray-400 text-end">
                        {
                            loading ? <Spinner /> :
                                <button
                                    className="lg:px-8 px-4 fw-500 py-2 border-pri text-primary mr-6 rounded-lg"
                                    onClick={() => publishBlogPost(blog.isPublished ? false : true)}
                                >{blog.isPublished ? "Unpublish Blog" : "Publish Blog"} </button>
                        }
                        {
                            loading ? <Spinner /> :
                                <button
                                    className="lg:px-8 px-4 fw-500 py-2 bg-primary text-white rounded-lg"
                                    type="button"
                                    onClick={submitHandler}
                                >Update Blog</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}