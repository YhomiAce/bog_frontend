/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { BsCameraVideo, BsLink, BsThreeDotsVertical } from "react-icons/bs";
// import Spinner from '../../../layouts/Spinner';
import ActionFeedBack from "./Modals/ActionFeedBack";
import ApproveModal from "./Modals/ApproveModal";
import CancelModal from "./Modals/CancelModal";
import AddressDeleteModal from "./Modals/AddressDeleteModal";
import AddressInfoModal from "./Modals/AddressInfoModal";

const AddressListItem = ({
  isAdmin,
  filterBy,
  addresses,
  removeAddress,
  updateAddressStatus,
}) => {
  const [action, setAction] = useState("");
  const [selectedId, setId] = useState();
  const [feedback, setFeetback] = useState();
  const [selectedAddress, setSelectedAddress] = useState();

  const myAction = (actType, id) => {
    setAction(actType);
    setId(id);
  };

  const openViewModal = (actType, address) => {
    setAction(actType);
    setSelectedAddress(address);
  };

  const filterAddresses = addresses.filter((x) => x.status === filterBy);

  const addressesTR =
    filterAddresses.length > 0 ? (
      filterAddresses.map((res, i) => {
        return (
          <tr key={i}>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {i + 1}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {res.title}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {res.address}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {res.state}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {res.country}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {res.status ? "Active" : ""}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              NGN {res.charge.toLocaleString()}
            </td>
            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
              <div className="flex justify-center text-primary cursor-pointer items-center text-xl">
                <div className="flex text-xl">
                  <Menu placement="left-start" className="w-16">
                    <MenuHandler>
                      <Button className="border-none bg-transparent shadow-none hover:shadow-none text-primary px-0">
                        <button className="lg:text-xl text-primary">
                          <BsThreeDotsVertical />
                        </button>
                      </Button>
                    </MenuHandler>
                    <MenuList className="w-16 bg-gray-100 fw-600 text-black">
                      <MenuItem onClick={() => openViewModal("view", res)}>
                        View
                      </MenuItem>
                      <MenuItem onClick={() => openViewModal("decline", res)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </td>
          </tr>
        );
      })
    ) : (
      <div className="w-full text-sm flex h-10 cursor-pointer items-center justify-center">
        <p className="" onClick={() => {}}>
          No Data Found
        </p>
      </div>
    );
  return (
    <>
      {addressesTR}
      {action === 'decline' && <AddressDeleteModal addressId={selectedAddress.id} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeAddress={removeAddress} updateAddressStatus={updateAddressStatus} />}
        {action === 'approve' && <ApproveModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeAddress={removeAddress}  updateAddressStatus={updateAddressStatus}/>}
        {action === 'cancel' && <CancelModal meetingId={selectedId} CloseDelete={()=>setAction('')} setFeetback={setFeetback} removeAddress={removeAddress} />}
        {action === 'view' && <AddressInfoModal CloseModal={()=>setAction('')} address={selectedAddress} updateAddressStatus={updateAddressStatus} />}
        {feedback && 
            <ActionFeedBack
                closeFeedBack={()=>setFeetback()}
                title={feedback.title}
                icon={feedback.icon}
                info={feedback.info}
                status={feedback.status}
            />}
    </>
  );
};

export default AddressListItem;
