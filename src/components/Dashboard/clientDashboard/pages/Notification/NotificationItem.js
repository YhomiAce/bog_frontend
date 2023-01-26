import { RiDeleteBin5Line } from 'react-icons/ri';
import ReactTimeAgo from 'react-time-ago';
import { markNotificationAsRead } from '../../../../../services/endpoint';
import "toasted-notes/src/styles.css";
import { useDispatch } from 'react-redux';
import { deleteAdminNotification, deleteUserNotification } from '../../../../../redux/actions/notifications';


const NotificationItem = ({ item, isAdmin }) => {
    const dispatch = useDispatch();
    const readNotification = async () => {
        await markNotificationAsRead(item.id)
    }
    const deleteNotification = async (id) => {
        if (isAdmin) {
            console.log({isAdmin});
            dispatch(deleteAdminNotification(id))
        }else{
            deleteUserNotification(id)
        }
    }

    return (
        <div className="flex items-center relative mt-7 lg:mt-12" onClick={readNotification}>
            <div className="w-3/12 lg:w-auto">
                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
            </div>
            <div className="lg:pl-6">
                <p className="text-gray-600 pr-5"><span className="text-black">BOG Admin</span> {item.message} </p>
                <p className="fs-400 text-gray-500"><ReactTimeAgo date={Date.parse(item.createdAt)} locale="en-US" /></p>
            </div>
            <p className='top-0 right-4 absolute w-6 h-6 bg-gray-200 circle grid place-content-center'><RiDeleteBin5Line onClick={() => deleteNotification(item.id)} className='text-red-500 cursor-pointer hover:scale-105 ' /></p>
        </div>
    )
}

export default NotificationItem