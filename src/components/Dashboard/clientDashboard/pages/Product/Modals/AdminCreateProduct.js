import React from 'react';
import { Button } from "@material-tailwind/react";

const AdminCreateProduct = ({ CloseModal }) => {
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form>
                    <p className="lg:fs-700 fw-600">Add Product</p>
                    <div className="mt-5">
                        <label className="block">Product Tittle</label>
                        <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                    </div>
                    <div className="mt-5">
                        <label className="block">Product Price</label>
                        <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                    </div>
                    <div className="mt-5">
                        <label className="block">Product Image</label>
                        <input type="file" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                    </div>
                    <div className="mt-5">
                        <label className="block">Product Description</label>
                        <textarea className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                    </div>
                    <div className="mt-5">
                        <label className="block">Product Category</label>
                        <select className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required>
                            <option>Sand</option>
                            <option>Granite</option>
                            <option>Cement</option>
                            <option>Steel</option>
                        </select>
                    </div>
                    <div className="mt-8 flex lg:w-10/12 justify-between">
                        <Button color="red" onClick={CloseModal}>Cancel</Button>
                        <Button className="bg-primary">ADD Product</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminCreateProduct