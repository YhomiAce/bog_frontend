import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
// import { useFormik } from "formik";
import { BsCheck } from "react-icons/bs";
import Axios from "../../../../../config/config";
import { FaTimes } from "react-icons/fa";

const AddressInfoModal = ({
  CloseModal,
  setFeetback,
  address,
  updateAddressStatus,
}) => {
  const [, setLoading] = useState(false);

  const updateAddress = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const url = `/address/${address.id}`;

      const authToken = localStorage.getItem("auth_token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      };
      

      await Axios.put(url, addressInfo, config);
      setLoading(false);
      CloseModal();
      updateAddressStatus(addressInfo, address.id);
      setFeetback({
        info: "Address updated!",
        status: "success",
        icon: <BsCheck />,
      });
    } catch (error) {
      setLoading(false);
      CloseModal();
      setFeetback({
        info: "Error Occured",
        status: "error",
        icon: <FaTimes />,
      });
    }
  };


  const [addressInfo, setAddressInfo] = useState(address)

  return (
    <div
      className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40"
      onClick={CloseModal}
    >
      <div
        className="bg-white px-4 lg:w-5/12 mt-5 max-h-70 rounded-md overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={updateAddress}>
          <h3>Address Details</h3>
          <div className="mt-5">
            <label className="block">Title</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.title}
              onChange={e => setAddressInfo({...addressInfo, title: e.target.value})}
            />
          </div>

          <div className="mt-5">
            <label className="block">Address</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.address}
              onChange={e => setAddressInfo({...addressInfo, address: e.target.value})}
            />
          </div>
          <div className="mt-5">
            <label className="block">Zipcode</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.zipcode}
              onChange={e => setAddressInfo({...addressInfo, zipcode: e.target.value})}
            />
          </div>
          <div className="mt-5">
            <label className="block">State</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.state}
              onChange={e => setAddressInfo({...addressInfo, state: e.target.value})}
            />
          </div>
          <div className="mt-5">
            <label className="block">Country</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.country}
              onChange={e => setAddressInfo({...addressInfo, country: e.target.value})}
            />
          </div>
          <div className="mt-5">
            <label className="block">Charge</label>
            <input
              type="number"
              className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
              value={addressInfo.charge}
              onChange={e => setAddressInfo({...addressInfo, charge: e.target.value})}
            />
          </div>
          <div className="mt-8 flex justify-end">
            <Button
              type="button"
              className="mt-3"
              color="red"
              onClick={CloseModal}
            >
              Close
            </Button>
            &nbsp;
            <Button type="submit" className="mt-3" color="green">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressInfoModal;
