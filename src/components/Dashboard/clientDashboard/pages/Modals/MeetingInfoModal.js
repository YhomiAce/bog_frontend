import { Button } from "@material-tailwind/react"

const MeetingInfoModal = ({ CloseModal, meeting }) => {

    return (
        <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
            <div className="bg-white px-4 lg:w-5/12 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <form>
                    <h3>Meeting Details</h3>
                    <div className="mt-5">
                        <label className="block">Meeting Link</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={meeting.meeting_info.join_url}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="block">Meeting Password</label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                            value={meeting.meeting_info.password}
                        />
                    </div>
                </form>
                <div className="mt-8 flex justify-end">

                    <Button className='mt-3' color="red" onClick={CloseModal}>Close</Button>
                </div>
            </div>
        </div>
    )
}

export default MeetingInfoModal