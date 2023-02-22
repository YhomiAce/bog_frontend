import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from 'react-redux';


export const AccountType = ({ account, switchAccount }) => {

  // const BASE_URL = process.env.REACT_APP_IMAGE_URL;
  const user = useSelector((state) => state.auth.user);
  const getUserType = (type) => {
    switch (type) {
      case "admin":
        return "Super Admin"
      case "professional":
        return "Service Partner"
      case "vendor":
        return "Product Partner"
      case "private_client":
        return "Private Client"
      case "product_partner":
        return "Product Partner"
      case "corporate_client":
        return "Corporate Client"
      default: return ""
    }
  }
  const getImg = (type) => {
    switch (type) {
      case "admin":
        return "Super Admin"
      case "professional":
        return "https://res.cloudinary.com/greenmouse-tech/image/upload/v1675950904/BOG/ServicePartner_ygiptu.png"
      case "vendor":
        return "https://res.cloudinary.com/greenmouse-tech/image/upload/v1675950904/BOG/ProductPartner_vb38la.png"
      case "private_client":
        return "https://res.cloudinary.com/greenmouse-tech/image/upload/v1675950904/BOG/PrivateClient_y7iuaq.png"
      case "corporate_client":
        return "https://res.cloudinary.com/greenmouse-tech/image/upload/v1675950904/BOG/CorporateClient_p3gss9.png"
      default: return ""
    }
  }

  return (
    <div className="md:flex items-center justify-between lg:mt-10 mt-6">
      <div className="flex w-full justify-between">
        <div className="flex">
          <div>
            <Avatar src={getImg(account.userType)} alt='profile' />
          </div>
          <div className="pl-3">
            <p className="fw-600">{getUserType(account.userType)}</p>
            <p>{user?.name}</p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 ">
          <Button
            onClick={() => switchAccount(account.userType)}
            className="bg-primary py-2 lg:py-auto"
          >
            Switch
          </Button>
        </div>
      </div>
    </div>
  );
};
