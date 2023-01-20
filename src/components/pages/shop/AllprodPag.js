import React, { useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
import { formatNumber } from '../../../services/helper';



function Products({ currentItems }) {

   const prodSec = useRef(null)

  return (
    <div ref={prodSec}>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {currentItems.slice(0, 9).map(item => {
                    return (
                        <div className="shadow-md px-3 pb-6 pt-3 lg:mt-12 mt-6 rounded-md" key={item.id}>

                            <Link to={`/shop/${item.id}`}>
                                <img src={`${item.image}`} alt="products" className="w-full h-20 lg:h-40 mx-auto" />
                                <p className="lg:fs-600 fs-300 fw-500  lg:pt-6 pt-2">{item.name}</p>
                                <ReactStars
                                    edit={false}
                                    value={4}
                                    size={20}
                                />
                                <p className="fw-600 fs-300 lg:fs-600">NGN{formatNumber(item.price)}</p>
                            </Link>
                        </div>
                    )
                }

                )}
            </div>
        </div>
  );
}

export function ProductItems({ itemsPerPage, products }) {

    // const products = products.filter(where => where.totalProducts !== 0);
  console.log(products)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo({
      top: 50,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Products currentItems={currentItems} />
      <ReactPaginate
        breakLabel={<p>break</p>}
        nextLabel={<p className='ml-2'><IoArrowForwardCircleSharp className='text-3xl text-secondary'/></p>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<p className='mr-2'><IoArrowBackCircleSharp className='text-3xl text-secondary'/></p>}
        renderOnZeroPageCount={null}
        className="flex justify-end items-center mt-12 bg-light w-full fs-600 lg:py-2 lg:px-5 rounded-lg"
        pageClassName="w-5 lg:w-9 h-5 lg:h-9 grid place-content-center border border-gray-400 text-white mx-1 fw-600 circle bg-primary"
        pageLinkClassName="w-5 lg:w-9 h-5 lg:h-9 grid place-content-center border border-gray-400 text-white fs-500 mx-1 fw-600 circle bg-primary"
        activeClassName="bg-light text-black"
        activeLinkClassName="bg-light text-black"
      />
    </>
  );
}