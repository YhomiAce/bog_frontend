import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumbs } from "@material-tailwind/react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogPosts } from "../../../../redux/actions/PostAction";
import BlogItem from "./Blog/BlogItem";
import { FaBlogger } from "react-icons/fa";

export default function Blog() {
    const dispatch = useDispatch();
    const blog = useRef(null);
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
                                <div className="mt-10">
                                    <div className="flex items-center">
                                        <div class="flex text-gray-600">
                                            <input
                                            className="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-5 rounded-l-lg text-sm focus:outline-none"
                                            type="search"
                                            name="search order by name"
                                            placeholder="Search"
                                            />
                                            <button
                                            type="submit"
                                            className=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                            >
                                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                                            </button>
                                        </div>
                                        <DownloadTableExcel
                                            filename="All product partners"
                                            sheet="users"
                                            currentTableRef={blog.current}
                                        >
                                            <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary"/> </button>
                                        </DownloadTableExcel>
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <table className="items-center w-full bg-transparent border-collapse" ref={blog}>
                                        <tbody>
                                            <tr className="thead-light bg-light">
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Blog Tittle
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                            
                                            {
                                                blogs.length > 0 ? blogs.map((blog, index) => (
                                                    <BlogItem key={blog.id} item={blog} sn={index} />
                                                )) : <p>No Blog Post Created</p>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10">
                                    <div className="flex items-center">
                                        <div class="flex text-gray-600">
                                            <input
                                            className="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-5 rounded-l-lg text-sm focus:outline-none"
                                            type="search"
                                            name="search order by name"
                                            placeholder="Search"
                                            />
                                            <button
                                            type="submit"
                                            className=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                            >
                                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                                            </button>
                                        </div>
                                        <DownloadTableExcel
                                            filename="All product partners"
                                            sheet="users"
                                            currentTableRef={blog.current}
                                        >
                                            <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary"/> </button>
                                        </DownloadTableExcel>
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <table className="items-center w-full bg-transparent border-collapse" ref={blog}>
                                        <tbody>
                                            <tr className="thead-light bg-light">
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Blog Tittle
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                            {
                                                blogs.length > 0 ? blogs.filter(where => where.isPublished).map((blog, index) => (
                                                    <BlogItem key={blog.id} item={blog} sn={index} />
                                                )) : <p>No Blog Post Created</p>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10">
                                    <div className="flex items-center">
                                        <div class="flex text-gray-600">
                                            <input
                                            className="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-5 rounded-l-lg text-sm focus:outline-none"
                                            type="search"
                                            name="search order by name"
                                            placeholder="Search"
                                            />
                                            <button
                                            type="submit"
                                            className=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                            >
                                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                                            </button>
                                        </div>
                                        <DownloadTableExcel
                                            filename="All product partners"
                                            sheet="users"
                                            currentTableRef={blog.current}
                                        >
                                            <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary"/> </button>
                                        </DownloadTableExcel>
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <table className="items-center w-full bg-transparent border-collapse" ref={blog}>
                                        <tbody>
                                            <tr className="thead-light bg-light">
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Blog Tittle
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                            {
                                                blogs.length > 0 ? blogs.filter(where => where.status === "draft").map((blog, index) => (
                                                    <BlogItem key={blog.id} item={blog} sn={index} />
                                                )) : <p>No Blog Post Created</p>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>         
                </div>
            </div>
        </div>
        )
}