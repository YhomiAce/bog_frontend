/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { BsCameraVideo, BsThreeDotsVertical } from 'react-icons/bs';
import toaster from 'toasted-notes';
import Axios from '../../../../config/config';
import Spinner from '../../../layouts/Spinner';
import ActionFeedBack from './Modals/ActionFeedBack';
import ApproveModal from './Modals/ApproveModal';
import DeleteModal from './Modals/DeleteModal';

const MeetingListItem = ({userId, isAdmin}) => {
    const [loading, setLoading] = useState(false);
    const [action, setAction] = useState('')
    const [meetings, setprojects] = useState([]);
    const [selectedId, setId] = useState();
    const [feedback, setFeetback] = useState();

    useEffect(() => {
        if (meetings?.length === 0) {
            fetchMeetings();
        }
    }, [meetings]);

    const myAction = (actType, id) => {
        setAction(actType)
        setId(id)
    }
    const fetchMeetings = async () => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            let url;
            if(isAdmin){
                url = "/meeting/all";
            }else{
                url = "/meeting/my-meeting/" + userId
            }
            const res = await Axios.get(url, config);
            const results = res.data;
            console.log(results);
            setprojects(results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const meetingTR = meetings.length
    > 0 ? meetings.map((res, i) => {
       return <tr key={i}>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {i}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.meetingSlug}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.projectSlug}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.date.split('T')[0]}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.time}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.status}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {res.approval_status}
           </td>
           <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               <div className="flex text-primary cursor-pointer items-center text-xl">
                   <div className="flex text-xl">
                        <Menu placement="left-start" className="w-16">
                            <MenuHandler>
                                <Button className="border-none bg-transparent shadow-none hover:shadow-none text-primary px-0"><button className="lg:text-xl text-primary"><BsThreeDotsVertical /></button></Button>
                            </MenuHandler>
                            <MenuList className="w-16 bg-gray-100 fw-600 text-black">
                            
                            {res.start_url && <MenuItem>
                                    <div className="flex text-primary cursor-pointer items-center text-xl">
                                        <BsCameraVideo />
                                        <p className="underline fs-400 pl-1">See Recording</p>
                                    </div>
                                </MenuItem>
                            }
                                {isAdmin && <MenuItem onClick={() => myAction('approve', res.id)}>Approve</MenuItem>}
                                {isAdmin && <MenuItem onClick={() => myAction('decline', res.id)} className="bg-red-600 text-white">Decline</MenuItem>}
                            </MenuList>
                        </Menu>
                    </div>
               </div>
           </td>
       </tr>
   })
 : 
   <div className="w-full text-sm flex h-10 cursor-pointer items-center justify-center">
       <p className="" onClick={() => {}}>No Data Found</p>
   </div>
    return (
        <>
        { !loading ? 
            meetingTR
        :
        <Spinner />
        }


        {action === 'decline' && <DeleteModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} />}
        {action === 'approve' && <ApproveModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} />}
        {feedback && 
            <ActionFeedBack
                closeFeedBack={()=>setFeetback()}
                title={feedback.title}
                icon={feedback.icon}
                info={feedback.info}
                status={feedback.icon}
            />}
        </>
    )
}

export default MeetingListItem
