import React from 'react';
// import { RiDeleteBinLine } from "react-icons/ri";
// import { BiEdit } from "react-icons/bi";


// const baseURL = process.env.REACT_APP_IMAGE_URL;


const ProductItem = ({ item }) => {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="mt-12 flex border-b pb-4">
            <div className="lg:w-3/12">
                <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="productId" className="w-40 h-36" />
            </div>
            <div className="w-9/12 lg:pl-6 pl-3 grid content-between">
                <div className="lg:fs-500">
                    <p>{item.name}</p>
                    <p className="mt-1">NGN {formatNumber(item.price)}</p>
                    <p className="mt-1 h-10 fs-300 overflow-hidden">{item.description}</p>
                    <p className="mt-1 text-green-600 fw-500">Approved</p>
                </div>
                {/* <div className="flex items-center mt-1">
                    <span className="text-2xl pr-3 cursor-pointer" onClick={() => { setProductEdit(item) }}><BiEdit /></span>
                    <span className="text-2xl pl-3 text-red-600 cursor-pointer"><RiDeleteBinLine onClick={() => { setProductDelete(item) }} /></span>
                </div> */}
            </div>
        </div>
    )
}

export default ProductItem