import { Button } from '@material-tailwind/react'
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createServiceCategory, updateServiceCategory } from '../../../../../../redux/actions/ProjectAction';
import { serviceTypeCategorySchema } from '../../../../../../services/validation';
import Spinner from '../../../../../layouts/Spinner';

const CreateCategoryProject = ({ CloseModal, item }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.service.services);
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
        if (item != null) {
            payload.typeId = item.id;
            dispatch(updateServiceCategory(payload, stopLoading));
        } else {
            dispatch(createServiceCategory(payload, stopLoading));
        }
    }
    const formik = useFormik({
        initialValues: {
            title: item ? item.title : "",
            description: item ? item.description : "",
            serviceId: item ? item.serviceId : "",
            slug: item ? item.slug : "",
        },
        onSubmit: submitHandler,
        validationSchema: serviceTypeCategorySchema
    });
    const projectslugs = [
        "land_survey",
        "construction_drawing",
        "building_approval",
        "geotechnical_investigation",
        "contractor"
      ];
    const { title, description, serviceId, slug } = formik.values;
    const options = categories.length > 0 ? categories.map(category => {
        return <option value={category.id}>{category.name}</option>
    }) : [];

    const slugOptions = projectslugs.map(slug => (
        <option value={slug}>{slug}</option>
    ))

    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <p className="lg:fs-700 fw-600">Add Service Type</p>
                    <div className="mt-5">
                        <label className="block">Service Type Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            required
                            id='title'
                            name='title'
                            value={title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.title && formik.errors.title ? <p className='text-red-500'>{formik.errors.title}</p> : null
                        }
                    </div>
                    <div className="w-full mt-6">
                        <label className='block'>Type of Services Rendered</label>
                        <select
                            className='mt-2 py-2 px-2 bg-white border border-gray-500 rounded w-full'
                            id="serviceId"
                            name="serviceId"
                            value={serviceId}
                            onChange={formik.handleChange}
                        >
                            <option selected >Select The service category</option>
                            {options}
                        </select>
                        {
                            formik.touched.serviceId && formik.errors.serviceId ? <p className='text-red-500'>{formik.errors.serviceId}</p> : null
                        }
                    </div>
                    <div className="w-full mt-6">
                        <label className='block'>Project slug</label>
                        <select
                            className='mt-2 py-2 px-2 bg-white border border-gray-500 rounded w-full'
                            id="slug"
                            name="slug"
                            value={slug}
                            onChange={formik.handleChange}
                        >
                            <option selected >Select Project slug</option>
                            {slugOptions}
                        </select>
                        {
                            formik.touched.slug && formik.errors.slug ? <p className='text-red-500'>{formik.errors.slug}</p> : null
                        }
                    </div>
                    <div className="mt-5">
                        <label className="block">Category Description</label>
                        <textarea
                            className="w-full h-24 border border-gray-400 rounded mt-2 p-2"
                            required
                            id="description"
                            name="description"
                            value={description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                        {
                            formik.touched.description && formik.errors.description ? <p className='text-red-500'>{formik.errors.description}</p> : null
                        }
                    </div>
                    {
                        loading ? <Spinner /> :
                            <div className="mt-8 flex justify-between">
                                <Button color="red" onClick={CloseModal}>Cancel</Button>
                                <Button type='submit' className="bg-primary">ADD Service</Button>
                            </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default CreateCategoryProject