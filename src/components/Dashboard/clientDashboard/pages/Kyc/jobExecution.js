/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { FcDeleteDatabase } from 'react-icons/fc'
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { hasFileDelete, fetcherForFiles, saveData } from './DataHandler';

export const JobExecution = ({handleOpen}) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [doc, setDoc] = useState()
    const [addWork, setAddWork] = useState(false)
    const [myWorks, setWorks] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        value: "",
        date: "",
        company_involvement: "",
        years_of_experience: ""
    });
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && fetcherForFiles({ url:"kyc-work-experience", user, setData:setWorks})
        setDataLoaded(true);
    }, [])

    const DataSaver = () => {
        const url = "/kyc-work-experience/create";
        const fd = new FormData();
        fd.append(`document`, doc);
        fd.append("name", formData.name);
        fd.append("value", formData.value);
        fd.append("date", formData.date);
        fd.append("years_of_experience", formData.years_of_experience);
        fd.append("company_involvement", formData.company_involvement);
        fd.append("userType", user.userType)
        saveData({url, setLoading, formData: fd, user, setFormData: setWorks, setFeetback, hasFile: true});
        setAddWork(true)
    }
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'name' && (newValue = { name: newVal });
        variable === 'value' && (newValue = { value: newVal });
        variable === 'date' && (newValue = { date: newVal });
        variable === 'document' && (newValue = { document: newVal });
        variable === 'years_of_experience' && (newValue = { years_of_experience: newVal });
        variable === 'company_involvement' && (newValue = { company_involvement: newVal });

        setFormData({
            ...formData,
            ...newValue,
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
                    <p className="mt-2">{res.years_of_experience} years of experience</p>
                    <p className="mt-2">{res.company_involvement}</p>
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
                <div className='mt-3'>
            <label>Number of experience(years) as a contractor/sub-contractor</label>
            <input
                
                type="number"value={formData.years_of_experience}
                onChange={(e) => updateValue(e.target.value, "years_of_experience")}
                className='w-full mt-2 p-2 border border-gray-400 rounded'
            />
        </div>
        <div className='mt-3'>
            <label>If the company is a subsidiary, what involvement, if any, will the parent company have?</label>
            <textarea
                value={formData.company_involvement}
                onChange={(e) => updateValue(e.target.value, "company_involvement")}
                className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
            />
        </div>
        {loading ? <Spinner /> : <button onClick={DataSaver} className="btn-primary bg-green-600 lg:px-7">
                Save
        </button>}
            </div>
            : 
            <button className="btn-primary lg:px-7 my-5" onClick={()=> setAddWork(true)}>Add Job Experience</button>
        }
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


export const NewApp = () => {

    const [formValues, setFormValues] = useState([{ name: "", email : ""}])
    const [mini, setMini] = useState(false)

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline mt-6" key={index}>
              <div className='flex bg-light p-5 rounded-lg justify-between items-center'>
                <p className='fw-600 text-lg'>Job Entry {index + 1}</p>
                <p className='flex items-center'> {
                        index ? 
                            <button type="button"  className="mr-4 text-xxl" onClick={() => removeFormFields(index)}><FcDeleteDatabase/></button> 
                            : null
                    }
                    {mini? <BsDashCircleFill className='text-primary text-xl' onClick={() => setMini(false)}/> : <BsPlusCircleFill className='text-primary text-xl' onClick={() => setMini(true)}/>}</p>
              </div>
              {
                mini && (
                    <div className='px-5'>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 lg:pr-3 mt-5'>
                                <label className='fw-500'>Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={element.name || ""} 
                                    onChange={e => handleChange(index, e)} 
                                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                                    />
                            </div>
                            <div className='lg:w-6/12 lg:pl-3 mt-5'>
                                <label className='fw-500'>Value (NGN)</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={element.name || ""} 
                                    onChange={e => handleChange(index, e)} 
                                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                                    />
                            </div>
                        </div>
                        <div className='lg:flex'>
                                <div className='lg:w-6/12 lg:pr-3 mt-5'>
                                    <label className='fw-500'>Date</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={element.name || ""} 
                                        onChange={e => handleChange(index, e)} 
                                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                                        />
                                </div>
                                <div className='lg:w-6/12 lg:pl-3 mt-5'>
                                    <label className='fw-500'>Provisional Document</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={element.name || ""} 
                                        onChange={e => handleChange(index, e)} 
                                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                                        />
                                </div>
                        </div>
                        <div className='mt-5'>
                            <label className='fw-500'>Number of experience(years) as a contractor/sub-contractor</label>
                            <input 
                                type="number" 
                                name="name" 
                                value={element.name || ""} 
                                onChange={e => handleChange(index, e)} 
                                className='w-full mt-2 p-2 border border-gray-400 rounded'
                                />
                        </div>
                        <div className='mt-5'>
                            <label className='fw-500'>If the company is a subsidiary, what involvement, if any, will the parent company have?</label>
                            <textarea
                                type="number" 
                                name="name" 
                                value={element.name || ""} 
                                onChange={e => handleChange(index, e)} 
                                className='w-full mt-2 h-24 p-2 border border-gray-400 rounded'
                                />
                        </div>
                    </div>
                )
              }
            </div>
          ))}
          <div className="mt-10 flex justify-between items-center">
              <button className='rounded-lg px-2 lg:px-6 py-3 text-center bg-secondary text-white fw-600' type="button" onClick={() => addFormFields()}>Add Job Experience</button>
              <button className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' type="submit">Save</button>
          </div>
      </form>
    )
}

