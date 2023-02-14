/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { fetchAdminNotifications } from '../redux/actions/notifications';

const FetchAdminNotification = () => {
    const dispatch = useDispatch();
    const socket = io(`${process.env.REACT_APP_API_URL}`,);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
      if(user?.userType === "admin"){
        socket.on("getNotifications", (payload) => {
            dispatch(fetchAdminNotifications(payload))
          })
      }
    }, [dispatch, user])
  return null
}

export default FetchAdminNotification
