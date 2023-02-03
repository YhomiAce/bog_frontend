/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import { fetchAdminNotifications } from '../redux/actions/notifications';

const FetchAdminNotification = () => {
    const dispatch = useDispatch();
    const socket = io(`${process.env.REACT_APP_API_URL}`,);

    useEffect(() => {
        socket.on("getNotifications", (payload) => {
            console.log(payload);
            dispatch(fetchAdminNotifications(payload))
          })
    }, [dispatch])
  return null
}

export default FetchAdminNotification
