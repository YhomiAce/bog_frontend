/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { fetcherForFiles, hasFileDelete, saveData } from './DataHandler';

export const UploadDoc = ({handleOpen}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [allDocuments, setAllDocuments] = useState()
    const [formData, setFormData] = useState({});
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && fetcherForFiles({url: "kyc-documents",user, setData: setAllDocuments})
        setDataLoaded(true);
    }, [])
    const DataSaver = () => {
        const url = "/kyc-documents/create";
        const fd = new FormData();
        const allDocValues = Object.values(formData)
        const allKeys = Object.keys(formData)
        for (let i = 0; i < allDocValues.length; i++) {
            fd.append(allKeys[i], allDocValues[i]);
        }
        fd.append("userType", user.userType);
        saveData({url, setLoading, formData: fd, user, setFormData: setAllDocuments, setFeetback, hasFile: true});
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        newValue[variable] = newVal
        setFormData({
            ...formData,
            ...newValue,
        });
    };
    const isUploaded = (name) => {
        return allDocuments?.filter(doc => doc.name === name && doc);
    }
    const openDoc = (url) => {
        console.log(url)
        window.open(url, "_blank")
    }
    const SelectFile = ({proposedFileArray, isUploaded}) => {
        const myFiles = proposedFileArray.map((file, i) => {
            const uploaded = isUploaded(file.as)
            if(uploaded.length === 0) {
                return (
                    <div className="mt-3" key={i}>
                        <label>{file.title}</label>
                        <input
                            type="file"
                            name={file.as}
                            onChange={(e) => updateValue(e.target.files[0], file.as)}
                            className='w-full mt-2 p-2 border border-gray-400 rounded'
                        />
                    </div>
                )
            }else{
                return (
                    <div className="mt-3"  key={i}>
                        <label>{file.title}</label><div className="flex justify-between">
                            <h5 onClick={() => openDoc(uploaded[0].file)}  className="mt-3 cursor-pointer text-blue-600">view document</h5>
                            <button onClick={() => hasFileDelete({url: "kyc-documents", id: uploaded[0].id, user, setLoading, setData: setAllDocuments, setFeetback}) } className="btn-primary bg-red-600 lg:px-7">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }
        })
        return myFiles
    }
    const fileList = [
        {title: "Company's Corporate Profile", as: "Company_Corporate_Profile"},
        {title: "Organizational Chart", as: "Organizational_Chart"},
        {title: "Certificate of Incorporation / Registration", as: "Certificate_of_Registration"},
        {title: "Corporate Affairs Commission Schedule of Directors form (CO7), and Statement of Allotment of Shares form (CO2)", as: "CAC"},
        {title: "Memorandum and Articles of Association", as: "Memorandum_of_Association"},
        {title: "Health, Safety and Environmental (HSE) Policies", as: "HSE_Policies"},
        {title: "Quality Management Procedure", as: "Quality_Management_Procedure"},
        {title: "Three years TAX Clearance Certificate", as: "TAX_Certificate"},
        {title: "VAT Registration Certificate", as: "VAT_Certificate"},
        {title: "A reference letter from the company's bank", as: "reference_from_bank"},
        {title: "Company's six(6) months bank statement", as: "Company_statement"},
        {title: "Workmen's Compensation Insurance (NSITF)", as: "Workmen_Insurance_NSITF"},
        {title: "One(1) passport sized photograph of MD/Rep and all other directors", as: "passport_of_MD"},
        {title: "Last three(3) years audited financials of the company ", as: "audited_financials"},
        {title: "Three(3) sided photograph of Operational Area and Main Entrance", as: "photograph_of_operational"},
        {title: "Passport of vendors and all directors", as: "Passport_of_vendors"},
        
    ]
  return (
    <form className='lg:px-4 scale-ani'>
        {allDocuments ? <SelectFile isUploaded={isUploaded} proposedFileArray={fileList} /> : <Spinner />}
        <div className=''>
            {!loading ?
                <div className='pt-8 flex justify-end'>
                    <button onClick={DataSaver} className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>
                        Save
                    </button>
                </div>                :
                <Spinner />
            }
        </div>
        {
            feedback &&
                <ActionFeedBack
                    closeFeedBack={() => setFeetback(false)}
                    title={feedback.title}
                    icon={feedback.icon}
                    info={feedback.info}
                    status={feedback.status}
                />
        }
    </form>
  )
}
