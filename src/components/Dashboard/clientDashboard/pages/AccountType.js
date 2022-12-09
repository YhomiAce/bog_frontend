import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from 'react-redux';
import { UserAvatar } from "../../assets/Avatar";


export const AccountType = ({ account, switchAccount }) => {

    const BASE_URL = process.env.REACT_APP_IMAGE_URL;
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

  return (
    <div className="md:flex items-center justify-between lg:mt-10 mt-6">
    <div className="flex w-full justify-between">
      <div className="flex">
        <UserAvatar/>
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
