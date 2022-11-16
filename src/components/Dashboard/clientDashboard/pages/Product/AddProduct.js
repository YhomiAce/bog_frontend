import React from 'react'

const AddProduct = () => {
    return (
        <div className="mt-12 px-5">
            <form>
                <p className="fs-600 fw-600">Add a new Product to the Shop</p>
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
                <div className="mt-8 flex lg:w-10/12 justify-between">
                    <button className="btn-primary w-5/12 px-1 ">
                        Save to Drafts
                    </button>
                    <button className="btn-primary w-5/12">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct