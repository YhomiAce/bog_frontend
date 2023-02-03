import { Button } from '@material-tailwind/react'
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createServiceCategory, updateServiceCategory } from '../../../../../../redux/actions/ServiceCategoryAction';
import {  serviceCategorySchema } from '../../../../../../services/validation';
import Spinner from '../../../../../layouts/Spinner';

const CreateServiceModal = ({ CloseModal, selected }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const stopLoading = () => {
        setLoading(false);
        CloseModal();
    }
    const submitHandler = (value) => {
        setLoading(true);
        const payload = {
            ...value
        };
        if (!selected) {
            dispatch(createServiceCategory(payload, stopLoading));
        }else{
            payload.id = selected.id;
            dispatch(updateServiceCategory(payload, stopLoading));
        }
    }
    const formik = useFormik({
        initialValues: {
            name:  selected ? selected.name : "",
        },
        onSubmit: submitHandler,
        validationSchema: serviceCategorySchema
    });
    const { name } = formik.values;
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <p className="lg:fs-700 fw-600">Add Sercive Category</p>
                    <div className="mt-5">
                        <label className="block">Category Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            required
                            id='name'
                            name='name'
                            value={name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null
                        }
                    </div>
                    
                    {
                        loading ? <Spinner /> :
                            <div className="mt-8 flex justify-between">
                                <Button color="red" onClick={CloseModal}>Cancel</Button>
                                <Button type='submit' className="bg-primary">{ selected ? 'Update' : 'Add'} Service</Button>
                            </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default CreateServiceModal