import React from 'react'

export const UploadDoc = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div>
            <label>Company's Corporate Profile</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Organizational Chart</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Certificate of Incorporation / Registration</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Corporate Affairs Commission Schedule of Directors form (CO7), and Statement of Allotment of Shares form (CO2)</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Memorandum and Articles of Association</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Health, Safety and Environmental (HSE) Policies</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Quality Management Procedure</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Three years TAX Clearance Certificate</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>VAT Registration Certificate</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>A reference letter from the company's bank</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Company's six(6) months bank statement</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Workmen's Compensation Insurance (NSITF)</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>One(1) passport sized photograph of MD/Rep and all other directors</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Last three(3) years audited financials of the company </label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Three(3) sided photograph of Operational Area and Main Entrance</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>Passport of vendors and all directors</label>
            <input type="file" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(6)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600'>Submit Form</p>
        </div>
    </form>
  )
}
