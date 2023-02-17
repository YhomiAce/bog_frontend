/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import ProductTable from "../../assets/Tables/ProductTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Axios from "../../../../config/config";
import toaster from "toasted-notes";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import Spinner from "../../../layouts/Spinner";
import AddressListItem from "./AddressListItem";
import ActionFeedBack from "./Modals/ActionFeedBack";
import { BsCheck } from "react-icons/bs";
import { fetchAddresses } from "../../../../redux/actions/addressAction";

const DeliveryAddresses = () => {
  const [deliveryAddress, setDeliveryAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeetback] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const user = useSelector((state) => state.auth.user);

  function CloseDelete() {
    setDeliveryAddress(false);
  }

  useEffect(() => {
    if (user && addresses.length === 0) {
      fetchAddresses(setLoading, setAddresses, user);
    }
  }, [user]);

  // const handleProjectChange = (val) => {
  //     const value = val.value;
  //     setSelectedProject(value);
  // }
  const addToAddress = (param) => {
    const oldAddress = [...addresses];
    const newAddress = [param, ...oldAddress];
    setAddresses(newAddress);
  };

  const removeFromAddress = (id) => {
    const newAddress = addresses.filter((x) => x.id !== id);
    console.log(newAddress, id);
    setAddresses(newAddress);
  };

  const updateAddressStatus = (param, id) => {
    let _address = addresses.filter((x) => x.id !== id);
    if (_address.length > 0) {
      _address = { ...address[0], ...param };
      setAddresses([...addresses, _address]);
    }
  };


  const authToken = localStorage.getItem("auth_token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: authToken,
    },
  };

  // create delivery address
  const createDeliveryAddress = async () => {
    try {
      setLoading(true);
      const url = "/address/create";
      const payload = {
        ...formik.values,
      };
      const newAddress = await Axios.post(url, payload, config);
      addToAddress(newAddress.data);

      setLoading(false);
      setDeliveryAddress(false);
      setFeetback({
        info: "Delivery Address Created!",
        status: "success",
        icon: <BsCheck />,
      });
    } catch (error) {
      setLoading(false);
      setDeliveryAddress(false);
      setFeetback({
        info: "Error Occured",
        status: "error",
        icon: <FaTimes />,
      });
      toaster.notify(error.message, {
        duration: "4000",
        position: "bottom",
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      address: "",
      state: "",
      country: "",
      charge: "",
      zipcode: "",
    },
    onSubmit: createDeliveryAddress,
  });
  const { title, address, state, country, charge, zipcode } = formik.values;

  return (
    <div>
      <div className="min-h-screen fs-500 relative">
        <div className="w-full py-8 bg-white flex justify-between items-center px-4">
          <div>
            <p className="text-2xl fw-600">Delivery Addresses</p>
            <p className="fs-400 text-gray-600 mt-2">
              Create delivery addresses and add charges
            </p>
            <Breadcrumbs className="bg-white pl-0 mt-4">
              <Link to="/" className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
              <Link to="/dashboard" className="opacity-60">
                <span>Dashboard</span>
              </Link>
              <Link to="" className="">
                <span>Delivery Addresses</span>
              </Link>
            </Breadcrumbs>
          </div>
          <div>
            <button
              className="text-primary px-3 py-1 rounded border-pri"
              onClick={() => {
                setDeliveryAddress(true);
              }}
            >
              Create Address
            </button>
          </div>
        </div>
        <div className="lg:p-5 px-2">
          {/* <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                         <ProductTable/>
                    </div> */}
          <div className="bg-white lg:p-5  mt-6 rounded-lg">
            <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
              <TabList className="flex fs-400">
                <Tab>Active</Tab>
                <Tab>Inactive</Tab>
              </TabList>
              <TabPanel>
                <div className="mt-10 flex justify-between">
                  <div class="flex text-gray-600">
                    <input
                      class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                      type="search"
                      name="search order by name"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      class=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                    >
                      <FontAwesomeIcon icon={faSearch} className="text-white" />
                    </button>
                  </div>
                  <Menu>
                    <MenuHandler>
                      <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center">
                        {" "}
                        Export <FaFileDownload className="text-2xl" />
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Export as CSV</MenuItem>
                      <MenuItem>Export as Excel</MenuItem>
                      <MenuItem>Export as PDF</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <tr>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            S/N
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Title
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Address
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            State
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Country
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Status
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Charge
                          </th>
                          <th className="px-2 fw-600 text-primary align-middle text-center border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap w-56">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          <AddressListItem
                            filterBy={true}
                            addresses={addresses}
                            removeAddress={removeFromAddress}
                            updateAddressStatus={updateAddressStatus}
                            // activateAddress={activateAddress}
                            // deactivateAddress={deactivateAddress}
                          />
                        }
                      </tbody>
                    </table>
                    {/* {meetings.length > 0? <MeetingTable filterBy="attended" status={'attended'} meet={meetings} removeMeet={removeFromMeeting} /> : ''} */}
                  </div>
                </CardBody>
              </TabPanel>
              {/* <TabPanel>
                <div className="mt-10 flex justify-between">
                  <div class="flex text-gray-600">
                    <input
                      class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                      type="search"
                      name="search order by name"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      class=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                    >
                      <FontAwesomeIcon icon={faSearch} className="text-white" />
                    </button>
                  </div>
                  <Menu>
                    <MenuHandler>
                      <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center">
                        {" "}
                        Export <FaFileDownload className="text-2xl" />
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Export as CSV</MenuItem>
                      <MenuItem>Export as Excel</MenuItem>
                      <MenuItem>Export as PDF</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <CardBody>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead className="thead-light bg-light">
                        <tr>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            S/N
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Title
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Address
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            State
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Country
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Status
                          </th>
                          <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                            Charge
                          </th>
                          <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          <AddressListItem
                            filterBy={false}
                            addresses={addresses}
                            removeAddress={removeFromAddress}
                          />
                        }
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
        {deliveryAddress && (
          <div
            className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40"
            onClick={CloseDelete}
          >
            <div
              className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-between">
                  <p className="lg:text-lg fw-600">Create address</p>
                  <FaTimes onClick={CloseDelete} />
                </div>

                <div className="mt-5">
                  <label className="block">Title</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title"
                      value={title}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block">State</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter State"
                      value={state}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block">Country</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Enter Country"
                      value={country}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                      required
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block">Address</label>
                  <textarea
                    name="address"
                    id="address"
                    value={address}
                    placeholder="Enter Address"
                    onChange={formik.handleChange}
                    className="w-full h-24 border border-gray-400 rounded mt-2 p-2"
                    required
                  ></textarea>
                </div>

                <div className="mt-5">
                  <label className="block">Zipcode</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Enter Zipcode"
                      value={zipcode}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block">Charge</label>
                  <div className="flex">
                    <input
                      type="number"
                      name="charge"
                      id="charge"
                      placeholder="Enter Charge"
                      value={charge}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-400 rounded mt-2 py-2 px-2"
                      required
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    className="btn bg-red-500 lg:px-7 text-white"
                    onClick={CloseDelete}
                  >
                    Cancel
                  </button>{" "}
                  &nbsp;
                  {loading ? (
                    <Spinner />
                  ) : (
                    <button className="btn-primary lg:px-7">
                      Create Address
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {feedback && (
        <ActionFeedBack
          closeFeedBack={() => setFeetback(false)}
          title={feedback.title}
          icon={feedback.icon}
          info={feedback.info}
          status={feedback.status}
        />
      )}
    </div>
  );
};

export default DeliveryAddresses;
