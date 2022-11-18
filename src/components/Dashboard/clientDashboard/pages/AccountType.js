import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';



export const AccountType = ({ account, switchAccount }) => {

    const BASE_URL = process.env.REACT_APP_IMAGE_URL;
    const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <Avatar
          src={
            user?.photo
              ? `${BASE_URL}/${user?.photo}`
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          alt="profifepic"
          className="lg:w-20 w-16"
        />
        <div className="pl-3">
          <p className="fw-600">Corporate Client</p>
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
  );
};
