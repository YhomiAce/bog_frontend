import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../../../redux/actions/ProductAction';
import Spinner from '../../../../../layouts/Spinner';

const DeleteModal = ({ CloseDelete, product, isAdmin }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    console.log(product);
    const saveLoading = () => {
        setLoading(false);
        CloseDelete();
    };

    const deleteProduct = () => {
        setLoading(true);
        dispatch(removeProduct(product.id, saveLoading, isAdmin))
    }

    return (
        <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
            <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <div className="flex lg:px-6 px-5">
                    <div className="text-2xl pr-3 text-yellow-600">
                        <BsExclamationCircleFill />
                    </div>
                    <div>
                        <p className="fs-700 fw-600 mb-4">Delete Product</p>
                        <p>Are you sure you want to delete this product? All data attached to this product will be permanently removed.</p>
                    </div>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button color="black" variant="outlined" ripple={true} onClick={CloseDelete}>Cancel</Button>
                    {
                        loading ? <Spinner /> :
                            <Button color="red" onClick={deleteProduct} className="ml-4" ripple={true}>Delete</Button>
                    }

                </div>
            </div>
        </div>
    )
}

export default DeleteModal