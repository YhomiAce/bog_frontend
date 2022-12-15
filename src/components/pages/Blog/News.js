import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cutText, stripHtml } from '../../../services/helper'

const News = ({item}) => {
    return (
        <div className="lg:w-45 shadow-md rounded-md">
            <div>
                <img src={item.images[0].image} alt="blog1" className="w-full h-52 rounded-t-md" />
            </div>
            <div className="px-3 lg:px-6 lg:py-8 py-4">
                <p className="fs-600 fw-600">{item.title} </p>
                <p className="my-3">{cutText(stripHtml(item.body), 100, '...')} </p>
                <Link to={`/blognews/${item.id}`}>
                    <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2">
                        <BsArrowRight /></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default News