/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { fetchUserNotifications } from '../redux/actions/notifications';

const FetchUserNotification = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.user);

    useEffect(() => {
        if(auth && auth.userType !== "admin"){
            const socket = io(`${process.env.REACT_APP_API_URL}`, {
                query: {
                    userId: auth.profile.id
                }
            });
            socket.on("getUserNotifications", (payload) => {
                const result = [...payload]
                dispatch(fetchUserNotifications(result))
            })
        }
    }, [dispatch, auth])
  return null
}

export default FetchUserNotification
