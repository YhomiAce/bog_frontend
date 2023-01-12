import React from 'react'

export const JobExecution = ({handleOpen}) => {
  return (
    <form className='lg:px-4 scale-ani'>
        <div>
            <label>List the most relevant jobs by monetary value with other companies (and all jobs done with BOG Limited) and date of execution (provide support documents if any) </label>
            <div className='mt-2'>
                <label className='fw-500'>Job 1</label>
                <input type="text" placeholder="Name" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="text" placeholder="Value(NGN)" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="date" placeholder="Date" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="file" placeholder="Documents" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            </div>
            <div className='mt-2'>
                <label className='fw-500'>Job 2</label>
                <input type="text" placeholder="Name" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="text" placeholder="Value(NGN)" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="date" placeholder="Date" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="file" placeholder="Documents" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            </div>
            <div className='mt-2'>
                <label className='fw-500'>Job 3</label>
                <input type="text" placeholder="Name" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="text" placeholder="Value(NGN)" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="date" placeholder="Date" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
                <input type="file" placeholder="Documents" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
            </div>
        </div>
        <div className='mt-3'>
            <label>Number of experience(years) as a contractor/sub-contractor</label>
            <input type="number" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='mt-3'>
            <label>If the company is a subsidiary, what involvement, if any, will the parent company have?</label>
            <textarea className='w-full p-2 mt-2 border border-gray-400 rounded h-24'/>
        </div>
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(3)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(5)}>Next</p>
        </div>
    </form>
  )
}
