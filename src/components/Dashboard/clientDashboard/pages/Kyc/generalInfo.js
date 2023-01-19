/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { loadData, saveData } from './DataHandler';

export const GeneralInfo = ({handleOpen}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [formData, setFormData] = useState({
        organisation_name: "",
        email_address: "",
        contact_number: "",
        reg_type: "",
        registration_number: "",
        business_address: "",
        operational_address: "",
    });
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && dataLoader()
        setDataLoaded(true);
    }, [])

    const dataLoader = () => {
        const url = "/kyc-general-info/fetch/" + user.userType;
        loadData(url, formData, setFormData)
    }
    const DataSaver = () => {
        const url = "/kyc-general-info/create";
        saveData({url, setLoading, formData, user, setFormData, setFeetback, hasFile: false});
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'organisation_name' && (newValue = { organisation_name: newVal });
        variable === 'email_address' && (newValue = { email_address: newVal });
        variable === 'contact_number' && (newValue = { contact_number: newVal });
        variable === 'reg_type' && (newValue = { reg_type: newVal });
        variable === 'registration_number' && (newValue = { registration_number: newVal });
        variable === 'business_address' && (newValue = { business_address: newVal });
        variable === 'operational_address' && (newValue = { operational_address: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    };
  return (
    <div className='lg:px-4 scale-ani'>
        <div>
            <label>Name of Organisation</label>
            <input
                value={formData.organisation_name}
                onChange={(e) => updateValue(e.target.value, "organisation_name")}
                type="text"
                className='w-full mt-2 p-2 border border-gray-400 rounded
            '/>
        </div>
        <div className='mt-3'>
            <label>Email Address</label>
            <input
                value={formData.email_address}
                onChange={(e) => updateValue(e.target.value, "email_address")}
                type="email"
                className='w-full p-2 mt-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label>Office Telephone / Contact No</label>
            <input
                value={formData.contact_number}
                onChange={(e) => updateValue(e.target.value, "contact_number")}
                type="number"
                className='w-full p-2 mt-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label className=''>Type of Registration</label>
            <div className='flex items-center mt-2'>
                <input
                    value="Incorporation"
                    checked={formData.reg_type === 'Incorporation'}
                    onChange={(e) => updateValue(e.target.value, "reg_type")}
                    type="radio"
                    name='tor'
                    className=''
                />
                <label className='ml-2'>Incorporation</label>
            </div>
            <div className='flex items-center'>
                <input
                    value="Registered Business Name"
                    checked={formData.reg_type === 'Registered Business Name'}
                    onChange={(e) => updateValue(e.target.value, "reg_type")}
                    type="radio"
                    name='tor'
                    className=''
                />
                <label className='ml-2'>Registered Business Name</label>
            </div>
        </div>
        <div className='mt-3'>
            <label>Incorporation / Registration No</label>
            <input
                value={formData.registration_number}
                onChange={(e) => updateValue(e.target.value, "registration_number")}
                type="number"
                className='w-full p-2 mt-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label>Business Address</label>
            <textarea
                value={formData.business_address}
                onChange={(e) => updateValue(e.target.value, "business_address")}
                className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
            />
        </div>
        <div className='mt-3'>
            <label>Address of other significant operational base (including Email/Telephone)</label>
            <textarea
                value={formData.operational_address}
                onChange={(e) => updateValue(e.target.value, "operational_address")}
                className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
            />
        </div>  
        {loading ? <Spinner /> : 
            <div className='pt-8 flex justify-end'>
                <button onClick={DataSaver} className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>
                    Save
                </button>
            </div>}
        {feedback &&
            <ActionFeedBack
                closeFeedBack={() => setFeetback(false)}
                title={feedback.title}
                icon={feedback.icon}
                info={feedback.info}
                status={feedback.status}
            />}
    </div>
  )
}
