/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { loadData, saveData } from './DataHandler';

export const SupplyCat = ({handleOpen}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [formData, setFormData] = useState({
        categories: [],
        others: "",
    });
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && dataLoader()
        setDataLoaded(true);
    }, [])
    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { categories } = formData;
        if (checked) {
            setFormData({
                categories: [...categories, value]
            })
        }else{
            setFormData({
                categories: categories.filter(x => x !== value)
            })
        }
    }

    const dataLoader = () => {
        const url = "/kyc-supply-category/fetch/" + user.userType;
        loadData(url, formData, setFormData)
    }
    const DataSaver = () => {
        const url = "/kyc-supply-category/create";
        const newData = {...formData, categories: formData.categories.toString()}
        saveData({url, setLoading, formData: newData, user, setFormData, setFeetback, hasFile: false});
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'others' && (newValue = { others: newVal });
        setFormData({
            ...formData,
            ...newValue,
        });
    };
  return (
    <div className='lg:px-4 scale-ani'>
        <p className='fw-500 pb-4'>Check the categories of supply you offer</p>
        <div className='lg:flex'>
            <div className='lg:w-6/12'>
                <div>
                    <input
                        value="Marine"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Marine")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Marine</label>
                </div>
                <div>
                    <input
                        value="Mechanical"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Mechanical")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Mechanical</label>
                </div>
                <div>
                    <input
                        value="Electrical"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Electrical")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Electrical / Instrumentation</label>
                </div>
                <div>
                    <input
                        value="Plumbing"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Plumbing")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Plumbing</label>
                </div>
                <div>
                    <input
                        value="Carpentry"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Carpentry")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Carpentry</label>
                </div>
                <div>
                    <input
                        value="Electronics"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Electronics")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Electronics / Household Materials</label>
                </div>
                <div>
                    <input
                        value="HSE"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("HSE")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>HSE</label>
                </div>
            </div>
            <div className='lg:w-6/12'>
                <div>
                    <input
                        value="Stationeries"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Stationeries")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Stationeries / Consumables</label>
                </div>
                <div>
                    <input
                        value="Techanicals"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Techanicals")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Techanicals</label>
                </div>
                <div>
                    <input
                        value="ICT"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("ICT")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>ICT</label>
                </div>
                <div>
                    <input
                        value="Paints"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Paints")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Paints</label>
                </div>
                <div>
                    <input
                        value="Building"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Building")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Building Materials</label>
                </div>
                <div>
                    <input
                        value="Special"
                        onChange={(e) => handleChange(e)}
                        checked={formData.categories.includes("Special")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Special Services (show evidence)</label>
                </div>
                <div>
                    <input
                        value="Others"
                        onChange={(e) => handleChange(e)}
                        // checked={formData.categories.includes("Others")}
                        type="checkbox"
                        className='mr-2'
                    />
                    <label>Others (Specify below)</label>
                </div>
            </div>
        </div>
        <div>
            <input
                value={formData.others}
                onChange={(e) => updateValue(e.target.value, "others")}
                type="text"
                placeholder="Specify Others"
                className='w-full mt-2 p-2 border border-gray-400 rounded'
            />
        </div>
        {loading ? <Spinner /> : <button onClick={DataSaver} className="btn-primary bg-green-600 lg:px-7">
            Save
        </button>}
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(4)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(6)}>Next</p>
        </div>
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
