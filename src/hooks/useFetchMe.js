import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../redux/actions/authAction';

const FetchMe = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.user);
    useEffect(() => {
        if (!auth) {
            dispatch(getMe());            
        }
    }, [dispatch, auth])
  return null
}

export default FetchMe