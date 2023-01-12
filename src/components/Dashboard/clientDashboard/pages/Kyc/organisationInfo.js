import React from 'react'

export const OrganisationInfo = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div className=''>
            <label>Type of organisation</label>
            <select className='w-full mt-2 p-2 border border-gray-400 rounded'>
                <option>Sole Proprietorship</option>
                <option>Partnership</option>
                <option>Joint Venture</option>
                <option>Limited Liability</option>
                <option>Others(Specify below)</option>
            </select>
        </div>
        <div className='mt-3'>
            <label>Others(Specify)</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Date of Incorporation / Registration</label>
            <input type="date" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Director's Details</label>
            <input type="text" placeholder='Full Name' className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            <input type="text" placeholder='Designation'  className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            <input type="text" placeholder='Phone number'  className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            <input type="text" placeholder='Email'  className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Contact Person</label>
            <input type="text" placeholder='Phone number'  className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            <input type="text" placeholder='Email'  className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Please mention other companies operated</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>  
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(1)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(3)}>Next</p>
        </div>
    </form>
  )
}
