import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAnnouncement } from '../../../../../../redux/actions/AnnouncementAction';
import { announcementSchema } from '../../../../../../services/validation';
import Spinner from '../../../../../layouts/Spinner';


export const SendMessage = ({closeModal}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [support, setSupport] = useState();
    const stopLoading = () => {
        setLoading(false);
        closeModal();
    }

    const handleSupportChange = (e) => {
        console.log(e.target.files);
        setSupport(e.target.files[0])
    }
    console.log(support);

    const handleSubmit = (values) => {
        try {
            setLoading(true);
            const fd = new FormData();
            fd.append("title", values.title);
            fd.append("content", values.content);
            fd.append("user", values.user);
            fd.append("date", values.expiredAt);
            fd.append("supportingDocument", support);
            
            dispatch(createAnnouncement(fd, stopLoading));
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            user: "",
            expiredAt: ""
        },
        onSubmit: handleSubmit,
        validationSchema: announcementSchema
    });

    const { title, content, user, expiredAt } = formik.values;

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Title of Message</label>
                    <input
                        type="text"
                        className="w-full  border border-gray-400 rounded mt-2 py-2 px-2"
                        value={title}
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.title && formik.errors.title ? <p className='text-red-500'>{formik.errors.title}</p> : null
                    }
                </div>
                <div className='mt-4'>
                    <label>Message Body</label>
                    <textarea
                        className="w-full  border border-gray-400 rounded mt-2 py-2 px-2 h-28"
                        value={content}
                        id="content"
                        name="content"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {
                        formik.touched.content && formik.errors.content ? <p className='text-red-500'>{formik.errors.content}</p> : null
                    }
                </div>
                <div className='mt-4'>
                    <label>Reciever Option</label>
                    <select
                        className="w-full  border border-gray-400 rounded mt-2 py-2 px-2"
                        value={user}
                        id="user"
                        name="user"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="all">All</option>
                        <option value="private_client">Private Clients</option>
                        <option value="corporate_client">Corporate Clients</option>
                        <option value="product_partner">Product Partners</option>
                        <option value="service_partner">Service Partners</option>
                    </select>
                    {
                        formik.touched.user && formik.errors.user ? <p className='text-red-500'>{formik.errors.user}</p> : null
                    }
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-2'>
                        <label>Attachment</label>
                        <input
                            type="file"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            name='support'
                            onChange={handleSupportChange}
                        />
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-2'>
                        <label>Expiration Date</label>
                        <input
                            type="date"
                            className="w-full  border border-gray-400 rounded mt-2 py-2 px-2"
                            value={expiredAt}
                            id="expiredAt"
                            name="expiredAt"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.expiredAt && formik.errors.expiredAt ? <p className='text-red-500'>{formik.errors.expiredAt}</p> : null
                        }
                    </div>
                </div>
                <div className='mt-8'>
                    {
                        loading ? <Spinner /> :
                            <button className='w-full btn-primary'>Send Message</button>
                    }
                </div>
            </form>
        </div>
    )
}
