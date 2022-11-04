import React from "react";
import { Link} from "react-router-dom";
import blog from "../../assets/images/sands.png";
import cement from "../../assets/images/cements.png";
import steel from "../../assets/images/steels.png";
import stones from "../../assets/images/granites.png";
import ReactStars from "react-rating-stars-component";


export const products = [
    {
        id: "1",
        img: blog,
        tittle: "20 Tons of Sharp Filling Sand ",
        price: "NGN 80,800",
        rating: 4,
        category: "Sand",
    },
    {
        id: "2",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 3.5,
        category: "Cement",
    },
    {
        id: "3",
        img: stones,
        tittle: "10 Tons Construction Stones",
        price: "NGN 190,000",
        rating: 3,
        category: "Gravel",
    },
    {
        id: "4",
        img: steel,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN 458,800",
        rating: 4,
        category: "Steel",
    },
    {
        id: "5",
        img: stones,
        tittle: "10 Tons Construction Stones",
        price: "NGN 190,000",
        rating: 4,
        category: "Gravel",
    },
    {
        id: "6",
        img: blog,
        tittle: "20 Tons of Sharp Filling Sand ",
        price: "NGN 80,800",
        rating: 4,
        category: "Sand",
    },
    {
        id: "7",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 5,
        category: "Cement",
    },
    {
        id: "8",
        img: steel,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN 458,800",
        rating: 4,
        category: "Steel",
    },
    {
        id: "9",
        img: stones,
        tittle: "10 Tons Construction Stones",
        price: "NGN 190,000",
        rating: 5,
        category: "Gravel",
    },
    {
        id: "10",
        img: blog,
        tittle: "20 Tons of Sharp Filling Sand ",
        price: "NGN 80,800",
        rating: 4,
        category: "Sand",
    },
    {
        id: "11",
        img: blog,
        tittle: "10 Tons of Sharp Filling Sand ",
        price: "NGN 40,800",
        rating: 3,
        category: "Sand",
    },
    {
        id: "12",
        img: blog,
        tittle: "30 Tons of Sharp Filling Sand ",
        price: "NGN 130,100",
        rating: 5,
        category: "Sand",
    },
    {
        id: "13",
        img: blog,
        tittle: "5 Tons of Sharp Filling Sand ",
        price: "NGN 23,500",
        rating: 4,
        category: "Sand",
    },
    {
        id: "14",
        img: steel,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN 458,800",
        rating: 3,
        category: "Steel",
    },
    {
        id: "15",
        img: steel,
        tittle: "Steel Reinforcement ",
        price: "NGN 358,800",
        rating: 4,
        category: "Steel",
    },
    {
        id: "16",
        img: steel,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN 458,800",
        rating: 4,
        category: "Steel",
    },
    {
        id: "17",
        img: steel,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN 458,800",
        rating: 4,
        category: "Steel",
    },
    {
        id: "18",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 5,
        category: "Cement",
    },
    {
        id: "19",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 5,
        category: "Cement",
    },
    {
        id: "20",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 5,
        category: "Cement",
    },
    {
        id: "21",
        img: cement,
        tittle: "Dangote Cement Trailer Load ",
        price: "NGN 764,200",
        rating: 5,
        category: "Cement",
    },
]

const AllProducts = () => {

    

    return(
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(0,9).map(item => {
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
export default AllProducts;

export const SimilarProducts = () => {

    return (
            <div>
                <div className="lg:grid-4 grid-2 justify-between relative lg:-top-12 -top-6">
                {products.slice(0,4).map(item => {
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
