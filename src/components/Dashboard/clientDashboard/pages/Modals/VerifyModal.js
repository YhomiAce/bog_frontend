import { Button } from '@material-tailwind/react'
import React from 'react'


export const VerifyModal = ({setVerify}) => {

    const CloseModal = () => {
        setVerify(false)
    }
    
  return (
    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
        <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
            <div className="flex lg:px-6 px-5">
                <form>
                    <p className='fs-700'>Verify and Rate this partner to render services to clients on this platform.</p>
                    <div className='flex items-center mt-5'>
                        <p>Admin Rating</p>
                        <div className='flex items-center border rounded ml-4 w-24'>
                            <input type='number' className='w-10/12 p-1'/>
                            <p className='p-1 fw-600'>%</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                <Button color="black" variant="outlined" ripple={true} onClick={CloseModal}>Cancel</Button>
                <Button className='bg-primary ml-4'>Verify</Button>

            </div>
        </div>
    </div>
  )
}
