import React from 'react';
import { Button } from "@material-tailwind/react";

const EditProduct = ({ CloseEditModal }) => {
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseEditModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form>
                    <p className="lg:fs-700 fw-600">Edit this Product</p>
                    <div className="mt-5">
                        <label className="block">New Product Tittle</label>
                        <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                    </div>
                    <div className="mt-5">
                        <label className="block">New Product Price</label>
                        <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                    </div>
                    <div className="mt-5">
                        <label className="block">New Product Image</label>
                        <input
                            type="file"
                            multiple
                            max={5}
                            name="photos"
                            className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">New Product Description</label>
                        <textarea className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                    </div>
                    <div className="mt-8 flex lg:w-10/12 justify-between">
                        <Button color="red" onClick={CloseEditModal}>Cancel</Button>
                        <Button className="bg-primary">Save Edit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct