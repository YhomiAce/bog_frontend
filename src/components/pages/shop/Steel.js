import React from "react";
import { products } from "./AllProducts";
import ReactStars from "react-rating-stars-component";
import { Link} from "react-router-dom";

export default function Steel() {

    return (
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(13,17).map(item => {
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