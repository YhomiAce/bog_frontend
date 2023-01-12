import React from 'react'
import {FaTimes} from "react-icons/fa"

export const MessageModal = ({closeModal}) => {
  return (
    <div>
        <FaTimes className="absolute right-6 top-6 text-red-500" onClick={closeModal}/>
        <p className='fw-600 text-lg'>BOG SERVICE REQUIREMENTS</p>
        <div className='mt-6 lg:mt-10 mb-5'>
            <p>Non exercitation culpa ex laborum veniam do dolor nulla non in sunt quis aute labore. Labore mollit duis magna voluptate deserunt anim sunt occaecat non veniam non magna. Incididunt eu consequat ea pariatur magna labore quis mollit.</p>
            <p className='mt-3'>Est velit eu velit ea occaecat fugiat dolore dolore. Minim commodo excepteur deserunt occaecat non eiusmod labore. Aute incididunt quis laboris incididunt. Labore velit laborum cillum occaecat commodo enim commodo eiusmod exercitation elit.</p>
            <p className='mt-3'>Est velit eu velit ea occaecat fugiat dolore dolore. Minim commodo excepteur deserunt occaecat non eiusmod labore. Aute incididunt quis laboris incididunt. Labore velit laborum cillum occaecat commodo enim commodo eiusmod exercitation elit.</p>
        </div>
    </div>
  )
}
