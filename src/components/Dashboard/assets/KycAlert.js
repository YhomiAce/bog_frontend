import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from '../../../config/config';
import { getMe } from '../../../redux/actions/authAction';

export const KycText = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [verified, setVerified] = useState('true');

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const checkSubscribe = (e) => {
    e.preventDefault();
    if (!user?.profile?.isVerified) {
      setVerified('false');
    }
    else {
      navigate("/dashboard/subscription");
    }
  }

  const reset = (value) => {
    setVerified('true');
  }

  return (
    <div className='items-center justify-between text-white bg-secondary fw-600 py-3 px-2 lg:px-4'>
      {!user?.profile?.hasActiveSubscription && (
        <>
        <div>
          Subscribe to one of our amazing plans to render services to clients. <button className='bg-primary rounded-lg px-2 py-1 ml-3' onClick={(e) => checkSubscribe(e)}>Subscribe</button>
        </div>
          {verified === 'false' && (<KycModal params={verified} resetVerified={reset} />)}
          </>
      )}
    </div>

  )
}

export const KycModal = ({ params, resetVerified }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const [modal, setModal] = useState(true)
  const [subModal, setSubModal] = useState(true);
  const [kyc, setKyc] = useState(false)

  const location = useLocation()

  const fetchKycDetails = async () => {
    try {
        const url = `/kyc/user-kyc/${user.id}?userType=${user.userType}`
        const authToken = localStorage.getItem("auth_token");
        const config = {
            headers:
            {
                "Content-Type": "application/json",
                'Authorization': authToken
            }

        }
        const res = await Axios.get(url, config);
        const kycs = res.data
        setKyc(kycs)
        console.log(kycs)
    } catch (error) {
        console(error)
    }
}
  useEffect(() => {
    fetchKycDetails() // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(location)
    if(location.pathname === '/dashboard/kyc') {
      CloseModal()
    }else if(location.pathname === '/dashboard/switch'){
      CloseModal()
    }
    else{
      OpenModal()
    }

  })

  const CloseModal= () => {
    setModal(false)
  }

  const OpenModal= () => {
    setModal(true)
  }

  const resetParams = () => {
    setSubModal(false)
    resetVerified('true');
  }

  if ((kyc) && (!kyc.isKycCompleted)) {
      return (
         modal && (
          <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40">
              <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                  <div className="lg:px-6 px-5">
                     <p className='text-3xl fw-600 text-secondary mb-4'>Welcome to BOG !</p>
                <p style={{ color: 'black' }}>Please complete your kyc to gain access to BOG services</p>
                  </div>
                  <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                      <Button className='bg-primary ml-4' onClick={() => navigate("/dashboard/kyc")}>Verify</Button>
                  </div>
              </div>
          </div>
          )
        
      )
  }

  if ((params === 'false')) {
    return (
        subModal && (<div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40">
          <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
            <div className="lg:px-6 px-5">
              <p className='text-3xl fw-600 text-secondary mb-4'>Welcome to BOG !</p>
              <p style={{color : 'black'}}>Sorry your KYC is not yet Verified, try Subscribing later</p>
            </div>
          <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
            <Button className='bg-primary ml-4' onClick={() => resetParams()}>OK</Button>
          </div>
          </div>
        </div>)
      )
  }
}

export default function KycAlert() {
  const { user } = useSelector((state) => state.auth);

  let alert = null;
  if (user?.profile?.isVerified && user?.profile?.hasActiveSubscription) {
    alert = null;
  } else if (user?.userType === "vendor") {
    alert = <KycText />
  } else if (user?.userType === "professional") {
    alert = <KycText />
  }
  return alert;
}

export function KycModals() {
  const { user } = useSelector((state) => state.auth);

  let alert = null;
  if (user?.profile?.isVerified) {
    alert = null;
  } else if (user?.userType === "vendor") {
    alert = <KycModal />
  } else if (user?.userType === "professional") {
    alert = <KycModal />
  }
  return alert;
}
