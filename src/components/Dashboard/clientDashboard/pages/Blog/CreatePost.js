import { Breadcrumbs } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogCategories, createBlogPost } from '../../../../../redux/actions/PostAction';
import { useFormik } from 'formik';
import { postSchema } from "../../../../../services/validation";
import MultiSelectableItem from "../../../../widgets/MultiSelectItem";
import Spinner from "../../../../layouts/Spinner";

export default function BlogPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.blog.categories);
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [photos, setPhotos] = useState([]);
    const [categorys, setCategorys] = useState([]);

    const handlePhotoChange = (e) => {
        setPhotos(Array.from(e.target.files));
    }

    const handleComment = e => setComment(e.target.value)

    const stopLoading = () => setLoading(false);

    useEffect(() => {
        dispatch(getAllBlogCategories());
    }, [dispatch]);

    const submitHandler = (value, action) => {
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
        fd.append("title", value.title);
        fd.append("body", value.description);
        fd.append("status", "draft");
        fd.append("isCommentable", isCommentable);
        dispatch(createBlogPost(fd, stopLoading, navigate));
        action.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        onSubmit: submitHandler,
        validationSchema: postSchema
    });
    const { title, description } = formik.values;
    const options = categories.length > 0 ? categories.map(category => {
        return {
            label: `${category.name}`,
            value: category.id
        }
    }) : [];

    const handleCategoryChange = (val) => {
        const selectVals = val;
        console.log({ selectVals });
        setCategorys(selectVals);
    };


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Create Post</p>
                        <p className="fs-400 text-gray-600 mt-2">Create and share post with viewers</p>
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
                                <span>Create Post</span>
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.title && formik.errors.title ? <p className='text-red-500'>{formik.errors.title}</p> : null
                                }
                            </div>
                            {/* blog post*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white mt-6">
                                <p className="fw-600 lg:text-lg mb-3">Blog Post</p>
                                <textarea
                                    placeholder="Type your post here"
                                    className="lg:h-56 h-28 w-full border border-gray-400 rounded-md px-2 py-4"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </textarea>
                                {
                                    formik.touched.description && formik.errors.description ? <p className='text-red-500'>{formik.errors.description}</p> : null
                                }
                            </div>
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Photo(s)</p>
                                <div className="lg:flex mt-4">
                                    <div className="w-4/12 lg:w-3/12 border py-8 rounded-lg">
                                        <input
                                            type="file"
                                            className="w-10/12 ml-2 text-sm"
                                            name='photos'
                                            multiple
                                            onChange={handlePhotoChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* blog post category*/}
                            <div className="lg:p-6 p-3 pb-4 mt-6 lg:mt-0 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Category</p>
                                <div className="mt-4">
                                    <MultiSelectableItem options={options} handleChange={handleCategoryChange} />
                                   
                                </div>
                            </div>
                            {/* blog post category*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Comments</p>
                                <div className="mt-4">
                                    <div className="flex">
                                        <input type="radio" name="comments" value="enable" onChange={handleComment} />
                                        <p className="pl-2">Enable Comments</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="radio" name="comments" value="disable" onChange={handleComment} />
                                        <p className="pl-2">Disable Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t py-6 border-gray-400 text-end">
                        {/* <button className="lg:px-8 px-4 fw-500 py-2 border-pri text-primary mr-6 rounded-lg">Save To Draft</button> */}
                        {
                            loading ? <Spinner /> :
                                <button
                                    className="lg:px-8 px-4 fw-500 py-2 bg-primary text-white rounded-lg"
                                    type="button"
                                    onClick={formik.handleSubmit}
                                >Create Post</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}