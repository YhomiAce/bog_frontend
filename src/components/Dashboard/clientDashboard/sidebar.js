import { faDashcube } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping, faBarsStaggered, faBell, faCartShopping, faComments, faGear, faHandshake, faRightFromBracket, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect }  from "react";

export default function Sidebar() {
    
    const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    
    function handleResize() {
      if (window.innerWidth < 900) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
      
    
  }, []);

  function unShow() {
    if (window.innerWidth < 900) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }


    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faBarsStaggered} className="text-primary text-2xl fixed top-6 menu-btn lg:hidden" onClick={() => {
            setShowSideBar(current => !current);
          }} />
            </div>
            {showSideBar && (
                <div className="fixed bg-white top-20 grid items-between w-6/12 lg:w-52 shadow min-h-screen pt-2 px-2">
                <div>
                    <div onClick={unShow} className="w-full py-2 flex my-4 items-center hover:bg-primary hover:text-white hover:rounded fw-600">
                        <FontAwesomeIcon icon={faTableColumns} className="pr-3 pl-2 text-2xl" />
                        Dashboard
                    </div>
                    <div className="w-full flex py-2 fw-600 my-4 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faBagShopping} className="pr-3 pl-2 text-2xl " />
                        Orders
                    </div>
                    <div className="w-full flex my-4 py-2 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faCartShopping} className="pr-3 pl-2 text-2xl" />
                        Products
                    </div>
                    <div className="w-full py-2 flex my-4 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faHandshake} className="pr-3 pl-2 text-2xl" />
                        Meetings
                    </div>
                    <div className="w-full py-2 flex my-4 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faBell} className="pr-3 pl-2 text-2xl" />
                        Notification
                    </div>
                    <div className="w-full py-2 fw-600 flex my-4 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faComments} className="pr-3 pl-2 text-2xl" />
                        Chats
                    </div>
                </div>
                <div>
                    <div className="w-full py-2 fw-600 flex my-2 bg-primary text-white rounded-lg">
                        <FontAwesomeIcon icon={faGear} className="pr-3 pl-2 text-2xl" />
                        Settings
                    </div>
                    <div className="w-full py-2 fw-600 flex my-2 bg-primary text-white rounded-lg">
                        <FontAwesomeIcon icon={faRightFromBracket} className="pr-3 pl-2 text-2xl" />
                        Sign Out
                    </div>
                </div>
           </div>
            )}
        </div>
        
        )
}