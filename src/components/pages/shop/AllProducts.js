import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { formatNumber } from "../../../services/helper";
// import { useSelector } from "react-redux";
// import sand from "../../assets/images/sands.png";


// const baseURL = process.env.REACT_APP_IMAGE_URL;

const AllProducts = ({ products }) => {

    // const products = useSelector((state) => state.products.products);



    return (
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(0, 9).map(item => {
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
    )
}
export default AllProducts;
