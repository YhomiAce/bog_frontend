import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { updateAccount, SuccessAlert } from '../../../../services/endpoint';
import Spinner from '../../../layouts/Spinner';

const BASE_URL = process.env.REACT_APP_IMAGE_URL;

const PersonalData = () => {
    const user = useSelector((state) => state.auth.user);
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({
        fname: user?.fname ? user?.fname : "",
        lname: user?.lname ? user?.lname : "",
        phone: user?.phone ? user?.phone : "",
    });
    const { fname, lname, phone } = userData;

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        setPhoto(e.target.files[0]);
    }

    const handleUserDetailsChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const submitHandler = async () => {
        try {
            setLoading(true)
            console.log(userData);
            const fd = new FormData();
            fd.append('fname', fname);
            fd.append('lname', lname);
            fd.append('phone', phone);
            if (photo && photo !== '') {
                fd.append("photo", photo);
            }
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const result = await updateAccount(fd, config);
            if (result.success === true) {
                setShow(true);
                SuccessAlert("Account data update successfully!");
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }


    return (
        <div>
            <div className="fs-400 lg:fs-600">
                <div className="mt-6 lg:mt-0 py-6 px-2 lg:px-8 rounded-lg">
                    <div className="flex items-center lg:my-6">
                        <div>
                            <img
                                src={user?.photo ? `${BASE_URL}/${user?.photo}` : "https://i.stack.imgur.com/l60Hf.png"}
                                alt="profifepic"
                                className="lg:w-20 w-16"
                            />
                        </div>
                        <div className="lg:fs-400 text-xs pl-2 lg:pl-6 w-6/12">
                            <p className="mb-2">Update Profile Picture</p>
                            <input
                                type="file"
                                accept="image"
                                name='photo'
                                onChange={handleFileChange}
                                class="block w-full text-sm text-slate-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-violet-50 file:text-violet-700
                              hover:file:bg-violet-100
                            " />
                        </div>
                        
                    </div>
                    <div className="lg:grid-2 justify-between">
                        <div className="pt-5">
                            <label className="block mb-1 fw-500">First Name</label>
                            <input
                                type="text"
                                className="w-10/12 lg:w-full placeholder-black py-2 px-3 rounded-lg bg-light border border-gray-600"
                                name="fname"
                                id="fname"
                                value={fname}
                                onChange={handleUserDetailsChange}
                            />
                        </div>
                        <div className=" pt-5">
                            <label className="block mb-1 fw-500">Last Name</label>
                            <input
                                type="text"
                                className="w-10/12 lg:w-full placeholder-black py-2 px-3 rounded-lg bg-light border border-gray-600"
                                name="lname"
                                id="lname"
                                value={user?.lname ? user?.lname : lname}
                                onChange={handleUserDetailsChange}
                            />
                        </div>
                    </div>
                    <div className="lg:grid-2 justify-between lg:mt-4">
                        <div className="mt-3 ">
                            <label className="block mb-1 fw-500">Email</label>
                            <input
                                type="text"
                                className="w-10/12 lg:w-full py-2 placeholder-black px-3 rounded-lg bg-light border border-gray-600"
                                name="email"
                                value={user?.email ? user?.email : ""}
                                readOnly
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Phone Number</label>
                            <input
                                type="text"
                                className="w-10/12 lg:w-full py-2 px-3 placeholder-black rounded-lg bg-light border border-gray-600"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={handleUserDetailsChange}
                            />
                        </div>
                    </div>
                    <div className="lg:grid-2 justify-between lg:mt-4">
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Date of Birth</label>
                            <input
                                type="date"
                                className="w-10/12 lg:w-full py-2 px-3 rounded-lg bg-light border border-gray-600"
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block mb-1 fw-500">Gender</label>
                            <select className="w-10/12 lg:w-full py-2 px-3 rounded-lg bg-light border border-gray-600">
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10 lg:flex justify-between items-center">
                        {
                            loading ? <Spinner /> :

                                <button
                                    type='button'
                                    onClick={submitHandler}
                                    className="btn-primary lg:w-4/12"
                                >Update Profile</button>
                        }
                        {
                            show ? <p className="flex items-center fw-500 mt-4 lg:mt-0 text-primary"><BiCheckCircle /><span className="pl-1">All Changes are saved</span></p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalData