import React from 'react';
import ReactStars from "react-rating-stars-component";


// const baseURL = process.env.REACT_APP_IMAGE_URL;

const RecentProducts = ({ item }) => {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="mt-12 flex border-b pb-4">
            <div className="w-4/12">
                <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="productId" className="w-full h-32" />
            </div>
            <div className="w-8/12 pl-6 grid content-between">
                <div className="fs-500">
                    <p>{item.name}</p>
                    <ReactStars
                        edit={false}
                        value={4}
                        size={20}
                    />
                    <p className="mt-1 fw-600">NGN {formatNumber(item.price)}</p>
                </div>
            </div>
        </div>
    )
}

export default RecentProducts