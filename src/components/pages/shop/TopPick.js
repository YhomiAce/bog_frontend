import React from "react";
import { Link} from "react-router-dom";
import sand from "../../assets/images/sands.png";


export const top = [
    {
        id: "1",
        img: sand,
        tittle: "10 Tons Construction Stones",
        price: "NGN2,800",
    },
    {
        id: "2",
        img: sand,
        tittle: "20 Tons Sharp Filling Sand ",
        price: "NGN4,200",
    },
    {
        id: "3",
        img: sand,
        tittle: "Dangote Cement Trailer Load",
        price: "NGN10,000",
    },
    {
        id: "4",
        img: sand,
        tittle: "Steel Reinforcement (Local) ",
        price: "NGN3,800",
    }
]

const TopPicks = () => {

    

    return(
        <div>
            <div className="grid-4 justify-between">
                {top.slice(0,4).map(item => {
                    return (
                        <div className="shadow-lg p-6" key={item.id}>
                        <img src={item.img} alt="products" className="w-48"/>
                        <p>{item.tittle}</p>
                        <p>{item.price}</p>
                        <Link to={`/shop/${item.id}`}>More details</Link>
                    </div>
                    )
                } 
                    
                )}
            </div>
        </div>
    )
}
export default TopPicks;