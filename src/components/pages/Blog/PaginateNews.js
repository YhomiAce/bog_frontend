import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BsArrowRight } from 'react-icons/bs'
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { cutText, stripHtml } from '../../../services/helper'
import {  useSelector } from "react-redux";



function News({ currentItems }) {

  return (
    <div className='lg:grid-2s justify-between'>
      {currentItems &&
        currentItems?.map((item) => (
            <div className="lg:w-full shadow-md rounded-md  mt-6 lg:mt-10">
                <div>
                    {
                        item?.images.length > 0 ?
                        <img src={item?.images[0].image} alt="blog1" className="w-full h-52 rounded-t-md" />
                            : null
                    }
                    
                </div>
                <div className="px-3 lg:px-6 lg:py-8 py-4">
                    <p className="fs-600 fw-600">{item?.title} </p>
                    <p className="my-3">{cutText(stripHtml(item?.body), 100, '...')} </p>
                    <Link to={`/blognews/${item?.id}`}>
                        <p className="fs-400 flex items-center text-primary mt-4">Read More <span className="pl-2">
                            <BsArrowRight /></span>
                        </p>
                    </Link>
                </div>
            </div>
        ))}
    </div>
  );
}

export function BlogItems({ itemsPerPage }) {

    const post = useSelector((state) => state.blog.posts);
    const posts =  post.filter(where => where.isPublished)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <News currentItems={currentItems} />
      <ReactPaginate
        breakLabel={<p>break</p>}
        nextLabel={<p className='ml-2'><IoArrowForwardCircleSharp className='text-3xl text-secondary'/></p>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<p className='mr-2'><IoArrowBackCircleSharp className='text-3xl text-secondary'/></p>}
        renderOnZeroPageCount={null}
        className="flex justify-end items-center mt-12 bg-light w-full fs-600 lg:py-2 lg:px-5 rounded-lg"
        pageClassName="w-9 h-9 grid place-content-center border border-gray-400 text-white mx-1 fw-600 circle bg-primary"
        pageLinkClassName="w-9 h-9 grid place-content-center border border-gray-400 text-white mx-1 fw-600 circle bg-primary"
        activeClassName="bg-light text-black"
        activeLinkClassName="bg-light text-black"
      />
    </>
  );
}