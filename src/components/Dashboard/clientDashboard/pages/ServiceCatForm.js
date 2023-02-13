/* eslint-disable react-hooks/exhaustive-deps */
import $ from "jquery";
import { Button } from '@material-tailwind/react'
import React, { useState, useRef } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import Spinner from '../../../layouts/Spinner';
import { createServiceForm } from "../../../../redux/actions/ServiceCategoryAction";

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

export default function ServiceCategory() {
     const dispatch = useDispatch();
     let { id, name } = useParams();

    const stopLoading = () => {
        setLoading(false);
    }

    const fb = useRef(null);
    let editor = null;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
       editor = $(fb.current).formBuilder();
    }, []);


    const buildForm = (e) => {
        e.preventDefault();
        setLoading(true);

        let formPayload;

        const result = editor.actions.save();

        formPayload = {
            serviceType: id,
            serviceName: name,
            "formData": result
        };

        dispatch(createServiceForm(formPayload, stopLoading));
    }

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Form Builder</p>
                        <p className="fs-400 text-gray-600 mt-2">Create Form for 
                            <b style={{ color: '#3F79AD', marginLeft: '4px' }}>
                                {name}
                        </b></p>
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
                            <Link to="/dashboard/service-category" className="opacity-60">
                                <span> Service Category</span>
                            </Link>
                            <Link to="" className="">
                                <span>Form Builder</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <div>
                            <div id="fb-editor" style={{ height: "600px" }} ref={fb}></div>
                        </div>
                        {
                            loading ? <Spinner /> :
                                <div className="mt-8 flex justify-between">
                                    <Button type='submit' className="bg-primary" onClick={(e) => buildForm(e)}>Build Form</Button>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}