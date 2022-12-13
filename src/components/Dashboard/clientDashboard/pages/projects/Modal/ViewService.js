import { Button } from '@material-tailwind/react';
import React from 'react';


const ViewService = ({ CloseModal, item }) => {
    
    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form>
                    <div className="mt-5">
                        <label className="block">Service Type Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            required
                            id='name'
                            name='name'
                            value={item.title}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">Service Type Description</label>
                        <textarea
                            className="w-full h-54 border border-gray-400 rounded mt-2 p-2"
                            required
                            id="description"
                            name="description"
                            value={item.description}
                        ></textarea>
                    </div>
                </form>
                <div className="mt-8 flex justify-end">

                <Button className='mt-3' color="red" onClick={CloseModal}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default ViewService