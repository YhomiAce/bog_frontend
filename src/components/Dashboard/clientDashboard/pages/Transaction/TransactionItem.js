import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Axios from '../../../../../config/config';
import { formatNumber } from '../../../../../services/helper';
import Spinner from '../../../../layouts/Spinner';

export const TransactionDetails = () => {

    const { search } = useLocation();
    const userId = new URLSearchParams(search).get("transactId");
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [moreDetails, setMoreDetails] = useState(false);

    const fetchTransactDetails = async (transactId) =>{
        try {
            setLoading(true);
            const url = `/transaction?txn=${transactId}`
            await Axios.get(url)
            const res = await Axios.get(url);
            const datas = res.data
            console.log(datas)
            setItem(res.data);
            setLoading(false);
            setMoreDetails(true)
            return datas;
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect (() => {
        fetchTransactDetails(userId)  // eslint-disable-next-line 
    }, []) ;


  if (loading){
    return <center><Spinner /></center>
  }   

  return (
    <div className='min-h-screen p-5'>
        {
            moreDetails && (
                <div className=''>
                    <div className='p-8 bg-white flex shadow-md'>
                        <p className='fw-600 lg:text-xl'>Transaction Id :</p><p className='text-primary lg:text-xl pl-4 fw-600'>{item.TransactionId}</p>
                    </div>
                    <div className='lg:grid-2 mt-6 lg:mt-6 justify-between'>
                        <div className='p-6 bg-white shadow-md' >
                            <p className='fw-600 lg:text-lg'>Transaction Details</p>
                            <div className='mt-6'>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Transaction ID:</p>
                                    <p className='w-8/12'>{item?.TransactionId}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Transaction Date:</p>
                                    <p className='w-8/12'>{dayjs(item?.createdAt).format('DD-MMM-YYYY')}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Payment Reference:</p>
                                    <p className='w-8/12'>{item?.paymentReference}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Amount:</p>
                                    <p className='w-8/12'>{formatNumber(item?.amount)}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Transaction Status:</p>
                                    <p className='w-8/12'>{item?.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 bg-white shadow-md'>
                            <p className='fw-600 lg:text-lg'>User Details</p>
                            <div className='mt-6'>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>User Name:</p>
                                    <p className='w-8/12'>{item?.user?.name}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>User Account Type:</p>
                                    <p className='w-8/12'> {item?.user?.userType}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>User Email:</p>
                                    <p className='w-8/12'>{item?.user?.email}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Transaction Type:</p>
                                    <p className='w-8/12'>{item?.type}</p>
                                </div>
                                <div className='border-b py-2 flex'>
                                    <p className='fw-500 w-4/12'>Transaction Description:</p>
                                    <p className='w-8/12'>{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}
