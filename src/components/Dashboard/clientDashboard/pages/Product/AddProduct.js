import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import SelectableItem from '../../../../widgets/SelectableItem';
import { productSchema } from '../../../../../services/validation';
import Spinner from '../../../../layouts/Spinner';
import { createProduct } from '../../../../../redux/actions/ProductAction';

const AddProduct = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products.categories);
    const [category, setCategory] = useState("");
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePhotoChange = (e) => {
        setPhotos(Array.from(e.target.files));
    }
    console.log(photos);
    const stopLoading = () => setLoading(false); 

    const createNewProduct = (value, action) => {
        setLoading(true);
        const fd = new FormData();
        for (let i = 0; i < photos.length; i++) {
            fd.append(`photos[]`, photos[i]);
        }
        fd.append("name", value.name);
        fd.append("price", value.price);
        fd.append("quantity", value.quantity);
        fd.append("unit", value.unit);
        fd.append("description", value.description);
        fd.append("categoryId", category);
        dispatch(createProduct(fd, stopLoading));
        action.resetForm();
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            quantity: 0,
            description: "",
            unit: "",
        },
        validationSchema: productSchema,
        onSubmit: createNewProduct,
    });
    const { name, price, quantity, description, unit, } = formik.values;
    const changeCategory = (val) => {
        const value = val.value;
        setCategory(value);
    }
    const options = categories.length > 0 ? categories.map(category => {
        return {
            label: category.name,
            value: category.id
        }
    }) : [];
    return (
        <div className="mt-12 px-5">
            <form onSubmit={formik.handleSubmit} >
                <p className="fs-600 fw-600">Add a new Product to the Shop</p>
                <div className="w-48.5 mt-6 lg:w-10/12">
                    <label className='block mb-2'>Product Category</label>
                    <SelectableItem
                        options={options}
                        handleChange={changeCategory}
                        placeholder="Select category"
                        className=""
                    />
                </div>
                <div className="mt-5">
                    <label className="block">Product Tittle</label>
                    <input
                        type="text"
                        className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                        required
                        id="name"
                        name="name"
                        value={name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null
                    }
                </div>
                <div className="mt-5">
                    <label className="block">Product Price</label>
                    <input
                        type="number"
                        className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                        required
                        id="price"
                        name="price"
                        value={price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.price && formik.errors.price ? <p className='text-red-500'>{formik.errors.price}</p> : null
                    }
                </div>
                <div className="mt-5">
                    <label className="block">Available Quantity</label>
                    <input
                        type="number"
                        className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                        required
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.quantity && formik.errors.quantity ? <p className='text-red-500'>{formik.errors.quantity}</p> : null
                    }
                </div>
                <div className="mt-5">
                    <label className="block">Unit of measurement</label>
                    <input
                        type="text"
                        className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                        required
                        id="unit"
                        name="unit"
                        value={unit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.unit && formik.errors.unit ? <p className='text-red-500'>{formik.errors.unit}</p> : null
                    }
                </div>
                <div className="mt-5">
                    <label className="block">Product Image</label>
                    <input
                        type="file"
                        className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2"
                        required
                        name='photos'
                        multiple
                        onChange={handlePhotoChange}
                    />
                </div>
                <div className="mt-5">
                    <label className="block">Product Description</label>
                    <textarea
                        className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2"
                        required
                        id="description"
                        name="description"
                        value={description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                    </textarea>
                    {
                        formik.touched.description && formik.errors.description ? <p className='text-red-500'>{formik.errors.description}</p> : null
                    }
                </div>
                {
                    loading ? <Spinner /> :
                        <div className="mt-8 flex lg:w-10/12 justify-between">
                            {/* <button 
                            type='submit' 
                            className="btn-primary w-5/12 px-1 "
                            // onClick={() => createNewProduct("draft")}
                            >
                                Save to Drafts
                            </button> */}
                            <button 
                            type='submit' 
                            className="btn-primary w-5/12"
                            // onClick={() => createNewProduct("pending")}
                            >
                                Add Product
                            </button>
                        </div>
                }

            </form>
        </div>
    )
}

export default AddProduct