import ReactTimeAgo from 'react-time-ago';
import { markNotificationAsRead } from '../../../../../services/endpoint';

const NotificationItem = ({item}) => {
    const readNotification = async () => {
        await markNotificationAsRead(item.id)
    }
    return (
        <div className="flex items-center mt-7 lg:mt-12" onClick={readNotification}>
            <div className="w-3/12 lg:w-auto">
                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
            </div>
            <div className="lg:pl-6">
                <p className="text-gray-600"><span className="text-black">BOG Surveyor</span> {item.message} </p>
                <p className="fs-400 text-gray-500"><ReactTimeAgo date={Date.parse(item.createdAt)} locale="en-US"/></p>
            </div>
        </div>
    )
}

export default NotificationItem