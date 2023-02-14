import $ from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import FormPackage from "./FormPackage";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { BiLogIn } from "react-icons/bi";
import { getAllServiceCategories, getServiceFormBuilder } from "../../redux/actions/ServiceCategoryAction";
import { fetchServiceCategories } from "../../redux/actions/ProjectAction";
/*import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useFormik } from 'formik';
import Axios from '../../../src/config/config';
import { SuccessAlert } from '../../../src/services/endpoint';
import { WarningAlert } from '../../../src/services/endpoint';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from '../layouts/Spinner';*/

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder


export default function Service() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServiceCategories());
        dispatch(getAllServiceCategories())
    }, [dispatch]);


    const auth = useSelector((state) => state.auth);
    // const user = useSelector((state) => state.auth.user);


    const [servicesType, setServicesType] = useState([]);
    const [formDisplay, setServiceFormDisplay] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    /* const [gInvest, setGInvest] = useState(false);
     const [cDraw, setCDraw] = useState(false);
     const [bAppove, setBAppove] = useState(false);
     const [bCon, setBCon] = useState(false);
     const [sCalc, setSCalc] = useState(false); */


    const AuhtCheck = () => {
        Swal.fire({
            title: " ",
            imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/authentication-icon.png",
            imageWidth: "75px",
            //text: 'Please Sign Up or Login to request for a Service Provider. Thank You!',
            html: 'Please <a href="/signup" style=" color: red; "> Sign Up </a> or <a href="/login" style=" color: red; ">Login</a> to request for a Service Provider. Thank You!',
            buttonsStyling: "false",
            denyButtonText: 'Sign Up',
            confirmButtonText: "Login",
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonColor: "rgba(254, 0, 56, 1)",
            confirmButtonColor: "#3F79AD",
            denyButtonColor: "#ec8b20"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/login");
            } else if (result.isDenied) {
                navigate("/signup");
            }
        });
    }


    const categories = useSelector((state) => state.service.services);
    const productServices = useSelector((state) => state.projects.services);


    const setServiceCategory = (serviceId) => {

        productServices.forEach((serviceType) => {
            if (serviceType.serviceId === serviceId) {
                setServicesType(servicesType => [...servicesType, { id: serviceType.id, name: serviceType.title }])
            }
        })
    }

    const CloseTypeModal = () => {
        setServicesType([]);
    }

    const CloseFormModal = () => {
        setServiceFormDisplay(false);
    }

    const noFormDisplay = () => {
            Swal.fire({
                title: " ",
                imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/authentication-icon.png",
                imageWidth: "75px",
                text: 'Service Provider Currently Unavailable',
            }).then((result) => {
                if (result.isConfirmed) {
                    CloseFormModal();
                }
            })
    }

    const serviceForm = useSelector((state) => state.service.formData);

    const getServiceForm = (e, id, name) => {
        e.preventDefault();
        dispatch(getServiceFormBuilder(id));
        setServicesType([]);
        setTimeout(() => {
            setServiceFormDisplay(true);
        }, 1000);
        setSelectedService(name);
    }


    return (
        <div>
            <div className="font-primary relative z-10">
                <Header />
                <div className="bg-service bg-cover bg-center text-white lg:h-80 h-52 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-4">
                                Find Service Provider
                            </p>
                            <p className="lg:w-5/12">Thousands of qualified workers avaliable to help you to kick start your project</p>
                        </div>
                    </div>
                </div>
                <div className="section hidden">
                    <div className="box">
                        <div className="text-center py-4">
                            <p className="text-xl lg:text-3xl fw-600">What service do you need a service provider for  ?</p>
                        </div>
                        <div className="lg:grid-3 justify-between mt-12">
                            <div className="service-box"></div>
                            <div className="service-box"></div>
                            <div className="service-box"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div>
                            <div className="text-center py-4">
                                <p className="text-xl lg:text-3xl fw-600">What service do you need a service provider for  ?</p>
                            </div>
                            <div className="lg:grid-3 justify-between lg:mt-24 mt-12 mb-12 lg:mb-24">
                                {categories.map((category, index) => (
                                    <div className="shadow-md h-48 center-item" key={index}>
                                        <div className="cursor-pointer" onClick={() => {
                                            // eslint-disable-next-line
                                            {
                                                // eslint-disable-next-line
                                                auth.isAuthenticated ?
                                                    setServiceCategory(category.id) :
                                                    AuhtCheck()
                                            }
                                        }}>
                                            <img src={require("../assets/images/survey.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                            <p className="fw-500">{category.name}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="shadow-md h-48 center-item  mt-10 bg-primary">
                                    <div className="cursor-pointer flex items-center" onClick={() => navigate("/contact")}>
                                        <p className="fw-500 text-white w-36 text-center">Request other Services</p>
                                        <BiLogIn className="text-3xl text-white" />
                                    </div>
                                </div>
                                {/*<div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                                    <div className="cursor-pointer" onClick={() => {
                                        // eslint-disable-next-line
                                        {
                                            // eslint-disable-next-line
                                            auth.isAuthenticated ?
                                                setGInvest(true) :
                                                AuhtCheck()
                                        }
                                    }}>
                                        <img src={require("../assets/images/GI.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                        <p className="fw-500">Geotechnical Investigation</p>
                                    </div>
                                </div>
                                <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                                    <div className="cursor-pointer" onClick={() => {
                                        // eslint-disable-next-line
                                        {
                                            // eslint-disable-next-line
                                            auth.isAuthenticated ?
                                                setCDraw(true) :
                                                AuhtCheck()
                                        }

                                    }}>
                                        <img src={require("../assets/images/CS.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                        <p className="fw-500">Construction Drawing</p>
                                    </div>
                                </div>
                                <div className="shadow-md h-48 center-item mt-10">
                                    <div className="cursor-pointer" onClick={() => {
                                        // eslint-disable-next-line
                                        {
                                            // eslint-disable-next-line
                                            auth.isAuthenticated ?
                                                setBAppove(true) :
                                                AuhtCheck()
                                        }
                                    }}>
                                        <img src={require("../assets/images/BA.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                        <p className="fw-500">Building Approval</p>
                                    </div>
                                </div>
                                <div className="shadow-md h-48 center-item  mt-10">
                                    <div className="cursor-pointer" onClick={() => {
                                        // eslint-disable-next-line
                                        {
                                            // eslint-disable-next-line
                                            auth.isAuthenticated ?
                                                setBCon(true) :
                                                AuhtCheck()
                                        }
                                    }}>
                                        <img src={require("../assets/images/BC.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                        <p className="fw-500">Building Contractor</p>
                                    </div>
                                </div>
                                <div className="shadow-md h-48 center-item  mt-10 bg-primary">
                                    <div className="cursor-pointer flex items-center" onClick={() => navigate("/contact")}>
                                        <p className="fw-500 text-white w-36 text-center">Request other Services</p>
                                        <BiLogIn className="text-3xl text-white" />
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            {servicesType.length > 0 && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseTypeModal}>
                    <div className="bg-white lg:w-5/12 px-5 max-h-screen overflow-y-auto overscroll-none lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <p className="text-lg lg:text-2xl fw-600">Select Service Type</p>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseTypeModal} />

                        </div>
                        <div className="mt-5">
                            <ul style={{ listStyle: 'disc' }}>
                                {servicesType.map((type, index) => (
                                    <li key={index}>
                                        <div className="mt-3 lg:mt-6 w-auto cursor-pointer" onClick={(e) => getServiceForm(e, type.id, type.name)}>
                                            {type.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {formDisplay && (
                serviceForm ? (Object.keys(serviceForm).length > 0 ? (
                    <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseFormModal}>
                        <div className="bg-white lg:w-5/12 px-5 max-h-screen overflow-y-auto overscroll-none lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-between">
                                <p className="text-lg lg:text-2xl fw-600">Request {selectedService}</p>
                                <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseFormModal} />

                            </div>
                            <div className="mt-5">
                                <FormPackage formPayload={serviceForm} />
                            </div>
                        </div>
                    </div>
                ) : (noFormDisplay())
                ) : (noFormDisplay())
            )}
        </div>
    );
}