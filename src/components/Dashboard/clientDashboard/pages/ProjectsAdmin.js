import React, { useState, useEffect } from "react";
// import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
// import {BsThreeDotsVertical} from "react-icons/bs";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ProjectsTable from "../../assets/Tables/ProjectAdminTable";
import { getProjects } from '../../../../redux/actions/ProjectAction';
import { useDispatch } from "react-redux";

export default function ProjectsAdmin() {

    // const products = useRef(null);
    // const navigate = useNavigate()

    const [adminAdd, setAdminAdd] = useState(false)

    function CloseModal() {
        setAdminAdd(false)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
        // dispatch(getCategories());
    }, [dispatch])

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Projects</p>
                        <p className="fs-400 text-gray-600 mt-2">View and manage all projects.</p>
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
                                <span>Projects</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    {/* <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded border-pri text-primary" onClick={() => setAdminAdd(!adminAdd)}><span>Assign New Project</span></button>
                    </div> */}
                </div>

                {/* service contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>All Projects</Tab>
                                <Tab>Posted</Tab>
                                <Tab>Ongoing</Tab>
                                <Tab>Completed</Tab>
                                <Tab>Overdue</Tab>
                            </TabList>
                            <TabPanel>
                                <ProjectsTable status={"in_review"} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsTable status={"in_review"} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsTable status={"ongoing"} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsTable status={"completed"} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsTable status={"completed"} />
                            </TabPanel>
                            
                        </Tabs>
                    </div>
                </div>
            </div>
            {adminAdd && (
                <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                    <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <form>
                            <p className="lg:fs-700 fw-600">Assign New Project</p>
                            <div className="mt-5">
                                <label className="block">Project Tittle</label>
                                <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                            </div>
                            <div className="mt-5">
                                <label className="block">Project Location</label>
                                <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                            </div>
                            <div className="mt-5">
                                <label className="block">Project File</label>
                                <input type="file" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required />
                            </div>
                            <div className="mt-5">
                                <label className="block">Project Description</label>
                                <textarea className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                            </div>
                            <div className="mt-5">
                                <label className="block">Project Category</label>
                                <select className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required>
                                    <option>Land Survey</option>
                                    <option>Geotechnical</option>
                                    <option>Drawing</option>
                                    <option>Building Contactor</option>
                                </select>
                            </div>
                            <div className="mt-8 flex lg:w-10/12 justify-between">
                                <Button color="red" onClick={CloseModal}>Cancel</Button>
                                <Button className="bg-primary">ADD Project</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}