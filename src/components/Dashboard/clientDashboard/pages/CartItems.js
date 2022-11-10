import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const CartItems = ({item}) => {

    const [cartNum, setCartNum] = useState(1)

  return (
    <div className="mt-12 flex border-b pb-4">
        <div className="lg:w-3/12">
            <img src={item.img} alt="productId" className="w-40 h-36"/>
        </div>
        <div className="w-9/12 lg:pl-6 pl-3 grid content-between">
            <div className="lg:fs-500">
                <div className="flex justify-between">
                    <p>{item.tittle}</p>
                    <p className="flex items-center text-red-600 fw-600 cursor-pointer"><MdOutlineDeleteOutline/><p className="pl-1 fs-300">Delete</p></p>
                </div>
                <p className="mt-1 fw-600">{item.price}</p>
                <p className="mt-1 h-10 lg:fs-300 fs-200 overflow-hidden">Consequat mollit commodo laboris amet est occaecat velit velit proident enim nulla eu. Deserunt consectetur cillum irure magna cillum elit mollit nulla. Ullamco commodo irure est aliquip qui anim qui occaecat magna officia minim do qui cupidatat. Ex et ipsum magna nisi ipsum. Ea magna in in aute sunt excepteur ad quis aliqua excepteur quis aliqua. Veniam deserunt qui labore occaecat sint consectetur sit veniam exercitation aliquip laboris id.</p>
                <div className="flex mt-2">
                    <div className="">
                        <input type="number" min={0} value={cartNum} onChange={(e) => setCartNum(e.target.value)} className="border fw-600 border-gray-600 rounded w-12 py-1 pl-2"/>
                    </div>
                    <div>
                        <Button className="py-2 px-3 lg:px-4 bg-primary mx-4">Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems