import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const KycText = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-white bg-secondary fw-600 py-3 px-2 lg:px-4'>
      <div>
        <p>Please Complete your {!user.profile?.isVerified && <button className='bg-primary rounded-lg px-2 py-1' onClick={() => navigate("/dashboard/kyc")}> Profile </button>} {!user.profile?.isVerified && !user?.profile?.hasActiveSubscription ? 'and' : ''} {!user?.profile?.hasActiveSubscription && <button className='bg-primary rounded-lg px-2 py-1' onClick={() => navigate("/dashboard/subscription")}>Subscribe</button>} </p>
      </div>
    </div>

  )
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
