import React, { useEffect } from "react";
import { products } from "./ProductList";
import ReactStars from "react-rating-stars-component";
import { Link} from "react-router-dom";
import { useState } from "react";
import Axios from "../../../config/config";

export default function Cement() {

    return (
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(17,21).map(item => {
                    return (
                        <div className="shadow-md px-3 pb-6 pt-3 lg:mt-12 mt-6 rounded-md" key={item.id}>
                        
                        <Link to={`/shop/${item.id}`}>
                            <img src={item.img} alt="products" className="w-full h-20 lg:h-40 mx-auto"/>
                            <p className="lg:fs-600 fs-300 fw-500  lg:pt-6 pt-2">{item.tittle}</p>
                            <ReactStars 
                                edit={false}
                                value={item.rating}
                                size={20}
                            />
                            <p className="fw-600 fs-300 lg:fs-600">{item.price}</p>
                        </Link>
                    </div>
                    )
                } 
                    
                )}
            </div>
        </div>
    )
}


export const Cements = () => {

    const [cement, setCement] = useState()

    const fetchCement = async() => {
        try {
            const response = await Axios.get("/products/similar-products?category=ea86f613-050f-413f-a92c-70619d9790c9")
            const data = response.data
            setCement(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
}
    useEffect (() => {
        fetchCement()
    })
  return (
    <div>
        <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {cement?.map(item => {
                    return (
                        <div className="shadow-md px-3 pb-6 pt-3 lg:mt-12 mt-6 rounded-md" key={item.id}>
                        
                        <Link to={`/shop/${item.id}`}>
                            <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="products" className="w-full h-20 lg:h-40 mx-auto"/>
                            <p className="lg:fs-600 fs-300 fw-500  lg:pt-6 pt-2">{item.name}</p>
                            <ReactStars 
                                edit={false}
                                value={4}
                                size={20}
                            />
                            <p className="fw-600 fs-300 lg:fs-600">{item.price}</p>
                        </Link>
                    </div>
                    )
                } 
                    
                )}
            </div>
    </div>
  )
}

