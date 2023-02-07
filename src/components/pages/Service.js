import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Axios from '../../../src/config/config';
import { SuccessAlert } from '../../../src/services/endpoint';
import { WarningAlert } from '../../../src/services/endpoint';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Spinner from '../layouts/Spinner';
import Swal from "sweetalert2";
import { BiLogIn } from "react-icons/bi";

export default function Service() {
    const navigate = useNavigate();
    const [landSurvey, setLandSurvey] = useState(false);
    const [gInvest, setGInvest] = useState(false);
    const [cDraw, setCDraw] = useState(false);
    const [bAppove, setBAppove] = useState(false);
    const [bCon, setBCon] = useState(false);
    const [sCalc, setSCalc] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);

    const [lga, setLga] = useState([]);
    const [landSize, setLandSize] = useState([]);
    const [intendedproject, setIntendedProject] = useState("");
    const [stbuilding, setbuilding] = useState("");
    const [propertyType, setpropertyType] = useState([]);
    const [settcpt, setTcpt] = useState("");
    const [setTypeofcpt, setTypeofCPT] = useState("");

    const [values, setValue] = React.useState("");
    const [valuesm, setValuem] = React.useState("");
    const [valuest, setValuet] = React.useState("");
    const [setspecialize, setSpecialize] = React.useState("");
    const handleChangee = (event) => {
        setValue(!values);
        setLga(event.target.value);
    }
    const handleChangeTintendedPro = (event) => {
        // setValue(!values);
        setIntendedProject(event.target.value);
    }
    const handleChangebuilding = (event) => {
        // setValue(!values);
        setbuilding(event.target.value);
    }
    const handleChangeTCpt = (event) => {
        // setValue(!values);
        setTcpt(event.target.value);
    }
    const handleChangeTypeofCPT = (event) => {
        // setValue(!values);
        setTypeofCPT(event.target.value);
    }
    const handleChangeSpecialize = (event) => {
        // setValue(!values);
        setSpecialize(event.target.value);
    }
    const handleChangeem = (event) => {
        setValuem(!valuesm);
        setLandSize(event.target.value)
    }
    const handleChangeet = (event) => {
        setValuet(!valuest);
        setpropertyType(event.target.value)
    }
    const CloseSurvey = () => {
        setLandSurvey(false)
        setGInvest(false)
        setCDraw(false)
        setBAppove(false)
        setSCalc(false)
        setBCon(false)
    }

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

    const makeRequest = async () => {
        //   console.log('makeRequest')
        try {
            setLoading(true)
            const payload = {
                title: value.title,
                propertyName: value.propertyLocation,
                propertyLocation: value.propertyLocation,
                propertyLga: lga,
                landSize: landSize,
                propertyType: propertyType,
                surveyType: propertyType,
                userType: user.userType
            }
            console.log(payload);
            const config = {
                headers: {
                    'Content-Type': 'Application/json',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            await Axios.post("/projects/land-survey/request", payload, config);

            CloseSurvey()
            SuccessAlert("Request in Progress!");
            navigate("/dashboard/projects")
            setLoading(false);

        } catch (error) {
            setLoading(false);
            if (error.response.data.message) {
                toaster.notify(
                    error.response.data.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
                return;
            }
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const form = useFormik({
        initialValues: {
            title: "",
            propertyLocation: "",
        },
        onSubmit: makeRequest,

    });

    //  const { title, propertyLocation} = form.values;
    //  const value = form.values
    const submitDraw = async (payload, headers) => {
        try {
            const url = "/projects/drawing/request";
            const res = await Axios.post(url, payload, headers);
            return res;
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const submitGeof = async (payload, headers) => {
        try {
            const url = "/projects/geotechnical/request";
            const res = await Axios.post(url, payload, headers);
            return res;
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const submitContruct = async (payload, headers) => {
        try {
            const url = "/projects/contractor/request";
            const res = await Axios.post(url, payload, headers);
            return res;
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const submitBUidAppr = async (payload, headers) => {
        try {
            const url = "/projects/building-approval/request";
            const res = await Axios.post(url, payload, headers);
            return res;
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const submitBuildingContractor = async (payload, headers) => {
        try {
            const url = "/projects/contractor/request";
            const res = await Axios.post(url, payload, headers);
            return res;
        } catch (error) {
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    const MAX_LENGTH = 5;
    const [surveyPlan, setSurveyPlan] = useState([]);
    const [landandproperty, setLandandProerty] = useState([]);
    const [atitechturePlan, setAtitechturePlan] = useState([]);
    const [structuralPlan, setStructuralPlan] = useState([]);
    const [mechanicalplan, setMecanicalPlan] = useState([]);
    const [electricalPlan, setElectricPlan] = useState([]);
    const [soiltestreport, setSoilTestReport] = useState([]);
    const [cofoorofo, setCofOorRofO] = useState([]);
    const [siteplan, setSitePlan] = useState([]);
    const [siteanalysisreport, setSiteAnalysisReport] = useState([]);
    const [enviromentimpactreport, setEnviromentImpactReport] = useState([]);
    const [taxClearance, setTaxClearance] = useState([]);
    const [letterofsupervision, setLetterofSupervision] = useState([]);
    const [stampandseal, seStampandSeal] = useState([]);
    const [selectedpro, setproperties] = useState([]);
    const [selectedsp, setSp] = useState([]);
    const [selectedap, setAp] = useState([]);
    const [selectedstp, setStp] = useState([]);
    const [selectedsmc, setSmc] = useState([]);
    const [selectedelp, setElp] = useState([]);
    const [selectedsoi, setSoi] = useState([]);
    const [selectedcos, setSoc] = useState([]);
    const [selectedcusp, setSusp] = useState([]);
    const [selectedcusap, setSusap] = useState([]);
    const [selectedcusep, setSusep] = useState([]);
    const [selectedcustp, setSustp] = useState([]);
    const [selectedculs, setSuls] = useState([]);
    const [selectedculsss, setSulsss] = useState([]);

    const handleFileChangesp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSp(pArray)
        // console.log(Array.from(e.target.files));
        setSurveyPlan(Array.from(e.target.files));
    }
    const handleFileChangeatp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setAp(pArray)
        // console.log(Array.from(e.target.files));
        setAtitechturePlan(Array.from(e.target.files));
    }
    const handleFileChangespstp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setStp(pArray)
        // console.log(Array.from(e.target.files));
        setStructuralPlan(Array.from(e.target.files));
    }
    const handleFileChangemp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSmc(pArray)
        // console.log(Array.from(e.target.files));
        setMecanicalPlan(Array.from(e.target.files));
    }
    const handleFileChangeep = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setElp(pArray)
        // console.log(Array.from(e.target.files));
        setElectricPlan(Array.from(e.target.files));
    }

    const handleFileChangestp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSoi(pArray)
        // console.log(Array.from(e.target.files));
        setSoilTestReport(Array.from(e.target.files));
    }
    const handleFileChangecfo = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSoc(pArray)

        // console.log(Array.from(e.target.files));
        setCofOorRofO(Array.from(e.target.files));
    }
    const handleFileChangeusp = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSusp(pArray)
        // console.log(Array.from(e.target.files));
        setSitePlan(Array.from(e.target.files));
    }
    const handleFileChangeusap = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSusap(pArray)
        // console.log(Array.from(e.target.files));
        setSiteAnalysisReport(Array.from(e.target.files));
    }
    const handleFileChangeuei = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSusep(pArray)
        // console.log(Array.from(e.target.files));
        setEnviromentImpactReport(Array.from(e.target.files));
    }
    const handleFileChangeutc = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSustp(pArray)
        // console.log(Array.from(e.target.files));
        setTaxClearance(Array.from(e.target.files));
    }
    const handleFileChangeuls = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSuls(pArray)
        // console.log(Array.from(e.target.files));
        setLetterofSupervision(Array.from(e.target.files));
    }
    const handleFileChangeusss = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setSulsss(pArray)
        // console.log(Array.from(e.target.files));
        seStampandSeal(Array.from(e.target.files));
    }

    const handleLandandProperties = (e) => {
        const tergetfile = Array.from(e.target.files);
        if (tergetfile.length > MAX_LENGTH) {
            e.preventDefault();
            WarningAlert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        let pArray = tergetfile.map((option) => {
            let p = {};
            p.name = option.name;
            return p;
        });
        setproperties(pArray)
        setLandandProerty(Array.from(e.target.files));
    }

    const [drawing, setDrawin] = useState("");
    const [projecttype, setProjectType] = useState("");
    const [residenttype, setResidentType] = useState("");
    const [purposebuilding, setPurposeBuilding] = useState("");

    const handleDrawingChange = (event) => {
        setDrawin(event.target.value);
    }

    const handleProjectType = (event) => {
        // setValue(!values);
        setProjectType(event.target.value);
    }

    const handleResidentType = (event) => {
        // setValue(!values);
        setResidentType(event.target.value);
    }
    const handleComercialType = (event) => {
        // setValue(!values);
        setResidentType(event.target.value);
    }
    const handleReligionType = (event) => {
        // setValue(!values);
        setResidentType(event.target.value);
    }
    const handleEducationalType = (event) => {
        // setValue(!values);
        setResidentType(event.target.value);
    }
    const handlePurposeChange = (event) => {
        // setValue(!values);
        setPurposeBuilding(event.target.value);
    }
    const submitHandler = async () => {
        try {
            setLoading(true)
            // console.log(userData);

            const fd = new FormData();
            for (let s = 0; s < surveyPlan.length; s++) {
                fd.append(`surveyPlan`, surveyPlan[s]);
            }
            for (let p = 0; p < atitechturePlan.length; p++) {
                fd.append(`architecturalPlan`, atitechturePlan[p]);
            }
            for (let t = 0; t < structuralPlan.length; t++) {
                fd.append(`structuralPlan`, structuralPlan[t]);
            }
            for (let m = 0; m < mechanicalplan.length; m++) {
                fd.append(`mechanicalPlan`, mechanicalplan[m]);
            }
            for (let e = 0; e < electricalPlan.length; e++) {
                fd.append(`electricalPlan`, electricalPlan[e]);
            }
            // for (let d = 0; d < drawing.length; d++) {
            //     fd.append(`drawingType`, drawing[d]);
            // }
            fd.append(`drawingType`, drawing);
            fd.append('title', user?.fname);
            fd.append('clientName', value.clientname);
            fd.append('projectLocation', value.location);
            fd.append('projectType', projecttype);
            fd.append('buildingType', residenttype);
            fd.append('userType', user.userType);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const result = await submitDraw(fd, config);
            if (result.success === true) {
                SuccessAlert("Drawing Project created successfully!");
                navigate("/dashboard/projects")
            }
            CloseSurvey()
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const formdraw = useFormik({
        initialValues: {
            title: "",
            name: "",
            clientname: "",
            location: "",
        },
        onSubmit: submitHandler,

    });
    const submitGeo = async () => {
        try {
            setLoading(true)
            // console.log(userData);
            const fd = new FormData();
            fd.append('userType', user.userType);
            fd.append('clientName', value.clientname);
            fd.append('propertyLocation', value.locationofthesite);
            fd.append('landSize', value.sizeofland);
            fd.append('propertyType', intendedproject);
            fd.append('siteHasBuilding', stbuilding);
            fd.append('noOfIntentendedBorehole', value.gborehole);
            fd.append('depthOfBorehole', value.borehole);
            fd.append('noOfCpt', value.cpt);
            fd.append('tonnageOfCpt', settcpt);
            fd.append('typeOfCpt', setTypeofcpt);
            fd.append('anySpecialInvestigation', setspecialize);
            fd.append('comment', value.specify);
            fd.append('title', 'Request for geotechnical Investigation');
            for (let dd = 0; dd < landandproperty.length; dd++) {
                fd.append(`propertyPicture`, landandproperty[dd]);
            }
            console.log(fd);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const result = await submitGeof(fd, config);
            if (result.success === true) {
                SuccessAlert("Geotechnical Investigation created successfully!");
                navigate("/dashboard/projects")
            }
            CloseSurvey()
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }


    const formdrawinvest = useFormik({
        initialValues: {
            title: "",
            name: "",
            clientname: "",
            location: "",
            sizeofland: "",
            gborehole: "",
            borehole: "",
            cpt: "",
            specify: "",
        },
        onSubmit: submitGeo,

    });

    const submitHandlerConstr = async () => {
        try {
            setLoading(true)
            // console.log(userData);

            const fd = new FormData();
            for (let s = 0; s < surveyPlan.length; s++) {
                fd.append(`surveyPlan`, surveyPlan[s]);
            }
            for (let p = 0; p < atitechturePlan.length; p++) {
                fd.append(`architecturalPlan`, atitechturePlan[p]);
            }
            for (let t = 0; t < structuralPlan.length; t++) {
                fd.append(`structuralPlan`, structuralPlan[t]);
            }
            for (let m = 0; m < mechanicalplan.length; m++) {
                fd.append(`mechanicalPlan`, mechanicalplan[m]);
            }
            for (let e = 0; e < electricalPlan.length; e++) {
                fd.append(`electricalPlan`, electricalPlan[e]);
            }
            for (let d = 0; d < drawing.length; d++) {
                fd.append(`drawingType`, drawing[d]);
            }
            fd.append('title', user?.fname);
            fd.append('userType', user.userType);
            fd.append('clientName', value.clientname);
            fd.append('projectLocation', value.location);
            fd.append('projectType', projecttype);
            fd.append('buildingType', residenttype);
            console.log(fd);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const result = await submitContruct(fd, config);
            if (result.success === true) {
                SuccessAlert("Buiding Contractor Request created successfully!");
                navigate("/dashboard/projects")
            }
            CloseSurvey()
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    const formdracd = useFormik({
        initialValues: {
            title: "",
            name: "",
            clientname: "",
            location: "",
        },
        onSubmit: submitHandlerConstr,

    });

    const submitHandlerBuidApp = async () => {
        try {
            setLoading(true)
            // console.log(userData);

            const fd = new FormData();
            for (let s = 0; s < surveyPlan.length; s++) {
                fd.append(`surveyPlan`, surveyPlan[s]);
            }
            for (let p = 0; p < atitechturePlan.length; p++) {
                fd.append(`architecturalPlan`, atitechturePlan[p]);
            }
            for (let t = 0; t < structuralPlan.length; t++) {
                fd.append(`structuralPlan`, structuralPlan[t]);
            }
            for (let m = 0; m < mechanicalplan.length; m++) {
                fd.append(`mechanicalPlan`, mechanicalplan[m]);
            }
            for (let e = 0; e < electricalPlan.length; e++) {
                fd.append(`electricalPlan`, electricalPlan[e]);
            }
            for (let r = 0; r < soiltestreport.length; r++) {
                fd.append(`soilTestReport`, soiltestreport[r]);
            }
            for (let w = 0; w < siteplan.length; w++) {
                fd.append(`sitePlan`, siteplan[w]);
            }
            for (let o = 0; o < siteanalysisreport.length; o++) {
                fd.append(`siteAnalysisReport`, siteanalysisreport[o]);
            }
            for (let c = 0; c < enviromentimpactreport.length; c++) {
                fd.append(`environmentImpactReport`, enviromentimpactreport[c]);
            }
            for (let f = 0; f < taxClearance.length; f++) {
                fd.append(`clearanceCertificate`, taxClearance[f]);
            }
            for (let h = 0; h < stampandseal.length; h++) {
                fd.append(`structuralCalculationSheet`, stampandseal[h]);
            }
            for (let n = 0; n < cofoorofo.length; n++) {
                fd.append(`deedOfAgreement`, cofoorofo[n]);
            }
            for (let u = 0; u < letterofsupervision.length; u++) {
                fd.append(`supervisorLetter`, letterofsupervision[u]);
            }
            fd.append('userType', user.userType);
            fd.append('title', value.title);
            fd.append('clientName', value.clientname);
            fd.append('projectLocation', value.location);
            fd.append('purpose', purposebuilding);

            console.log(fd);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const result = await submitBUidAppr(fd, config);
            if (result.success === true) {
                SuccessAlert("Building Approval Project created successfully!");
                navigate("/dashboard/projects")
            }
            CloseSurvey()
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const formdrabud = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: submitHandlerBuidApp,

    });

    const { title, name, clientname, locationofthesite, location, propertyLocation, sizeofland, gborehole, borehole, cpt, specify } = form.values;
    const value = form.values


    const [contractorData, setContractorData] = useState({
        title: "",
        clientName: "",
        projectLocation: "",
        projectType: "",
        buildingType: "",
        surveyPlan: "",
        structuralPlan: "",
        architecturalPlan: "",
        mechanicalPlan: "",
    });
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'title' && (newValue = { title: newVal });
        variable === 'clientName' && (newValue = { clientName: newVal });
        variable === 'projectLocation' && (newValue = { projectLocation: newVal });
        variable === 'projectType' && (newValue = { projectType: newVal });
        variable === 'buildingType' && (newValue = { buildingType: newVal });
        variable === 'surveyPlan' && (newValue = { surveyPlan: newVal });
        variable === 'structuralPlan' && (newValue = { structuralPlan: newVal });
        variable === 'architecturalPlan' && (newValue = { architecturalPlan: newVal });
        variable === 'mechanicalPlan' && (newValue = { mechanicalPlan: newVal });

        setContractorData({
            ...contractorData,
            ...newValue,
        });
    };
    const contractorSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            // console.log(userData);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const { architecturalPlan, mechanicalPlan, structuralPlan, surveyPlan, clientName, projectLocation, projectType, title } = contractorData
            const fd = new FormData();
            for (let c = 0; c < architecturalPlan.length; c++) {
                fd.append(`architecturalPlan`, architecturalPlan[c]);
            }
            for (let f = 0; f < mechanicalPlan.length; f++) {
                fd.append(`mechanicalPlan`, mechanicalPlan[f]);
            }
            // for (let h = 0; h < electricalPlan.length; h++) {
            //     fd.append(`electricalPlan`, electricalPlan[h]);
            // }
            for (let n = 0; n < structuralPlan.length; n++) {
                fd.append(`structuralPlan`, structuralPlan[n]);
            }
            for (let u = 0; u < surveyPlan.length; u++) {
                fd.append(`surveyPlan`, surveyPlan[u]);
            }
            fd.append('projectType', projectType);
            fd.append('title', title);
            fd.append('clientName', clientName);
            fd.append('userType', user.userType);
            fd.append('projectLocation', projectLocation);

            console.log(fd);
            const result = await submitBuildingContractor(fd, config);
            if (result.success === true) {
                SuccessAlert("Building Contractor Project created successfully!");
                navigate("/dashboard/projects")
            }
            CloseSurvey()
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    console.log(contractorData);
    return (
        <div>
            <div className="font-primary relative z-10">
                <Header />
                <div className="bg-service bg-cover bg-center text-white lg:h-80 h-52 flex items-center">
                    <div className="box">
                        <div>
                            <p className="lg:text-4xl text-2xl fw-700 mb-4">
                                Find Service Partner
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
                                <div className="shadow-md h-48 center-item">
                                    <div className="cursor-pointer" onClick={() => {
                                        // eslint-disable-next-line
                                        {
                                            // eslint-disable-next-line
                                            auth.isAuthenticated ?
                                                setLandSurvey(true) :
                                                AuhtCheck()
                                        }
                                    }}>
                                        <img src={require("../assets/images/survey.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                        <p className="fw-500">Land Survey</p>
                                    </div>
                                </div>
                                <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
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
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {landSurvey && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 h-800 overflow-y-auto overscroll-none lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <p className="text-lg lg:text-2xl fw-600">Request Land Survey</p>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={form.handleSubmit}>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        1. Name for the property<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        required
                                        name="title"
                                        id="title"
                                        value={title}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    {
                                        form.touched.title && form.errors.title ? <p className='text-red-500'>{form.errors.ntitleame}</p> : null
                                    }
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        2. Location of the property<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="propertyLocation"
                                        id="propertyLocation"
                                        required
                                        value={propertyLocation}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}

                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        3. Local Government of the Property<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="flex mt-2 fs-500" onChange={handleChangee.bind(this)}>
                                        <div className="w-6/12">
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Eti Osa" />
                                                {/* <input type="radio" required value="Eti Osa" name="Eti Osa" /> */}
                                                <label className="pl-1">Eti Osa</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Lagos Island" />
                                                <label className="pl-1">Lagos Island</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ikeja" />
                                                <label className="pl-1">Ikeja</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Apapa" />
                                                <label className="pl-1">Apapa</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Agege" />
                                                <label className="pl-1">Agege</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Alimosho" />
                                                <label className="pl-1">Alimosho</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Amuwu Odofin" />
                                                <label className="pl-1">Amuwu Odofin</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ibeju Lekki" />
                                                <label className="pl-1">Ibeju Lekki</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ifako Ijaye" />
                                                <label className="pl-1">Ifako Ijaye</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Kosofe" />
                                                <label className="pl-1">Kosofe</label>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Lagos Mainland" />
                                                <label className="pl-1">Lagos Mainland</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Mushin" />
                                                <label className="pl-1">Mushin</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Oshodi Isolo" />
                                                <label className="pl-1">Oshodi Isolo</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ojo" />
                                                <label className="pl-1">Ojo</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Shomolu" />
                                                <label className="pl-1">Shomolu</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Surulere" />
                                                <label className="pl-1">Surulere</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ajeromi-Ifelodun" />
                                                <label className="pl-1">Ajeromi-Ifelodun</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Badagry" />
                                                <label className="pl-1">Badagry</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Epe" />
                                                <label className="pl-1">Epe</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="lga" value="Ikorodu" />
                                                <label className="pl-1">Ikorodu</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        4. Size of Land<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="flex mt-2 fs-500" onChange={handleChangeem.bind(this)}>
                                        <div className="w-6/12">
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="0 - 1000 sq.m" />
                                                <label className="pl-1">0 - 1000 sq.m</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="1001 - 2000 sq.m" />
                                                <label className="pl-1">1001 - 2000 sq.m</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="2001 - 4000 sq.m" />
                                                <label className="pl-1">2001 - 4000 sq.m</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="40001 - 5000 sq.m" />
                                                <label className="pl-1">40001 - 5000 sq.m</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="5001 - 1 HA" />
                                                <label className="pl-1">5001 - 1 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="1.01 HA - 2 HA" />
                                                <label className="pl-1">1.01 HA - 2 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="2.01 HA - 4 HA" />
                                                <label className="pl-1">2.01 HA - 4 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="4.01 HA - 6 HA" />
                                                <label className="pl-1">4.01 HA - 6 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="6.01 HA - 8 HA" />
                                                <label className="pl-1">6.01 HA - 8 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="8.01 HA - 10 HA" />
                                                <label className="pl-1">8.01 HA - 10 HA</label>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="10.01 HA - 15 HA" />
                                                <label className="pl-1">10.01 HA - 15 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="15.01 HA - 20 HA" />
                                                <label className="pl-1">15.01 HA - 20 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="20.01 HA - 25 HA" />
                                                <label className="pl-1">20.01 HA - 25 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="25.01 HA - 30 HA" />
                                                <label className="pl-1">25.01 HA - 30 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="30.01 HA - 35 HA" />
                                                <label className="pl-1">30.01 HA - 35 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="35.01 HA - 40 HA" />
                                                <label className="pl-1">35.01 HA - 40 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="40.01 HA - 45 HA" />
                                                <label className="pl-1">40.01 HA - 45 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="45.01 HA -50 HA" />
                                                <label className="pl-1">45.01 HA -50 HA</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="size" value="Over 50 HA" />
                                                <label className="pl-1">Over 50 HA</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        5. Type of Property to be built<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleChangeet.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" required name="b-type" value="Residential" />
                                            <label className="pl-1">Residential</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="b-type" value="Commercial" />
                                            <label className="pl-1">Commercial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="b-type" value="Industrial" />
                                            <label className="pl-1">Industrial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="b-type" value="Educational" />
                                            <label className="pl-1">Educational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="b-type" value="Religious" />
                                            <label className="pl-1">Religious</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        6. Type of Survey<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleChangeet.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Perimeter Survey" />
                                            <label className="pl-1">Perimeter Survey</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Detailed Survey" />
                                            <label className="pl-1">Detailed Survey</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="As-built survey" />
                                            <label className="pl-1">As-built survey</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Re-establishment of beacons" />
                                            <label className="pl-1">Re-establishment of beacons</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Compilation of plan" />
                                            <label className="pl-1">Compilation of plans</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Court Appearance" />
                                            <label className="pl-1">Court Appearance</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Engineering Survey" />
                                            <label className="pl-1">Engineering Survey</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Change of Title" />
                                            <label className="pl-1">Change of Title</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    {auth.isAuthenticated ?
                                        loading ? <Spinner /> :
                                            <div className="w-full btn bg-primary text-white">
                                                {/* <button 
                                                type='submit' 
                                                className="btn-primary w-5/12 px-1 "
                                                // onClick={() => createNewProduct("draft")}
                                                >
                                                    Save to Drafts
                                                </button> */}
                                                <button
                                                    type='submit'
                                                    className="w-full btn bg-primary text-white"
                                                // onClick={() => createNewProduct("pending")}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        :
                                        <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>Login</button>
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {gInvest && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 lg:px-12 h-800 overflow-y-auto overscroll-none  w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-lg lg:text-2xl fw-600">REQUEST FOR GEOTECHNICAL AND GEOPHYSICAL INFORMATION</p>
                                <p className="mt-2 fs-500">The survey will take approximately 5 minutes to complete.</p>
                            </div>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={formdrawinvest.handleSubmit}>
                                <div className="fs-500">
                                    <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="name"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        1. Name of client<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="clientname"
                                        id="clientname"
                                        required
                                        value={clientname}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        2. Location of site<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="locationofthesite"
                                        id="locationofthesite"
                                        required
                                        value={locationofthesite}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        3. Size of Land<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="sizeofland"
                                        id="sizeofland"
                                        required
                                        value={sizeofland}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full" onChange={handleChangeTintendedPro.bind(this)}>
                                    <label className="block fw-600">
                                        4. Intended project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Residential Building" />
                                            <label className="pl-1">Residential Building</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Industrial Building" />
                                            <label className="pl-1">Industrial Building</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="High Rise Building" />
                                            <label className="pl-1">High Rise Building</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Road" />
                                            <label className="pl-1">Road</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Estate" />
                                            <label className="pl-1">Estate</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Dumping Site" />
                                            <label className="pl-1">Dumping Site</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Water Borehole" />
                                            <label className="pl-1">Water Borehole</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="i-project" value="Others" />
                                            <label className="pl-1">Others</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        5. Is there a building on the site<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleChangebuilding.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" name="b-site" value="true" />
                                            <label className="pl-1">Yes</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="b-site" value="false" />
                                            <label className="pl-1">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        6. Upload available picture of the land or property
                                    </label>
                                    <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input class="cursor-pointer w-full p-2 " type="file" onChange={handleLandandProperties} multiple />
                                    </div>
                                    {selectedpro?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        7. Number of intended geotechnical borehole
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="gborehole"
                                        id="gborehole"
                                        required
                                        value={gborehole}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        8. Depth of borehole
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="borehole"
                                        id="borehole"
                                        required
                                        value={borehole}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        9. Number of CPT
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                        name="cpt"
                                        id="cpt"
                                        required
                                        value={cpt}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        10. Tonnage of CPT
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleChangeTCpt.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" name="cpt" />
                                            <label className="pl-1">2.5 Tons</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="cpt" />
                                            <label className="pl-1">10 Tons</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="cpt" />
                                            <label className="pl-1">20 Tons</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full" onChange={handleChangeTypeofCPT.bind(this)}>
                                    <label className="block fw-600">
                                        11. Type of CPT
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" name="c-type" />
                                            <label className="pl-1">Mechanical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="c-type" />
                                            <label className="pl-1">Electrical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="c-type" />
                                            <label className="pl-1">Dynamic</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        12. Apart from borehole and CPT, are there any special test or investigation you intend to run?
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleChangeSpecialize.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" name="special" value="true" />
                                            <label className="pl-1">Yes</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" name="special" value="false" />
                                            <label className="pl-1">No</label>
                                        </div>
                                    </div>
                                </div>
                                {
                                    (setspecialize === 'true') &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            13.kindly specify
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                            name="specify"
                                            id="specify"
                                            required
                                            value={specify}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                    </div>
                                }
                                <div className="mt-8">
                                    {auth.isAuthenticated ?
                                        loading ? <Spinner /> :
                                            <div className="w-full btn bg-primary text-white">
                                                {/* <button 
                                                type='submit' 
                                                className="btn-primary w-5/12 px-1 "
                                                // onClick={() => createNewProduct("draft")}
                                                >
                                                    Save to Drafts
                                                </button> */}
                                                <button
                                                    type='submit'
                                                    className="w-full btn bg-primary text-white"
                                                // onClick={() => createNewProduct("pending")}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        :
                                        <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>Login</button>
                                    }
                                    {/* <button className="btn-primary w-full">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {cDraw && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 lg:px-12 h-800 overflow-y-auto overscroll-none  w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-lg lg:text-2xl fw-600">Request For Drawing</p>
                                <p className="mt-2 fs-500">Architectural, Structural, Electrical and Mechanical Drawings.</p>
                            </div>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={formdraw.handleSubmit}>
                                <div className="fs-500">
                                    <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={formdraw.handleChange}
                                        onBlur={formdraw.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        Name of client<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="clientname"
                                        id="clientname"
                                        required
                                        value={clientname}
                                        onChange={formdraw.handleChange}
                                        onBlur={formdraw.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full" >
                                    <label className="block fw-600">
                                        Type of drawing needed<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleDrawingChange.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Architectural" />
                                            <label className="pl-1">Architectural</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Structural" />
                                            <label className="pl-1">Structural</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Mechanical" />
                                            <label className="pl-1">Mechanical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Electrical" />
                                            <label className="pl-1">Electrical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="All" />
                                            <label className="pl-1">All</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full rounded p-2" type="file" name='photosuveyplan'
                                            onChange={handleFileChangesp} multiple />
                                    </div>
                                    {selectedsp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                {(drawing === "Architectural" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Architectural plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangeatp} multiple />
                                        </div>
                                        {selectedap?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}
                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Structural" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Structural plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangespstp} multiple />
                                        </div>
                                        {selectedstp?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}

                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Mechanical" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Mechanical plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangemp} multiple />
                                        </div>
                                        {selectedsmc?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}

                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Electrical" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Electrical plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangeep} multiple />
                                        </div>
                                        {selectedelp?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}

                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block">
                                        Location of Project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter location address"
                                        name="location"
                                        id="location"
                                        required
                                        value={location}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>


                                <div className="mt-3 lg:mt-6 w-full" onChange={handleProjectType.bind(this)}>
                                    <label className="block fw-600">
                                        Type of project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Residential" />
                                            <label className="pl-1">Residential</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Commercial" />
                                            <label className="pl-1">Commercial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Industrial" />
                                            <label className="pl-1">Industrial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Educational" />
                                            <label className="pl-1">Educational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Religious" />
                                            <label className="pl-1">Religious</label>
                                        </div>
                                    </div>
                                </div>

                                {(projecttype === "Residential") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleResidentType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Bungalow" />
                                                <label className="pl-1">Bungalow</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Duplex" />
                                                <label className="pl-1">Duplex</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Multi-storey" />
                                                <label className="pl-1">Multi-storey</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Terraced building" />
                                                <label className="pl-1">Terraced building</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="High rise building" />
                                                <label className="pl-1">High rise building</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Commercial") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleComercialType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Bank" />
                                                <label className="pl-1">Bank</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Shopping mall" />
                                                <label className="pl-1">Shopping mall</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Supermarket" />
                                                <label className="pl-1">Supermarket</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Office suites" />
                                                <label className="pl-1">Office suites</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Religious") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleReligionType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="m-type" value="Church" />
                                                <label className="pl-1">Church</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="m-type" value="Mosque" />
                                                <label className="pl-1">Mosque</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Educational") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleEducationalType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Primary" />
                                                <label className="pl-1">Primary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Secondary" />
                                                <label className="pl-1">Secondary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Tertiary" />
                                                <label className="pl-1">Tertiary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Postgraduate" />
                                                <label className="pl-1">Postgraduate</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="mt-8">
                                    {auth.isAuthenticated ?
                                        loading ? <Spinner /> :
                                            <div className="w-full btn bg-primary text-white">
                                                {/* <button 
                                                type='submit' 
                                                className="btn-primary w-5/12 px-1 "
                                                // onClick={() => createNewProduct("draft")}
                                                >
                                                    Save to Drafts
                                                </button> */}
                                                <button
                                                    type='submit'
                                                    className="w-full btn bg-primary text-white"
                                                // onClick={() => createNewProduct("pending")}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        :
                                        <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>Login</button>
                                    }
                                    {/* <button className="btn-primary w-full">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {bAppove && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 lg:px-12 w-11/12 py-12 h-800 overflow-y-auto overscroll-none shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <p className="text-lg lg:text-2xl fw-600">Request Building Approval</p>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={formdrabud.handleSubmit}>
                                <div className="w-full">
                                    <label className="block fw-600">
                                        1. Name of client<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={formdrabud.handleChange}
                                        onBlur={formdrabud.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="w-full lg:mt-6 mt-3" onChange={handlePurposeChange.bind(this)}>
                                    <label className="block fw-600">
                                        2. Purpose of building<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" />
                                            <label className="pl-1">Residential</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Commercial" />
                                            <label className="pl-1">Commercial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Industrial" />
                                            <label className="pl-1">Industrial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Religious" />
                                            <label className="pl-1">Religious</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Educational" />
                                            <label className="pl-1">Educational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Recreational" />
                                            <label className="pl-1">Recreational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="purpose" value="Others" />
                                            <label className="pl-1">Others</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        3. Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer rounded p-2 w-full" type="file" name='photosuveyplan'
                                            onChange={handleFileChangesp} multiple />
                                    </div>
                                    {selectedsp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>

                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        4.  Upload Architectural plan
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer rounded w-full p-2" type="file" onChange={handleFileChangeatp} multiple />
                                    </div>
                                    {selectedap?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>

                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        5.  Upload Structural plan
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer rounded p-2 w-full" type="file" onChange={handleFileChangespstp} multiple />
                                    </div>
                                    {selectedstp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>

                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        6.   Upload Mechanical plan
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full p-2 rounded" type="file" onChange={handleFileChangemp} multiple />
                                    </div>
                                    {selectedsmc?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>

                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        7.  Upload Electrical plan
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer p-2 w-full rounded" type="file" onChange={handleFileChangeep} multiple />
                                    </div>
                                    {selectedelp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>

                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        8. Upload Soil Test Report
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full rounded p-2" type="file" onChange={handleFileChangestp} multiple />
                                    </div>
                                    {selectedsoi?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        9. Upload C of O/Deed of Assignment/R of O<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full rounded-p-2" type="file" onChange={handleFileChangecfo} multiple />
                                    </div>
                                    {selectedcos?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        10. Upload Site plan
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full rounded p-2" type="file" onChange={handleFileChangeusp} multiple />
                                    </div>
                                    {selectedcusp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        11. Upload Site Analysis Report
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full rounded-p-2" type="file" onChange={handleFileChangeusap} multiple />
                                    </div>
                                    {selectedcusap?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        12. Upload Environmental Impact Assessment report
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full p-2 rounded" type="file" onChange={handleFileChangeuei} multiple />
                                    </div>
                                    {selectedcusep?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        13. Upload Tax Clearance Certificate
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full p-2 rounded" type="file" onChange={handleFileChangeutc} multiple />
                                    </div>
                                    {selectedcustp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        14.  Upload Letter of Supervision from COREN Registered Engineer
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full p-2 rounded" type="file" onChange={handleFileChangeuls} multiple />
                                    </div>
                                    {selectedculs?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        15. Upload Stamped and Sealed Copy of Structural Calculation Sheet
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer p-2 w-full rounded" type="file" onChange={handleFileChangeusss} multiple />
                                    </div>
                                    {selectedculsss?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}

                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-8">
                                    {auth.isAuthenticated ?
                                        loading ? <Spinner /> :
                                            <div className="w-full btn bg-primary text-white">
                                                {/* <button 
                                                type='submit' 
                                                className="btn-primary w-5/12 px-1 "
                                                // onClick={() => createNewProduct("draft")}
                                                >
                                                    Save to Drafts
                                                </button> */}
                                                <button
                                                    type='submit'
                                                    className="w-full btn bg-primary text-white"
                                                // onClick={() => createNewProduct("pending")}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        :
                                        <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>Login</button>
                                    }
                                    {/* <button className="btn-primary w-full">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {sCalc && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 lg:px-12 h-800 overflow-y-auto overscroll-none  w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-lg lg:text-2xl fw-600">Request for Contractor</p>
                                <p className="mt-2 fs-500">Architectural, Structural, Electrical and Mechanical Drawings.</p>
                            </div>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>

                        <div className="mt-5">
                            <form onSubmit={formdracd.handleSubmit}>
                                <div className="fs-500">
                                    <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={formdracd.handleChange}
                                        onBlur={formdracd.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400" />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        Name of client<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="clientname"
                                        id="clientname"
                                        required
                                        value={clientname}
                                        onChange={formdracd.handleChange}
                                        onBlur={formdracd.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full" >
                                    <label className="block fw-600">
                                        Type of drawing needed<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500" onChange={handleDrawingChange.bind(this)}>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Architectural" />
                                            <label className="pl-1">Architectural</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Structural" />
                                            <label className="pl-1">Structural</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Mechanical" />
                                            <label className="pl-1">Mechanical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="Electrical" />
                                            <label className="pl-1">Electrical</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="d-type" value="All" />
                                            <label className="pl-1">All</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                        <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" name='photosuveyplan'
                                            onChange={handleFileChangesp} multiple />
                                    </div>
                                    {selectedsp?.map((item) => {
                                        return (<p>{item.name}</p>)
                                    })}
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                {(drawing === "Architectural" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Architectural plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangeatp} multiple />
                                        </div>
                                        {selectedap?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}
                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Structural" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Structural plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangespstp} multiple />
                                        </div>
                                        {selectedstp?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}
                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Mechanical" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Mechanical plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangemp} multiple />
                                        </div>
                                        {selectedsmc?.map((item) => {
                                            return (<p>{item.name}</p>)
                                        })}
                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                {(drawing === "Electrical" || drawing === "All") &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            Upload Electrical plan,
                                        </label>
                                        <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                            <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload /><span className="pl-2">Upload file</span></p>
                                            <input className="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file" onChange={handleFileChangeep} multiple />
                                            {selectedelp?.map((item) => {
                                                return (<p>{item.name}</p>)
                                            })}
                                        </div>
                                        <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                            Audio
                                        </p>
                                    </div>
                                }
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block">
                                        Location of Project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter location address"
                                        name="location"
                                        id="location"
                                        required
                                        value={location}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>


                                <div className="mt-3 lg:mt-6 w-full" onChange={handleProjectType.bind(this)}>
                                    <label className="block fw-600">
                                        Type of project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Residential" />
                                            <label className="pl-1">Residential</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Commercial" />
                                            <label className="pl-1">Commercial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Industrial" />
                                            <label className="pl-1">Industrial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Educational" />
                                            <label className="pl-1">Educational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" required name="p-type" value="Religious" />
                                            <label className="pl-1">Religious</label>
                                        </div>
                                    </div>
                                </div>

                                {(projecttype === "Residential") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleResidentType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Bungalow" />
                                                <label className="pl-1">Bungalow</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Duplex" />
                                                <label className="pl-1">Duplex</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Multi-storey" />
                                                <label className="pl-1">Multi-storey</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="Terraced building" />
                                                <label className="pl-1">Terraced building</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="r-type" value="High rise building" />
                                                <label className="pl-1">High rise building</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Commercial") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleComercialType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Bank" />
                                                <label className="pl-1">Bank</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Shopping mall" />
                                                <label className="pl-1">Shopping mall</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Supermarket" />
                                                <label className="pl-1">Supermarket</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Office suites" />
                                                <label className="pl-1">Office suites</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Religious") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleReligionType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="m-type" value="Church" />
                                                <label className="pl-1">Church</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="m-type" value="Mosque" />
                                                <label className="pl-1">Mosque</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="c-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {(projecttype === "Educational") &&
                                    <div className="mt-3 lg:mt-6 w-full" onChange={handleEducationalType.bind(this)}>
                                        <label className="block fw-600">
                                            Select type of building<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Primary" />
                                                <label className="pl-1">Primary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Secondary" />
                                                <label className="pl-1">Secondary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Tertiary" />
                                                <label className="pl-1">Tertiary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Postgraduate" />
                                                <label className="pl-1">Postgraduate</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" required name="e-type" value="Others" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="mt-8">
                                    {auth.isAuthenticated ?
                                        loading ? <Spinner /> :
                                            <div className="w-full btn bg-primary text-white">
                                                {/* <button 
                                                type='submit' 
                                                className="btn-primary w-5/12 px-1 "
                                                // onClick={() => createNewProduct("draft")}
                                                >
                                                    Save to Drafts
                                                </button> */}
                                                <button
                                                    type='submit'
                                                    className="w-full btn bg-primary text-white"
                                                // onClick={() => createNewProduct("pending")}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        :
                                        <button onClick={() => navigate("/login")} className='w-full btn bg-primary text-white'>Login</button>
                                    }
                                    {/* <button className="btn-primary w-full">Submit</button> */}
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            )}
            {bCon && (
                <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
                    <div className="bg-white lg:w-5/12 px-5 lg:px-12 h-800 overflow-y-auto overscroll-none  w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-lg lg:text-2xl fw-600">Request for Building Contractor</p>
                                <p className="mt-2 fs-500">Architectural, Structural, Electrical and Mechanical Drawings.</p>
                            </div>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey} />

                        </div>
                        <div className="mt-6">
                            <p><span className="text-red-600 pr-2">*</span>Required</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={contractorSubmitHandler}>
                                <div className="fs-500">
                                    <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                                    <input
                                        type="text"
                                        name="clientName"
                                        onChange={(e) => updateValue(e.target.value, 'clientName')}
                                        placeholder="Enter your name"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        1. Title of project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => updateValue(e.target.value, 'title')}
                                        placeholder=""
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        2. Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer w-full p-2 rounded" type="file" onChange={(e) => updateValue(e.target.files, 'surveyPlan')} multiple />
                                    </div>
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        3. Upload Architectural plan<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input className="cursor-pointer p-2 w-full" onChange={(e) => updateValue(e.target.files, 'architecturalPlan')} type="file" multiple />
                                    </div>
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        4. Upload Structural plan,
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input onChange={(e) => updateValue(e.target.files, 'structuralPlan')} className="cursor-pointer w-full rounded p-2" type="file" multiple />
                                    </div>
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        5. Upload Mechanical plan,
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input onChange={(e) => updateValue(e.target.files, 'mechanicalPlan')} className="cursor-pointer w-full rounded p-2" type="file" multiple />
                                    </div>
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        6. Upload Electrical plan,
                                    </label>
                                    <div className="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                        <input onChange={(e) => updateValue(e.target.files, 'electricalPlan')} className="cursor-pointer w-full rounded p-2" type="file" multiple />
                                    </div>
                                    <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                        Audio
                                    </p>
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block">
                                        7. Location of Project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => updateValue(e.target.value, 'projectLocation')}
                                        placeholder="Enter location address"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                                </div>
                                <div className="mt-3 lg:mt-6 w-full">
                                    <label className="block fw-600">
                                        8. Type of project<span className="text-red-600 pl-2">*</span>
                                    </label>
                                    <div className="mt-3 fs-500">
                                        <div className="py-1">
                                            <input type="radio" onChange={(e) => updateValue('Residential', 'projectType')} required name="p-type" />
                                            <label className="pl-1">Residential</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" onChange={(e) => updateValue('Commercial', 'projectType')} required name="p-type" />
                                            <label className="pl-1">Commercial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" onChange={(e) => updateValue('Industrial', 'projectType')} required name="p-type" />
                                            <label className="pl-1">Industrial</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" onChange={(e) => updateValue('Educational', 'projectType')} required name="p-type" />
                                            <label className="pl-1">Educational</label>
                                        </div>
                                        <div className="py-1">
                                            <input type="radio" onChange={(e) => updateValue('Religious', 'projectType')} required name="p-type" />
                                            <label className="pl-1">Religious</label>
                                        </div>
                                    </div>
                                </div>
                                {
                                    contractorData.projectType === 'Residential' &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            9. If Residential, select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Bungalow', 'buildingType')} required name="r-type" />
                                                <label className="pl-1">Bungalow</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Duplex', 'buildingType')} required name="r-type" />
                                                <label className="pl-1">Duplex</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Multi-storey', 'buildingType')} required name="r-type" />
                                                <label className="pl-1">Multi-storey</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Terraced building', 'buildingType')} required name="r-type" />
                                                <label className="pl-1">Terraced building</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('High rise building', 'buildingType')} required name="r-type" />
                                                <label className="pl-1">High rise building</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    contractorData.projectType === 'Commercial' &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            9. If Commercial, select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Bank', 'buildingType')} required name="c-type" />
                                                <label className="pl-1">Bank</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Shopping mall', 'buildingType')} required name="c-type" />
                                                <label className="pl-1">Shopping mall</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Supermarket', 'buildingType')} required name="c-type" />
                                                <label className="pl-1">Supermarket</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Office suites', 'buildingType')} required name="c-type" />
                                                <label className="pl-1">Office suites</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Others', 'buildingType')} required name="c-type" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    contractorData.projectType === 'Religious' &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            9. If Religious, select type of building *<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Church', 'buildingType')} required name="m-type" />
                                                <label className="pl-1">Church</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Mosque', 'buildingType')} required name="m-type" />
                                                <label className="pl-1">Mosque</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Others', 'buildingType')} required name="m-type" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    contractorData.projectType === 'Educational' &&
                                    <div className="mt-3 lg:mt-6 w-full">
                                        <label className="block fw-600">
                                            9. If Educational, select type of building<span className="text-red-600 pl-2">*</span>
                                        </label>
                                        <div className="mt-3 fs-500">
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Primary', 'buildingType')} required name="e-type" />
                                                <label className="pl-1">Primary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Secondary', 'buildingType')} required name="e-type" />
                                                <label className="pl-1">Secondary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Tertiary', 'buildingType')} required name="e-type" />
                                                <label className="pl-1">Tertiary</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Postgraduate', 'buildingType')} required name="e-type" />
                                                <label className="pl-1">Postgraduate</label>
                                            </div>
                                            <div className="py-1">
                                                <input type="radio" onChange={(e) => updateValue('Others', 'buildingType')} required name="e-type" />
                                                <label className="pl-1">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="mt-8">
                                    {
                                        loading ? <Spinner /> :
                                            <button className="btn-primary w-full">Submit</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}