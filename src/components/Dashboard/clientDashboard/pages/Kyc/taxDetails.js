/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { loadData, saveData } from './DataHandler';

export const TaxDetails = ({handleOpen, tab}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [formData, setFormData] = useState({
        VAT: "",
        TIN: "",
        relevant_statutory: "",
    });
    const [isSaving, setIsSaving] = useState(false);
    const gotoPrev = () => {
        handleOpen(tab-1)
    }
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && dataLoader()
        setDataLoaded(true);
    }, [])

    const dataLoader = () => {
        const url = "/kyc-tax-permits/fetch?userType=" + user.userType;
        
        loadData(url, formData, setFormData)
    }
    const DataSaver = () => {
        const url = "/kyc-tax-permits/create";
        if(isSaving){
            setIsSaving(false);
            saveData({url, setLoading, formData, user, setFormData, setFeetback});
        }else{
            handleOpen(tab+1);
        }
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'VAT' && (newValue = { VAT: newVal });
        variable === 'TIN' && (newValue = { TIN: newVal });
        variable === 'relevant_statutory' && (newValue = { relevant_statutory: newVal });
        
        setFormData({
            ...formData,
            ...newValue,
        });
        setIsSaving(true);
    };
  return (
    <div className='lg:px-4 scale-ani'>
        <div>
            <label>VAT Registration Number</label>
            <input
                value={formData.VAT}
                onChange={(e) => updateValue(e.target.value, "VAT")}
                type="number"
                className='w-full mt-2 p-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label>Tax Identification Number</label>
            <input
                value={formData.TIN}
                onChange={(e) => updateValue(e.target.value, "TIN")}
                type="number"
                className='w-full mt-2 p-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label>List of Relevant statutory/professional bodies registered with</label>
            <textarea
                value={formData.relevant_statutory}
                onChange={(e) => updateValue(e.target.value, "relevant_statutory")}
                className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
            />
        </div>
        {loading ? <Spinner /> : 
            <div className='pt-8 flex justify-between'>
                <button onClick={gotoPrev} className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>
                    Previous
                </button>
                <button onClick={DataSaver} className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>
                    Save&Continue
                </button>
            </div>
        }
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
