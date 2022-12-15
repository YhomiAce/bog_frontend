import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const ViewBlog = () => {
  return (
    <div>
        <div  className="min-h-screen fs-500 relative">
            {/* header */}
            <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                <div>
                    <p className="text-2xl fw-600">View Post</p>
                    <p className="fs-400 text-gray-600 mt-2">Preview and share post with viewers</p>
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
                        <Link to="/dashboard/blog" className="opacity-60">
                            <span>Blog</span>
                        </Link>
                        <Link to="" className="">
                            <span>View Post</span>
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            {/* content */}
            <div className="lg:p-5 px-3 py-5">
                <div className='bg-white lg:p-6 py-10 rounded'>
                    <div className='w-9/12 mx-auto'>
                        <p className="fw-800 text-xl lg:text-3xl">
                            6 Ways to Improve Machine Operators’ Safety on Construction{" "}
                        </p>
                        <div className="lg:flex my-5">
                            <p>Green Mouse</p>
                            <p>@greenmouse | 10:45 PM March 8,2023</p>
                        </div>
                        <div>
                            <img
                            src={require("../../../../assets/images/blog2.png")}
                            alt="blog1"
                            className="w-full rounded-md"
                            />
                        </div>
                        <div className="mt-6 lg:mt-12">
                            <p>
                            Irure consequat consequat id quis do. Cupidatat deserunt
                            voluptate minim commodo eu pariatur nostrud proident.
                            Irure labore veniam in consectetur. Laborum elit proident
                            sunt exercitation consectetur elit sint fugiat
                            exercitation eu sunt officia magna officia. Non quis
                            pariatur anim occaecat laboris. Lorem consequat qui
                            adipisicing proident esse. Proident et officia sit id
                            dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                            ipsum ea aute officia ut fugiat non veniam reprehenderit
                            sit fugiat nulla culpa minim. Anim adipisicing pariatur
                            tempor nisi occaecat ipsum reprehenderit commodo enim
                            culpa ea irure.
                            </p>
                            <p className="mt-5">
                            Irure consequat consequat id quis do. Cupidatat deserunt
                            voluptate minim commodo eu pariatur nostrud proident.
                            Irure labore veniam in consectetur. Laborum elit proident
                            sunt exercitation consectetur elit sint fugiat
                            exercitation eu sunt officia magna officia. Non quis
                            pariatur anim occaecat laboris. Lorem consequat qui
                            adipisicing proident esse. Proident et officia sit id
                            dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                            ipsum ea aute officia ut fugiat non veniam reprehenderit
                            sit fugiat nulla culpa minim. Anim adipisicing pariatur
                            tempor nisi occaecat ipsum reprehenderit commodo enim
                            culpa ea irure.
                            </p>
                            <p className="mt-5">
                            Irure consequat consequat id quis do. Cupidatat deserunt
                            voluptate minim commodo eu pariatur nostrud proident.
                            Irure labore veniam in consectetur. Laborum elit proident
                            sunt exercitation consectetur elit sint fugiat
                            exercitation eu sunt officia magna officia. Non quis
                            pariatur anim occaecat laboris. Lorem consequat qui
                            adipisicing proident esse. Proident et officia sit id
                            dolor id culpa voluptate ullamco est aliquip eiusmod. Sit
                            ipsum ea aute officia ut fugiat non veniam reprehenderit
                            sit fugiat nulla culpa minim. Anim adipisicing pariatur
                            tempor nisi occaecat ipsum reprehenderit commodo enim
                            culpa ea irure.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <p className='fw-600'>Category:</p>
                            <div className='flex mt-4'>
                                <p className='mx-4 px-4 py-1 bg-gray-100 rounded-md'>Education</p>
                                <p className='mx-4 px-4 py-1 bg-gray-100 rounded-md'>Building</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
