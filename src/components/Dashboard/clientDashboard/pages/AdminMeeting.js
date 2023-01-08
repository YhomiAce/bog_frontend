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
import SelectableItem from "../../../widgets/SelectableItem";
import Axios from '../../../../config/config';
import toaster from "toasted-notes";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import Spinner from "../../../layouts/Spinner";
import MeetingListItem from "./MeetingListItem";
import { BsCheck } from "react-icons/bs";
import ActionFeedBack from "./Modals/ActionFeedBack";


const AdminMeeting = () => {
    
    const [rMeet, setRMeet] = useState(false)
    const [projects, setprojects] = useState([]);
    const [selectedProject, setSelectedProject] = useState();
    const [loading, setLoading] = useState(false);
    const [feedback, setFeetback] = useState(false);
    const user = useSelector((state) => state.auth.user);
    console.log(user);

    function CloseDelete() {
        setRMeet(false)
    }
    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects();
        }
    }, []);
    const handleProjectChange = (val) => {
        const value = val.value;
        setSelectedProject(value);
    }
    const authToken = localStorage.getItem("auth_token");
    const config = {
        headers:
        {
            "Content-Type": "application/json",
            'Authorization': authToken
        }

    }
    const fetchProjects = async () => {
        try {
            const url = "/projects/all";
            const res = await Axios.get(url, config);
            const results = res.data;
            const data = results.map(result => {
                return {
                    projectSlug: result.projectSlug,
                }
            });
            setprojects(data);
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

    // set meeting
    const setMeeting = async () => {

        try {
            setLoading(true);
            const url = "/meeting/create";
            const payload = {
                requestId: user.id,
                requestEmail: user.email,
                projectSlug: selectedProject,
                ...formik.values
            }
            console.log(payload)
            await Axios.post(url, payload, config);
            setLoading(false);
            setRMeet(false)
            setFeetback({
                info: "Request Sent",
                status: "success",
                icon: <BsCheck />
            })            
        } catch (error) {
            setLoading(false);
            setRMeet(false)
            setFeetback({
                info: "Error Occured",
                status: "error",
                icon: <FaTimes />
            })
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    const formik = useFormik({
        initialValues: {
            description: "",
            date: "",
            time: "",
        },
        onSubmit: setMeeting,
    });
    const { date, description, time } = formik.values

    const options = projects.length > 0 ? projects.map(projects => {
        return {
            label: projects.projectSlug,
            value: projects.projectSlug
        };
    }) : [];


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white flex justify-between items-center px-4">
                    <div>
                        <p className="text-2xl fw-600">Meetings</p>
                        <p className="fs-400 text-gray-600 mt-2">Request and manage in app meetings with BOG team</p>
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
                                <span>Meetings</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div>
                        <button className="text-primary px-3 py-1 rounded border-pri" onClick={() => {setRMeet(true)}}>Request Meetings</button>
                    </div>
                </div> 
                <div className="lg:p-5 px-2">
                    {/* <div className="bg-white px-4 lg:px-8 py-6 rounded-md">
                         <ProductTable/>
                    </div> */}
                    <div className="bg-white lg:p-5  mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        <TabList className="flex fs-400">
                            <Tab>Completed</Tab>
                            <Tab>Upcoming</Tab>
                            <Tab>Pending Request</Tab>
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
                                        <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center"> Export <FaFileDownload className="text-2xl"/></Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem >
                                            Export as CSV
                                        </MenuItem>
                                        <MenuItem>
                                            Export as Excel
                                        </MenuItem>
                                        <MenuItem>
                                            Export as PDF 
                                        </MenuItem>
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
                                            Meeting ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Project ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Date
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Time
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Status
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Approval Status
                                        </th>
                                        <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.id && <MeetingListItem userId={user.id} filterBy="attended" isAdmin />}
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        <TabPanel>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light bg-light">
                                    <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            S/N
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Meeting ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Project ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Date
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Time
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Status
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Approval Status
                                        </th>
                                        <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.id && <MeetingListItem userId={user.id} filterBy="approved" isAdmin />}
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        <TabPanel>
                            <CardBody>
                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light bg-light">
                                    <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            S/N
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Meeting ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Project ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Date
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Time
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Status
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Approval Status
                                        </th>
                                        <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.id && <MeetingListItem userId={user.id} filterBy="pending" isAdmin />}
                                </tbody>
                                </table>
                            </div>
                            </CardBody>
                        </TabPanel>
                        </Tabs>
                    </div>
                </div>
                {rMeet && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex justify-between">
                                    <p className="lg:text-lg fw-600">Request Meeting</p>
                                    <FaTimes onClick={CloseDelete}/>
                                </div>
                                <div className="mt-5 lg:mt-8">
                                    <label className="block">Project ID</label>
                                    <SelectableItem
                                        placeholder="Select Podio App"
                                        options={options}
                                        handleChange={handleProjectChange}
                                        className="w-10/12 py-2 px-3 rounded-lg bg-light border border-gray-400"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label className="block">Preffered Meeting Date/Time</label>
                                    <div className="flex">
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={date}
                                            onChange={formik.handleChange}
                                            className="w-4/12 lg:w-4/12 border border-gray-400 rounded mt-2 py-2 px-2"
                                            required
                                        />
                                        <input
                                            type="time"
                                            min="00:00"
                                            max="23:59"
                                            name="time"
                                            id="time"
                                            value={time}
                                            onChange={formik.handleChange}
                                            className="w-4/12 ml-6 lg:w-4/12 border border-gray-400 rounded mt-2 py-2 px-2"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={description}
                                        onChange={formik.handleChange}
                                        className="w-full lg:w-11/12 h-24 border border-gray-400 rounded mt-2 p-2"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-8 flex lg:w-11/12 justify-between">
                                    <button className="btn bg-red-500 lg:px-7 text-white" onClick={CloseDelete}>
                                        Cancel
                                    </button>
                                    {loading? <Spinner /> : <button className="btn-primary lg:px-7">
                                        Request Meeting
                                    </button>}
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
            </div>
            {feedback && 
                <ActionFeedBack
                    closeFeedBack={()=>setFeetback(false)}
                    title={feedback.title}
                    icon={feedback.icon}
                    info={feedback.info}
                    status={feedback.status}
                />}
        </div>
        )
}

export default AdminMeeting
