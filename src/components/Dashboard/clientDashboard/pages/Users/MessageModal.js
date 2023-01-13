import React from 'react'
import {FaTimes} from "react-icons/fa"

export const MessageModal = ({closeModal, message}) => {
  return (
    <div>
        <FaTimes style={{cursor: "pointer"}} className="absolute right-6 top-6 text-red-500" onClick={closeModal}/>
        <p className='fw-600 text-lg'>{message.title}</p>
        <div className='mt-6 lg:mt-10 mb-5'>
            <p>
              {message.content}
            </p>
            
        </div>
    </div>
  )
}
