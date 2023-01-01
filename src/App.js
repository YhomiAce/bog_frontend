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
// import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/pages/ResetPassword';

import ClientDashboard from './components/Dashboard/clientDashboard';
import AdminLogin from './components/pages/AdminLogin';
import Contact from './components/pages/Contact';
import Faqs from './components/pages/FAQs';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop';
import ProductDetail from './components/pages/ProductDetail';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Service from './components/pages/Service';
import About from './components/pages/About';
import JoinTeam from './components/pages/JoinOurTeam';
import ScrollToTop from './components/layouts/Scroll';
import { Cart } from './components/pages/Cart';
import BlogPage from './components/pages/BlogPage';
import { updateCart } from './redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import { OrderSuccess } from './components/pages/OrderSuccess';
import { BAP } from './components/pages/BAP';
import Refund from './components/pages/Refund';

if (localStorage.auth_token) {
  setAuthToken(localStorage.auth_token);
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log( (store.getState().auth.user));
    // if (store.getState().auth.isAuthenticated) store.dispatch(getMe());
    if(localStorage.carts){
      dispatch(updateCart())
    }
    store.dispatch(getMe());
  });

  return (
    <div className="">
      {/* <Alert /> */}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/become-partner' element={<BAP />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blognews/:blogId' element={<BlogPage />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/jointeam' element={<JoinTeam />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:itemId' element={<ProductDetail />} />
        <Route path='/ordersuccess' element={<OrderSuccess />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/return' element={<Refund />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup/*' element={<SignupIndex />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/verifyemail' element={<Userauth />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        {/* <Route path='/dashboard/*' element={<Dashboard />} /> */}

        <Route path='/dashboard/*' element={<ClientDashboard />} />
        <Route path='/admin' element={<AdminLogin />} />
      </Routes>
    </div>

  );
}

export default App;
