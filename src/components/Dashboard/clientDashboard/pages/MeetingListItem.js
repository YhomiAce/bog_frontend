/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useState } from 'react'
import { BsCameraVideo, BsLink, BsThreeDotsVertical } from 'react-icons/bs';
// import Spinner from '../../../layouts/Spinner';
import ActionFeedBack from './Modals/ActionFeedBack';
import ApproveModal from './Modals/ApproveModal';
import CancelModal from './Modals/CancelModal';
import DeleteModal from './Modals/DeleteModal';

const MeetingListItem = ({isAdmin, filterBy, meetings, removeMeeting}) => {
    const [action, setAction] = useState('');
    const [selectedId, setId] = useState();
    const [feedback, setFeetback] = useState();

    const myAction = (actType, id) => {
        setAction(actType)
        setId(id)
    }

    const filterMeeting = meetings.filter(x => x.approval_status === filterBy && x)
    const meetingTR = filterMeeting.length
    > 0 ? filterMeeting.map((res, i) => {
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
               {res.date ? res.date.split('T')[0] : "-"}
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
                                        <BsLink />
                                        <a href={res.start_url} target="_blank" rel="noreferrer"><p className="underline fs-400 pl-1">Meeting Link</p></a>
                                    </div>
                                </MenuItem>
                            }
                                {res.status === "attended" && <MenuItem>
                                    <div className="flex text-primary cursor-pointer items-center text-xl">
                                        <BsCameraVideo />
                                        <p className="underline fs-400 pl-1">See Recording</p>
                                    </div>
                                </MenuItem>}
                                {isAdmin && <MenuItem onClick={() => myAction('approve', res.id)}>Approve</MenuItem>}
                                {isAdmin && <MenuItem onClick={() => myAction('decline', res.id)} className="bg-red-600 text-white">Decline</MenuItem>}
                                {!isAdmin && filterBy === 'pending' && <MenuItem onClick={() => myAction('cancel', res.id)} className="bg-red-600 text-white">Cancel Meeting</MenuItem>}
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
        { meetingTR }
        {action === 'decline' && <DeleteModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeMeeting={removeMeeting} />}
        {action === 'approve' && <ApproveModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeMeeting={removeMeeting} />}
        {action === 'cancel' && <CancelModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeMeeting={removeMeeting} />}
        {feedback && 
            <ActionFeedBack
                closeFeedBack={()=>setFeetback()}
                title={feedback.title}
                icon={feedback.icon}
                info={feedback.info}
                status={feedback.status}
            />}
        </>
    )
}

export default MeetingListItem
