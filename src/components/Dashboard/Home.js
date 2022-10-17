import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

const Home = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    console.log(user);
    return (
        <div className='container mx-auto'>
            <h3>Welcome {user?.name}</h3>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}

export default Home