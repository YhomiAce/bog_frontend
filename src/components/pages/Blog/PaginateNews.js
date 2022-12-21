import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cutText, stripHtml } from '../../../services/helper'
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogPosts, getAllBlogCategories } from "../../../redux/actions/PostAction";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function News({ currentItems }) {

    const dispatch = useDispatch();

    const post = useSelector((state) => state.blog);
    const posts =  post.filter(where => where.isPublished)

    console.log(posts)

    useEffect(() => {
        dispatch(getAllBlogPosts());
        dispatch(getAllBlogCategories());
    }, [dispatch]);

  return (
    <>
      {currentItems &&
        posts?.map((item) => (
            <div className="lg:w-full shadow-md rounded-md">
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
    </>
  );
}

export function PaginatedItems({ itemsPerPage }) {

    const dispatch = useDispatch();

    const post = useSelector((state) => state.blog);
    const posts =  post.filter(where => where.isPublished)

    useEffect(() => {
        dispatch(getAllBlogPosts());
        dispatch(getAllBlogCategories());
    }, [dispatch]);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}