import React from 'react'

export const TaxDetails = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div>
            <label>VAT Registration Number</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Tax Identification Number</label>
            <input type="text" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>List of Relevant statutory/professional bodies registered with</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(2)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(4)}>Next</p>
        </div>
    </form>
  )
}
