import React from 'react'

export const SendMessage = () => {
  return (
    <div>
        <form>
            <div>
               <label>Title of Message</label>
               <input type="text" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" />
            </div>
            <div className='mt-4'>
                <label>Message Body</label>
                <textarea className="w-full  border border-gray-400 rounded mt-2 py-2 px-2 h-28"></textarea>
            </div>
            <div className='mt-4'>
                <label>Reciever Option</label>
                <select className="w-full  border border-gray-400 rounded mt-2 py-2 px-2">
                    <option>All</option>
                    <option>All Clients</option>
                    <option>All Private Clients</option>
                    <option>All Corporate Clients</option>
                    <option>All Product Partners</option>
                    <option>All Service Partners</option>
                </select>
            </div>
            <div className='lg:flex'>
                <div className='mt-4 lg:w-6/12 lg:pr-2'>
                    <label>Attachment</label>
                    <input type="file" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" />
                </div>
                <div className='mt-4 lg:w-6/12 lg:pl-2'>
                    <label>Expiration Date</label>
                    <input type="date" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" />
                </div>
            </div>
            <div className='mt-8'>
                <button className='w-full btn-primary'>Send Message</button>
            </div>
        </form>
    </div>
  )
}
