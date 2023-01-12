import React from 'react'

export const GeneralInfo = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div>
            <label>Name of Organisation</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Email Address</label>
            <input type="text" className='w-full p-2 mt-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Office Telephone / Contact No</label>
            <input type="text" className='w-full p-2 mt-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label className=''>Type of Registration</label>
            <div className='flex items-center mt-2'>
                <input type="radio" name='tor' className=''/>
                <label className='ml-2'>Incorporation</label>
            </div>
            <div className='flex items-center'>
                <input type="radio" name='tor' className=''/>
                <label className='ml-2'>Registered Business Name</label>
            </div>
        </div>
        <div className='mt-3'>
            <label>Incorporation / Registration No</label>
            <input type="text" className='w-full p-2 mt-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Business Address</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>
        <div className='mt-3'>
            <label>Address of other significant operational base (including Email/Telephone)</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>  
        <div className='pt-8 flex justify-end'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(2)}>Next</p>
        </div>
    </form>
  )
}
