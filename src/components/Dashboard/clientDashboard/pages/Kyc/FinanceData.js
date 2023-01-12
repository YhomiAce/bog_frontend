import React from 'react'

export const FinanceData = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div>
                <label>Bank Account Holder Name</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
                <label>Bank Name</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
                <label>Bank Account Number</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Name and address of banker(s) from whom references can be obtained, if necessary</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>
        <div className='mt-3'>
            <label>Type of Account</label>
            <div className='flex items-center mt-3'>
                <input type="radio" name='toa' className='mr-2'/>
                <label>Current Account</label>
            </div>
            <div className='flex items-center'>
                <input type="radio" name='toa' className='mr-2'/>
                <label>Savings Account</label>
            </div>
            <div className='mt-3'>
                <label>Level of current overdraft facility</label>
                <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            </div>
            <div className='pt-8 flex justify-between'>
                <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(5)}>Previous</p>
                <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(7)}>Next</p>
            </div>
        </div>
    </form>
  )
}
