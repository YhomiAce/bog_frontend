import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

export const KycText = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  return (
    <div className='items-center justify-between text-white bg-secondary fw-600 py-3 px-2 lg:px-4'>
      {!user?.profile?.hasActiveSubscription && (
        <div>
          Subscribe to one of our amazing plans to render services to clients. <button className='bg-primary rounded-lg px-2 py-1 ml-3' onClick={() => navigate("/dashboard/subscription")}>Subscribe</button>
        </div>
      )}
    </div>

  )
}

export const KycModal = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const [modal, setModal] = useState(true)

  const location = useLocation()

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

  if(!user?.profile?.isVerified){
      return (
         modal && (
          <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40">
              <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                  <div className="lg:px-6 px-5">
                     <p className='text-3xl fw-600 text-secondary mb-4'>Welcome to BOG !</p>
                      <p>Please complete your kyc to gain access to BOG services</p>
                  </div>
                  <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                      <Button className='bg-primary ml-4' onClick={() => navigate("/dashboard/kyc")}>Verify</Button>
                  </div>
              </div>
          </div>
          )
        
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
