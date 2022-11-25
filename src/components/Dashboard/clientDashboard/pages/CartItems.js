import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, deleteItem } from '../../../../redux/actions/cartAction';

const CartItems = ({ item }) => {
    const dispatch = useDispatch();
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
                    <div className="flex justify-between">
                        <p>{item.tittle}</p>
                        <p
                            className="flex items-center text-red-600 fw-600 cursor-pointer"
                            onClick={() => dispatch(deleteItem(item.id))}
                        ><MdOutlineDeleteOutline /><p className="pl-1 fs-300">Delete</p></p>
                    </div>
                    <p className="mt-1 fw-600">NGN {formatNumber(item.price)}</p>
                    <p className="mt-1 h-10 lg:fs-300 fs-200 overflow-hidden">{item.description}</p>
                    <div className="flex mt-2">
                        <div className='lg:w-3/12 lg:ml-3'>
                            {/* <p>NGN {item.price}</p> */}
                            <div className='flex mt-2 fw-600'>
                                <button className='border border-gray-300 rounded px-2 mr-2' onClick={() => dispatch(decrementQuantity(item))}>-</button>
                                <p>{item.quantity}</p>
                                <button className='border border-gray-300 rounded px-2 ml-2' onClick={() => dispatch(incrementQuantity(item))}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems