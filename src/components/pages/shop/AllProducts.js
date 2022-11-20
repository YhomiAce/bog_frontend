import React from "react";
import { Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import sand from "../../assets/images/sands.png";




const AllProducts = () => {

    const products = useSelector((state) => state.products.products); 

    

    return(
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(0,9).map(item => {
                    return (
                        <div className="shadow-md px-3 pb-6 pt-3 lg:mt-12 mt-6 rounded-md" key={item.id}>
                        
                        <Link to={`/shop/${item.id}`}>
                            <img src={sand} alt="products" className="w-full h-20 lg:h-40 mx-auto"/>
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
export default AllProducts;

export const SimilarProducts = () => {

    const products = useSelector((state) => state.products.products); 

    return (
            <div>
                <div className="lg:grid-4 grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(0,4).map(item => {
                    return (
                        <div className="shadow-md px-3 pb-6 pt-3 lg:mt-12 mt-6 rounded-md" key={item.id}>
                        
                        <Link to={`/shop/${item.id}`}>
                            <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="products" className="w-full h-24 lg:h-44 mx-auto"/>
                            <p className="lg:fs-600 fs-300 fw-500  lg:pt-6 pt-2">{item.name}</p>
                            <ReactStars 
                                edit={false}
                                value={4}
                                size={20}
                            />
                            <p className="fw-600 fs-400 lg:fs-600">{item.price}</p>
                        </Link>
                    </div>
                    )
                } 
                    
                )}
            </div>
            </div>
    )
}
