import React from 'react'

export const SupplyCat = ({handleOpen}) => {
  return (
    <div className='lg:px-4 scale-ani'>
        <p className='fw-500 pb-4'>Check the categories of supply you offer</p>
        <div className='lg:flex'>
            <div className='lg:w-6/12'>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Marine</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Mechanical</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Electrical / Instrumentation</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Plumbing</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Carpentry</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Electronics / Household Materials</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>HSE</label>
                </div>
            </div>
            <div className='lg:w-6/12'>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Stationeries / Consumables</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Techanicals</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>ICT</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Paints</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Building Materials</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Special Services (show evidence)</label>
                </div>
                <div>
                    <input type="checkbox" className='mr-2' />
                    <label>Others (Specify below)</label>
                </div>
            </div>
        </div>
        <div>
            <input type="text" placeholder="Specify Others" className='w-full mt-2 p-2 border border-gray-400 rounded'/>
        </div>
        <div className='pt-8 flex justify-between'>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(4)}>Previous</p>
            <p className='w-36 rounded-lg py-3 text-center bg-primary text-white fw-600' onClick={() => handleOpen(6)}>Next</p>
        </div>
    </div>
  )
}
