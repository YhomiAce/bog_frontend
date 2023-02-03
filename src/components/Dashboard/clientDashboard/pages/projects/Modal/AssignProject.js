import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { assignProjectToPartner } from '../../../../../../redux/actions/ProjectAction';
import Spinner from '../../../../../layouts/Spinner';


const AssignProject = ({ closeModal, item, project }) => {
    const dispatch = useDispatch();
    const [ loading, setLoading] = useState(false);
    const saveLoading = () => {
        setLoading(false);
        closeModal();
    }

    const assignProject = () => {
        const payload = {
            projectId: project.id,
            estimatedCost: item.projectCost,
            totalCost: item.projectCost,
            duration: item.deliveryTimeLine,
            userId: item.userId,
        };
        dispatch(assignProjectToPartner(payload, saveLoading));
    }
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
            <div className="bg-white lg:w-4/12 rounded-md overflow-y-auto overscroll-none  w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <p className='fw-500 text-center py-12  px-4'>Are you sure you want to assign this project to {item.userDetails.name}</p>
                <div className='flex justify-between py-4 px-4 bg-light'>
                    <Button className='bg-red-600' onClick={closeModal}>Cancel</Button>
                    {
                        loading ? <Spinner /> :
                        <Button className='bg-primary' onClick={assignProject}>Assign Project</Button> 
                    }
                </div>
                <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={closeModal} />
            </div>
        </div>
    )
}

export default AssignProject