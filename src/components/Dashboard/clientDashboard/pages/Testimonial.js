import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export const Testimonial = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

  return (
    <div>
        
        <div className="min-h-screen fs-500 relative">
            <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                <div>
                    <p className="text-2xl fw-600">Testimonials</p>
                    <p className="fs-400 text-gray-600 mt-2">Share your thoughts about this platform.</p>
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
            </div>  
            {/* testimonial contents */}
            <div className="lg:p-5 px-2 py-4">
                <div className='lg:w-9/12 xl:w-7/12 lg:p-5 p-3 py-7 mx-auto bg-white rounded-lg'>
                    <form>
                        <div>
                            <p>Name</p>
                            <input type="text" className='py-2 rounded mt-2 border border-gray-400 px-2 w-full' />
                        </div>
                        <div className='mt-6'>
                            <p>Testimonial</p>
                            <textarea className='h-24 p-2 w-full rounded mt-2 border border-gray-400 '></textarea>
                        </div>
                        <div className='mt-6'>
                            <p>Leave a rating</p>
                            <ReactStars 
                            count={5}
                            onChange={ratingChanged}
                            size={55}
                            color2={'#ffd700'}/>
                        </div>
                        <div className='mt-6'>
                            <button className='btn-primary w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
