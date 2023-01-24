import { Breadcrumbs } from "@material-tailwind/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogPosts } from "../../../../redux/actions/PostAction";
import { FaBlogger } from "react-icons/fa";
import { BlogTable } from "../../assets/Tables/BlogTable";

export default function Blog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blogs = useSelector((state) => state.blog.posts);

    useEffect(() => {
        dispatch(getAllBlogPosts());
    }, [dispatch]);

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Blog Posts</p>
                        <p className="fs-400 text-gray-600 mt-2">Vew and manage all blog posts</p>
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
                                <span>Blog</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="text-end">
                        <button className="btn py-1 lg:py-2 mt-2 lg:mt-0 bg-blue-100 flex items-center shadow-lg" onClick={() => navigate("/dashboard/createpost")} ><FaBlogger className="text-xl"/><span className="pl-1 fw-500">Create Post</span></button>
                    </div>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                <div className="bg-white lg:p-5  rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>All Blog Posts</Tab>
                                <Tab>Published</Tab>
                                <Tab>Draft</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="">
                                    {
                                        blogs.length > 0 ? <BlogTable/> : <p className="mt-10 ml-4">No Blog Post Created</p>
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="">
                                    {
                                        blogs.length > 0 ? <BlogTable status={"published"}/> : <p className="mt-10 ml-4">No Blog Post Created</p>
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="">
                                    {
                                        blogs.length > 0 ? <BlogTable status={"draft"}/> : <p className="mt-10 ml-4">No Blog Post Created</p>
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>         
                </div>
            </div>
        </div>
        )
}