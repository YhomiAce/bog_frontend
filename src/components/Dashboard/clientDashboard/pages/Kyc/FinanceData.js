/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../../../layouts/Spinner';
import ActionFeedBack from '../Modals/ActionFeedBack';
import { loadData, saveData } from './DataHandler';

export const FinanceData = ({ handleOpen, tab }) => {
    const [loading, setLoading] = useState(false);
    const [isLoaded, setDataLoaded] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const [formData, setFormData] = useState({
        bank_name: "",
        account_name: "",
        account_number: "",
        account_type: "",
        overdraft_facility: "",
        banker_address: "",
    });
    const [isSaving, setIsSaving] = useState(false);
    const gotoPrev = () => {
        handleOpen(user.userType === "vendor" ? tab - 1 : user.userType === "professional" ? tab - 2 : tab - 1);
    }
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        !isLoaded && dataLoader()
        setDataLoaded(true);
        fetch(`https://api.sandbox.youverify.co/v2/api/identity/ng/bank-account-number/bank-list`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: '*cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: '*same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'token': 'l4Tdbpfm.TvTcG5VJXhgQvnyUc9O5R1WFVXSCAPpydNz8'
            },
        })
    }, [])

    const dataLoader = () => {
        const url = "/kyc-financial-data/fetch?userType=" + user.userType;
        loadData(url, formData, setFormData)
    }
    const DataSaver = () => {
        const url = "/kyc-financial-data/create";
        if (isSaving) {
            setIsSaving(false)
            saveData({ url, setLoading, formData, user, setFormData, setFeetback });
        } else {
            handleOpen(tab + 1);
        }
    }


    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'bank_name' && (newValue = { bank_name: newVal });
        variable === 'account_name' && (newValue = { account_name: newVal });
        variable === 'account_number' && (newValue = { account_number: newVal });
        variable === 'account_type' && (newValue = { account_type: newVal });
        variable === 'overdraft_facility' && (newValue = { overdraft_facility: newVal });
        variable === 'banker_address' && (newValue = { banker_address: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });

        if (variable === 'account_number') {
            const payload = {
                accountNumber: `${newVal}`,
                isSubjectConsent: true
            }
            axios.post(`https://api.sandbox.youverify.co/v2/api/identity/ng/bank-account-number/resolve`, payload);
        }

        setIsSaving(true)
    };

    return (
        <div className='lg:px-4 scale-ani'>
            <div>
                <label>Bank Account Holder Name</label>
                <input
                    name="account_name"
                    id="account_name"
                    value={formData.account_name}
                    onChange={(e) => { updateValue(e.target.value, "account_name") }}
                    type="text"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
            </div>
            <div className='mt-3'>
                <label>Bank Name</label>
                <input
                    name="bank_name"
                    id="bank_name"
                    value={formData.bank_name}
                    onChange={(e) => { updateValue(e.target.value, "bank_name") }}
                    type="text"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
            </div>
            <div className='mt-3'>
                <label>Bank Account Number</label>
                <input
                    name="account_number"
                    id="account_number"
                    value={formData.account_number}
                    onChange={(e) => { updateValue(e.target.value, "account_number") }}
                    type="number"
                    className='w-full mt-2 p-2 border border-gray-400 rounded'
                />
            </div>
            <div className='mt-3'>
                <label>Name and address of banker(s) from whom references can be obtained, if necessary</label>
                <textarea
                    name="banker_address"
                    id="banker_address"
                    value={formData.banker_address}
                    onChange={(e) => { updateValue(e.target.value, "banker_address") }}
                    className='w-full p-2 mt-2 border border-gray-400 rounded h-24'
                />
            </div>
            <div className='mt-3'>
                <label>Type of Account</label>
                <div className='flex items-center mt-3'>
                    <input
                        checked={formData.account_type === 'current'}
                        name="account_type"
                        value="current"
                        onChange={(e) => { updateValue(e.target.value, "account_type") }}
                        type="radio"
                        className='mr-2' />
                    <label>Current Account</label>
                </div>
                <div className='flex items-center'>
                    <input
                        checked={formData.account_type === 'savings'}
                        name="account_type"
                        value="savings"
                        onChange={(e) => { updateValue(e.target.value, "account_type") }}
                        type="radio"
                        className='mr-2'
                    />
                    <label>Savings Account</label>
                </div>
                <div className='mt-3'>
                    <label>Level of current overdraft facility</label>
                    <input
                        name="overdraft_facility"
                        id="overdraft_facility"
                        value={formData.overdraft_facility}
                        onChange={(e) => { updateValue(e.target.value, "overdraft_facility") }}
                        type="text"
                        className='w-full mt-2 p-2 border border-gray-400 rounded'
                    />
                </div>
                {loading ? <Spinner /> :
                    <div className='pt-8 flex justify-between lg:justify-end'>
                        <button onClick={gotoPrev} className='w-36 rounded-lg py-3 text-center bg-primary mr-10 text-white fw-600'>
                            Previous
                        </button>
                        <button onClick={DataSaver} className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>
                            Save & Continue
                        </button>
                    </div>
                }
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
