import React from 'react'

export const ProductKyc = () => {
  return (
    <div>
        <form>
            <div className='pb-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>General Information</p>
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
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>Organisation Info</p>
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
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>TAX Details and Permits</p>
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
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p  className='fw-500 pb-4 text-xl'>Work / Job Execution Experience</p>
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
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>Categories of supply</p>
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
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>Financial Data</p>
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
                </div>
            </div>
            <div className='py-6 border-b border-gray-300'>
                <p className='fw-500 pb-4 text-xl'>Required Doucments to be Uploaded</p>
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
            </div>
            <div className='my-6'>
                <button className='w-full btn-primary text-xl fw-500'>
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}
