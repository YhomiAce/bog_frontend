import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

const DispatchProjectModal = ({closeModal, dispatchProject}) => {
    const [score, setScore] = useState(0);

    const submitProjectToPartners = () => {
        dispatchProject(score);
        closeModal();
    }

    return (
        <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
            <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <div className="flex lg:px-6 px-5">
                    <form>
                        <p className='fs-700'>Dispatch Project to Service Partners with score.</p>
                        <div className='flex items-center mt-5'>
                            <p>Enter score for selecting service partner</p>
                            <div className='flex items-center border rounded ml-4 w-24'>
                                <input type='number' value={score} onChange={(e) => setScore(e.target.valueAsNumber)} className='w-10/12 p-1'/>
                                <p className='p-1 fw-600'>%</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button variant="outlined" ripple={true} onClick={closeModal}>Close</Button>
                    <Button className='bg-primary ml-4' onClick={submitProjectToPartners}>Dispatch Project</Button>
    
                </div>
            </div>
        </div>
      )
}

export default DispatchProjectModal