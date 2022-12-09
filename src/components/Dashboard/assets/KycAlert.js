import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const KycText = () => {

        const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-white bg-secondary fw-600 py-3 px-2 lg:px-4'>
        <div>
            <p>Please Complete your <button className='bg-primary rounded-lg px-2 py-1' onClick={() => navigate("/dashboard/kyc")}> Profile </button> and <button className='bg-primary rounded-lg px-2 py-1' onClick={() => navigate("/dashboard/subscription")}>Subscribe</button> to continue.</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default function KycAlert() {
    const auth = useSelector((state) => state.auth);
  
    let alert = null;
  
      if (auth?.user?.userType === "vendor") {
        alert = <KycText/>
      }else if(auth?.user?.userType === "professional"){
        alert = <KycText/>
      }
    return alert;
  }
