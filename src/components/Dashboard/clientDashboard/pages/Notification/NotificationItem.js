import { RiDeleteBin5Line } from 'react-icons/ri';
import ReactTimeAgo from 'react-time-ago';
import Axios from '../../../../../config/config';
import { markNotificationAsRead } from '../../../../../services/endpoint';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

const NotificationItem = ({item}) => {
    const readNotification = async () => {
        await markNotificationAsRead(item.id)
    }
    const deleteNotification = async(id) => {
        try {
            await Axios.delete(`/notifications/delete/${id}`);
            toaster.notify(
                "Notification deleted",
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    return (
        <div className="flex items-center relative mt-7 lg:mt-12" onClick={readNotification}>
            <div className="w-3/12 lg:w-auto">
                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
            </div>
            <div className="lg:pl-6">
                <p className="text-gray-600"><span className="text-black">BOG Admin</span> {item.message} </p>
                <p className="fs-400 text-gray-500"><ReactTimeAgo date={Date.parse(item.createdAt)} locale="en-US"/></p>
            </div>
            <RiDeleteBin5Line onClick={() => deleteNotification(item.id)} className='absolute text-red-500 cursor-pointer hover:scale-105 top-0 right-4'/>
        </div>
    )
}

export default NotificationItem