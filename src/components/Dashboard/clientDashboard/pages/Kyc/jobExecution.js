/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { hasFileDelete, fetcherForFiles, saveData, loadData } from './DataHandler';

export const JobExecution = ({handleOpen}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [doc, setDoc] = useState()
    const [addWork, setAddWork] = useState(false)
    const [myWorks, setWorks] = useState([])
    const [sectionTwoData, setSectionTwoData] = useState({
        company_involvement: "",
        years_of_experience: ""
    })
    const [formData, setFormData] = useState({
        name: "",
        value: "",
        date: "",
    });
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        if (!isLoaded) {
            fetcherForFiles({ url:"kyc-work-experience", user, setData:setWorks})
            loadData("/kyc-years-experience/fetch", user, sectionTwoData, setSectionTwoData)
        }
        setDataLoaded(true);
    }, [])

    const WorkDataSaver = () => {
        const url = "/kyc-work-experience/create";
        const fd = new FormData();
        fd.append(`document`, doc);
        fd.append("name", formData.name);
        fd.append("value", formData.value);
        fd.append("date", formData.date);
        fd.append("userType", user.userType)
        saveData({url, setLoading, formData: fd, user, setFormData: setWorks, setFeetback, hasFile: true});
        setAddWork(true)
    }
    const InfoDataSaver = () => {
        setAddWork(false)
        const url = "/kyc-years-experience/create";
        saveData({url, setLoading, formData: sectionTwoData, user, setFormData: setSectionTwoData, setFeetback, hasFile: false});
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'name' && (newValue = { name: newVal });
        variable === 'value' && (newValue = { value: newVal });
        variable === 'date' && (newValue = { date: newVal });
        variable === 'document' && (newValue = { document: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    };
    let newInfoValue = {};
    const updateSectionTwo = (newVal, variable) => {
        variable === 'company_involvement' && (newInfoValue = { company_involvement: newVal });
        variable === 'years_of_experience' && (newInfoValue = { years_of_experience: newVal });
        setSectionTwoData({
            ...sectionTwoData,
            ...newInfoValue,
        });
    };
  return (
    <div className='lg:px-4 scale-ani'>
        <div>
            <label>List the most relevant jobs by monetary value with other companies (and all jobs done with BOG Limited) and date of execution (provide support documents if any) </label>
                
            {myWorks.map((res, i) => (
                <div className='mb-5'>
                    <label className='fw-500'>Job {i + 1}</label>
                    <input
                        value={res.name}
                        onChange={(e) => updateValue(e.target.value, "organisation_name")}
                        type="text"
                        disabled
                        placeholder="Name"
                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                    />
                    <input
                        value={res.value}
                        onChange={(e) => updateValue(e.target.value, "organisation_name")}
                        type="number"
                        disabled
                        placeholder="Value(NGN)"
                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                    />
                    <input
                        value={res.date?.split("T")[0]}
                        onChange={(e) => updateValue(e.target.value, "organisation_name")} 
                        type="date"
                        disabled
                        placeholder="Date"
                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                    />
                    <div className="flex justify-between mt-3">
                        <a href={res.fileUrl} className="mt-5 text-blue-600">view document</a>
                        <button onClick={() => hasFileDelete({url: "kyc-work-experience", id: res.id, user, setLoading, setData:setWorks, setFeetback})} className="btn-primary bg-red-600 lg:px-7">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            {myWorks.length === 0 || addWork ? <div className='mt-5'>
                <label className='fw-500'>New Job</label>
                <input
                    value={formData.name}
                    onChange={(e) => updateValue(e.target.value, "name")}
                    type="text"
                    placeholder="Name"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
                <input
                    value={formData.value}
                    onChange={(e) => updateValue(e.target.value, "value")}
                    type="number"
                    placeholder="Value(NGN)"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
                <input
                    value={formData.date}
                    onChange={(e) => updateValue(e.target.value, "date")} 
                    type="date"
                    placeholder="Date"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
                <input
                    name="document"
                    onChange={(e) => setDoc(e.target.files[0])}
                    type="file"
                    placeholder="Documents"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
                {loading ? <Spinner /> : <button onClick={WorkDataSaver} className="btn-primary my-2 bg-green-600 lg:px-7">
                        Save
                </button>}
            </div>
            : 
            <button className="btn-primary lg:px-7 my-5" onClick={()=> setAddWork(true)}>Add Job Experience</button>
        }
        </div>
        <div className="border p-4 mt-6">
            <div className='mt-3'>
                <label>Number of experience(years) as a contractor/sub-contractor</label>
                <input
                    value={sectionTwoData.years_of_experience}
                    type="number"
                    onChange={(e) => updateSectionTwo(e.target.value, "years_of_experience")}
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
            </div>
            <div className='mt-3'>
                <label>If the company is a subsidiary, what involvement, if any, will the parent company have?</label>
                <textarea
                    value={sectionTwoData.company_involvement}
                    onChange={(e) => updateSectionTwo(e.target.value, "company_involvement")}
                    className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
                />
            </div>
            {loading ? <Spinner /> : <button onClick={InfoDataSaver} className="btn-primary my-2 bg-green-600 lg:px-7">
                    Save
            </button>}
        </div>
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(3)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(5)}>Next</p>
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
