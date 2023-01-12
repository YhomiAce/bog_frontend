import React from "react";
import { useSelector } from "react-redux";
import AdminInbox from "./Admins/InboxAdmin";
import UserInbox from "./Users/InboxUser";

export default function Inbox() {
    

    const auth = useSelector((state) => state.auth);

    if (auth?.user?.userType === "admin"){
        return <AdminInbox/>
    } else {
        return <UserInbox/>
    }
}