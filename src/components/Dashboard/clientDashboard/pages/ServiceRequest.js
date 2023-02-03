import React from 'react'
import { useState } from 'react'
import { HiOutlineIdentification } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import useFetchHook from '../../../../hooks/useFetchHook'
import Spinner from '../../../layouts/Spinner'
import AssignProject from './projects/Modal/AssignProject'
import ViewQoute from './projects/Modal/ViewQoute'
import RequestItem from './projects/RequestItem';

export const ServiceRequest = () => {
    const { projectId } = useParams();
    const [qoute, setQoute] = useState(false)
    const [assign, setAssign] = useState(false)
    const [selected, setSelected] = useState(null);
    const { loading, data } = useFetchHook(`/projects/bids/${projectId}`);

    const CloseModal = () => {
        setQoute(false)
        setAssign(false)
    }

    const openQoute = (item) => {
        setSelected(item)
        setQoute(true)
    }
    const openAssign = (item) => {
        setSelected(item)
        setAssign(true)
    }

    if (loading) {
        return <center>
            <Spinner />
        </center>
    }

    return (
        <div className='min-h-screen'>
            <div className='px-3 py-10 bg-white'>
                <p className='fw-600 text-xl pb-3'>Project Request(s) from service partner(s)</p>
                <p className='flex items-center fw-500'><span className='pr-1 text-primary'><HiOutlineIdentification /></span> Project Id: <span className='text-primary pl-6'>BOG/PRJ/GTI/1071215520</span></p>
            </div>
            <div className='lg:p-5 px-3'>
                <div className='lg:grid-2 gap-4 justify-evenly'>
                    {
                        data && data.bids.length > 0 ? data.bids.map(item => (
                            <RequestItem
                                key={item.id}
                                item={item}
                                openAssignModal={openAssign}
                                openQouteModal={openQoute}
                                selectedItem={selected}
                                project={data.project}
                            />
                        )) : null
                    }
                    
                </div>
            </div>
            {
                qoute && (
                    <ViewQoute item={selected} closeModal={CloseModal} project={data.project} />
                    
                )
            }
            {
                assign && (
                    <AssignProject item={selected} closeModal={CloseModal} project={data.project} />
                )
            }
        </div>
    )
}
