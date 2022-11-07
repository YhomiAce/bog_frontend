import React from "react";
import { Link} from "react-router-dom";
import sand from "../../assets/images/granites.png";
import ReactStars from "react-rating-stars-component";


export const stones = [
    {
        id: "1",
        img: sand,
        tittle:"10 tons' cargo of 1/4-inch Granite",
        price: "NGN 72,500",
        rating: 4,
        category: "Granite",
    },
    {
        id: "2",
        img: sand,
        tittle:"20 tons' cargo of 1/2-inch Granite",
        price: "NGN 145,200",
        rating: 3,
        category: "Granite",
    },
    {
        id: "3",
        img: sand,
        tittle: "20 tons' cargo of 3/4-inch Granite",
        price: "NGN 145,000",
        rating: 5,
        category: "Granite",
    },
    {
        id: "4",
        img: sand,
        tittle:"20 tons' cargo of Granite stone dust",
        price: "NGN 95,200",
        rating: 5,
        category: "Granite",
    },
    {
        id: "4",
        img: sand,
        tittle:"20 tons' cargo of 1/2-inch Granite",
        price: "NGN 123,800",
        rating: 4,
        category: "Granite",
    },
    {
        id: "5",
        img: sand,
        tittle: "30 Tons Construction Stones (Local)",
        price: "NGN 653,200",
        rating: 3,
        category: "Granite",
    },
    {
        id: "6",
        img: sand,
        tittle:"10 tons' cargo of 1/4-inch Granite",
        price: "NGN 72,500",
        rating: 3,
        category: "Granite",
    },
    {
        id: "7",
        img: sand,
        tittle:"20 tons' cargo of 2/4-inch Granite",
        price: "NGN 182,500",
        rating: 5,
        category: "Granite",
    },
    {
        id: "8",
        img: sand,
        tittle:"20 tons' cargo of 2/4-inch Granite",
        price: "NGN 182,500",
        rating: 4,
        category: "Granite",
    },
    {
        id: "9",
        img: sand,
        tittle:"20 tons' cargo of 2/4-inch Granite",
        price: "NGN 182,500",
        rating: 3,
        category: "Granite",
    },
]

const Granite = () => {

    

    return(
        <div>
            <div className="lg:grid-3 xl:grid-3s grid-2 justify-between relative lg:-top-12 -top-6">
                {stones.slice(0,9).map(item => {
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
export default Granite;