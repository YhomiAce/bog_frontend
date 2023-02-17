import { Button } from "@material-tailwind/react"

const AddressInfoModal = ({ CloseModal, address }) => {

    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form>
                    <h3>Address Details</h3>
                    <div className="mt-5">
                        <label className="block">Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.title}
                        />
                    </div>
                    
                    <div className="mt-5">
                        <label className="block">Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.address}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">Zipcode</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.zipcode}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">State</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.state}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">Country</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.country}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">Charge</label>
                        <input
                            type="number"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={address.charge}
                        />
                    </div>
                </form>
                <div className="mt-8 flex justify-end">
                    <Button className='mt-3' color="red" onClick={CloseModal}>Close</Button>
                    &nbsp;
                    <Button className='mt-3' color="green" onClick={() => console.log(123)}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddressInfoModal