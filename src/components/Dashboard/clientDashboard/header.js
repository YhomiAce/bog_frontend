import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
    Menu, MenuHandler, MenuItem, MenuList, Button, Avatar,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logout } from '../../../redux/actions/authAction';
import { UserAvatar } from "../assets/Avatar";
import ReactTimeAgo from "react-time-ago";
import { markNotificationAsRead } from "../../../services/endpoint";


export default function Header() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const [notifyDown, setNotifyDown] = useState(false)
    const { adminNotifications, userNotifications } = useSelector(state => state.notifications);

    const navigate = useNavigate();

    function ShowNotify() {
        setNotifyDown(current => !current)
    }
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
            case "corporate_client":
                return "Corporate Client"
            default: return ""
        }
    }

    let count = 0;
    let content;
    const gotoNotification = async (id) => {
        setNotifyDown(true)
        const url = auth?.user?.userType === "admin" ? "/dashboard/notification" : "/dashboard/notify"
        navigate(url);
        await markNotificationAsRead(id)
    }
    if (auth?.user?.userType === "admin") {
        count = adminNotifications.length;
        content = adminNotifications.length > 0 ? adminNotifications.map(notify => {
            return (
                <p key={notify.id} className="my-5 flex" onClick={() =>gotoNotification(notify.id)}>
                    <div>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667908351/BOG/jot-logo_q4jjyl.png" className="mx-3 w-7 h-6" alt="Notify" />
                    </div>
                    <div>
                        <p>{notify.message.substring(0, 20) + "..."}</p>
                        <p className="text-gray-500 text-xs"><ReactTimeAgo date={Date.parse(notify.createdAt)} locale="en-US" /></p>

                    </div>
                </p >
            )
        }) : null
    } else {
        count = userNotifications.length;
        content = userNotifications.length > 0 ? userNotifications.map(notify => {
            return (
                <p key={notify.id} className="my-5 flex" onClick={() =>gotoNotification(notify.id)}>
                    <div>
                        <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1667908351/BOG/jot-logo_q4jjyl.png' className="mx-3 w-9" alt="Notify" />
                    </div>
                    <div>
                        <p>{notify.message.substring(0, 22)}</p>
                        <p className="text-gray-500 text-xs"><ReactTimeAgo date={Date.parse(notify.createdAt)} locale="en-US" /></p>

                    </div>
                </p >
            )
        }) : null
    }




    return (
        <div className="fixed w-full z-50 bg-gray-100">
            <div className="flex w-full bg-white justify-between lg:head-grid">
                <div className="bg-white py-3  text-center">
                    <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669563824/BOG/logo_1_1_ubgtnr.png" alt="boglogo" className="w-24 xl:w-32 ml-3 md:ml-6" /></Link>
                </div>
                <div className="lg:shadow bg-white py-4 px-5 flex lg:justify-between justify-end  items-center">

                    <div className="ml-10 hidden lg:flex items-center w-6/12">
                        {/* <FontAwesomeIcon icon={faBarsStaggered} size="2x" className="text-2xl lg:ml-4 cursor-pointer" onClick={sidebarReduce}/> */}
                        <p className="ml-5 fw-700 hidden lg:block">{auth?.user ? getUserType(auth?.user?.userType) : ""} Dasboard</p>

                    </div>
                    <div className="flex items-center justify-end w-full">
                        {/* <div class="mr-6 relative mx-auto text-gray-600 hidden lg:block">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" class="absolute bg-primary right-0 top-0 py-2 px-4 rounded-r-lg">
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                        </div> */}
                        <div>
                            {auth?.user?.userType === "admin" ?
                                null
                                :
                                <Link to="switch">
                                    <div>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671725813/BOG/switch_aflj0d.png" alt="switch" className="w-6 mx-auto" />
                                        <p className="text-center fs-300 fw-500 text-primary">Switch</p>
                                    </div>
                                </Link>
                            }
                        </div>
                        <div className="relative mx-3">
                            <div onClick={ShowNotify} className="bg-blue-100 px-2 rounded-sm py-1">
                                <FontAwesomeIcon icon={faBell} className="lg:text-xl  text-primary" />
                                <p className="absolute -top-2 left-3/4 border circle px-1 text-white text-xs bg-primary"> {count} </p>
                            </div>
                            {notifyDown && (
                                <div className="absolute bg-white rounded shadow pb-5 w-68 lg:w-72 text-start fs-400 lg:-left-64 -left-56 top-12" onClick={ShowNotify}>
                                    <p className="mb-3 text-white bg-primary py-2 pl-3 text-lg fw-600">Notifications</p>
                                    {content}
                                    <Link to={auth?.user?.userType === "admin" ? "notification" : "notify"}><p className="text-center hover:text-orange-500">View All</p></Link>
                                </div>
                            )}
                        </div>
                        <div className="ml-5">
                            <Menu placement="bottom-end"
                            >
                                <MenuHandler>
                                    <Button className="p-0">
                                        {
                                            auth?.user?.photo ? <Avatar src={auth.user.photo} /> : <UserAvatar />
                                        }
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/dashboard/transact")}>Transactions</MenuItem>
                                    {
                                        auth?.user?.userType === "admin" ?
                                        <MenuItem onClick={() => navigate("/dashboard/announcement")}>Inbox</MenuItem>
                                        :
                                        <MenuItem onClick={() => navigate("/dashboard/inbox")}>Inbox</MenuItem>
                                    }
                                    
                                    <MenuItem onClick={() => navigate("/dashboard/meetings")}>Meetings</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
                                    <MenuItem onClick={() => dispatch(logout())}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}