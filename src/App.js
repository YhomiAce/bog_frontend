import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Login from './components/pages/Login';
import SignupIndex from './components/pages/SignupIndex';
import Homepage from './components/pages/Homepage';
import Forget from './components/pages/Forget';
import Userauth from './components/pages/Emailauth';
// import Alert from './components/layouts/Alert';
import { getMe } from './redux/actions/authAction';
import store from './store';
import setAuthToken from './config/setAuthHeader';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/pages/ResetPassword';

import ClientDashboard from './components/Dashboard/clientDashboard';

if (localStorage.auth_token) {
  setAuthToken(localStorage.auth_token);
}

function App() {
  useEffect(() => {
    // console.log(store.getState().auth);
    store.dispatch(getMe());
  }, []);
  return (
    <section className="container">
      {/* <Alert /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup/*' element={<SignupIndex />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/verifyemail' element={<Userauth />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/dashboard/*' element={<Dashboard />} />

        <Route path='/clientdashboard/*' element={<ClientDashboard />} />
      </Routes>
    </section>

  );
}

export default App;
