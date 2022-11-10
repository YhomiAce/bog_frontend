import React from "react";
import { products } from "../../../pages/shop/AllProducts";
import CartItems from "./CartItems";

export default function Cart() {
    
    console.log(products);
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">My Cart</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage products on your cart.</p>
                </div> 
                <div className="p-5">
                    <div className="lg:grid-74">
                        <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                            <p className="text-lg fw-600">Cart Products (3)</p>
                            <div className="lg:fs-500 fs-400">
                                {products.slice(0,3).map((item, index) => {
                                    return(
                                        <CartItems key={index} item={item} />
                                    )
                                    })
                                }
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                                <p className="text-lg fw-600">Cart Summary</p>
                                <div className="my-2 py-4 border-t border-b">
                                    <div className="flex justify-between fw-600 fs-700">
                                        <p>Subtotal</p>
                                        <p>NGN 1,280,230</p>
                                    </div>
                                    <p className="pt-2 fs-400">Delivery fees not included yet</p>
                                    
                                </div>
                                <div className="py-4">
                                    <button className="w-full rounded-md text-white fw-600 py-2 bg-secondary">CHECKOUT (NGN 1,280,230)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}