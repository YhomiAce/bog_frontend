import React from 'react';

export const FormTypes = ({data}) => {


    let formType = null;

    if (data?.projectTypes === "land_survey") {
        formType = <LsForm data={data} />
    }else if(data?.projectTypes === "building_approval"){
       formType = <BaForm data={data}/>
    }else if(data?.projectTypes === "geotechnical_investigation"){
       formType = <GiForm data={data}/>
    }else if(data?.projectTypes === "construction_drawing"){
       formType = <CdForm data={data}/>
    }else if(data?.projectTypes === "contractor"){
       formType = <BcForm data={data} />
    }
    return formType;
}

export const LsForm = ({data}) => {
    const formatProjectType = (type) => {
        switch (data.projectTypes) {
            case "land_survey":
                return <p className="">Land Survey</p>
            case "building_approval":
                return <p className=" ">Building Approval</p>
            case "contractor":
              return <p className="">Contractor</p>
            case "construction_drawing":
                return <p className=" ">Construction Drawing</p>
             case "geotechnical_investigation":
              return <p className="">Geotechnical Investigation</p>
            default: return type
        }
  
    }
    return (
        <div className=" bg-white lg:p-10 px-3 py-5 rounded">
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500 border-r">Project Type</p>
                <p className='lg:pl-4'>{formatProjectType(data?.projectTypes)}</p>
            </div>
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500">Name of Property</p>
                <p className='lg:pl-4'>{data?.projectData?.propertyName}</p>
            </div>
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500">Location of property</p>
                <p className='lg:pl-4'>{data?.projectData?.propertyLocation}</p>
            </div>
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500">Local Government</p>
                <p className='lg:pl-4'>{data?.projectData?.propertyLga}</p>
            </div>
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500">Size of Land</p>
                <p className='lg:pl-4'>{data?.projectData?.landSize}</p>
            </div>
            <div className="flex border-b py-3">
                <p className="w-3/12 fw-500">Type of Property to be built</p>
                <p className='lg:pl-4'>{data?.projectData?.propertyType}</p>
            </div>
        </div>
    )
}
export const GiForm = ({data}) => {
    const openDoc = (url) => {
        console.log(url)
        window.open(url, "_blank")
    }
    const formatProjectType = (type) => {
        switch (data.projectTypes) {
            case "land_survey":
                return <p className="">Land Survey</p>
            case "building_approval":
                return <p className=" ">Building Approval</p>
            case "contractor":
              return <p className="">Contractor</p>
            case "construction_drawing":
                return <p className=" ">Construction Drawing</p>
             case "geotechnical_investigation":
              return <p className="">Geotechnical Investigation</p>
            default: return type
        }
  
    }

    return (
       <div>
            <div className=" bg-white lg:p-10 px-3 py-5 rounded">
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Project Type</p>
                    <p>{formatProjectType(data?.projectTypes)}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Name of Client</p>
                    <p>{data?.projectData?.clientName}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Location of Site</p>
                    <p>{data?.projectData?.propertyLocation}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Size of Land</p>
                    <p>{data?.projectData?.landSize}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Intended Project</p>
                    <p>{data?.projectData?.propertyType}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Is there a building on the site</p>
                    <p>{data?.projectData?.siteHasBuilding === true ? "yes" : "no"}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Number of intended geotechnical borehole</p>
                    <p>{data?.projectData?.noOfIntentendedBorehole}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Depth of borehole</p>
                    <p>{data?.projectData?.depthOfBorehole}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Number of CPT</p>
                    <p>{data?.projectData?.noOfCpt}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Tonnage of CPT</p>
                    <p>{data?.projectData?.tonnageOfCpt}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Type of CPT</p>
                    <p>{data?.projectData?.typeOfCpt}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Apart from borehole and CPT, are there any special test or investigation you intend to run?</p>
                    <p>{data?.projectData?.anySpecialInvestigation === true ? "yes" : "no"}</p>
                </div>
            </div>
            <div className='mt-6 bg-white lg:p-10 rounded px-3 py-5'>
                <p className='text-2xl fw-600 rounded mb-10'>Uploads</p>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Picture of Land Property</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.propertyPicture)} alt="project" className='w-32 h-32 border rounded'>Preview document</p>
                    </div>
                </div>
            </div>
       </div>
    )
}
export const CdForm = ({data}) => {
    const openDoc = (url) => {
        console.log(url)
        window.open(url, "_blank")
    }
    const formatProjectType = (type) => {
        switch (data.projectTypes) {
            case "land_survey":
                return <p className="">Land Survey</p>
            case "building_approval":
                return <p className=" ">Building Approval</p>
            case "contractor":
              return <p className="">Contractor</p>
            case "construction_drawing":
                return <p className=" ">Construction Drawing</p>
             case "geotechnical_investigation":
              return <p className="">Geotechnical Investigation</p>
            default: return type
        }
  
    }
    return (
       <div>
            <div className=" bg-white px-3 py-5 lg:p-10 rounded">
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Project Type</p>
                    <p>{formatProjectType(data?.projectTypes)}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Name of Client</p>
                    <p>{data?.projectData?.clientName}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Type of Drawing needed</p>
                    <p>{data?.projectData?.drawingType}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Type of Project</p>
                    <p>{data?.projectData?.projectType}</p>
                </div>
            </div>
            <div className='mt-6 px-3 py-5 lg:p-10 bg-white roubded '>
                <p className='text-2xl fw-600rounded mb-10'>Uploads</p>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Survey Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)} alt="project" className='w-28 h-28 border pl-4 rounded border rounded-lg'>Preview document</p>
                    </div>
                </div>
            </div>
       </div>
    )
}
export const BaForm = ({data}) => {
    const openDoc = (url) => {
        console.log(url)
        window.open(url, "_blank")
    }
    const formatProjectType = (type) => {
        switch (data.projectTypes) {
            case "land_survey":
                return <p className="">Land Survey</p>
            case "building_approval":
                return <p className=" ">Building Approval</p>
            case "contractor":
              return <p className="">Contractor</p>
            case "construction_drawing":
                return <p className=" ">Construction Drawing</p>
             case "geotechnical_investigation":
              return <p className="">Geotechnical Investigation</p>
            default: return type
        }
  
    }
    return (
       <div>
            <div className=" bg-white px-3 py-5 lg:p-10 rounded">
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Project Type</p>
                    <p className='pl-4'>{formatProjectType(data?.projectTypes)}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Name of Client</p>
                    <p className='pl-4'>{data?.projectData?.clientName}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Purpose of building</p>
                    <p className='pl-4'>{data?.projectData?.purpose}</p>
                </div>
            </div>
            <div className='mt-6 px-3 py-5  lg:p-10 bg-white rounded '>
                <p className='text-2xl fw-600 rounded mb-10'>Uploads</p>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Survey Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Architectural Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.architecturalPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Structural Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.structuralPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Mechanical Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.mechanicalPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Electrical Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.electricalPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Soil Test Report</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">C of O/Deed of Assignment/R of O</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Site plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Site Analysis Report</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500"> Environmental Impact Assessment report</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Tax Clearance Certificate</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">  Letter of Supervision from COREN Registered Engineer</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500"> Stamped and Sealed Copy of Structural Calculation Sheet</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.structuralCalculationSheet)}  alt="project" className='w-56 h-8 border border-blue-500 cursor-pointer rounded text-center'>Preview document</p>
                    </div>
                </div>
            </div>
       </div>
    )
}
export const BcForm = ({data}) => {
    const openDoc = (url) => {
        console.log(url)
        window.open(url, "_blank")
    }
    const formatProjectType = (type) => {
        switch (data.projectTypes) {
            case "land_survey":
                return <p className="">Land Survey</p>
            case "building_approval":
                return <p className=" ">Building Approval</p>
            case "contractor":
              return <p className="">Contractor</p>
            case "construction_drawing":
                return <p className=" ">Construction Drawing</p>
             case "geotechnical_investigation":
              return <p className="">Geotechnical Investigation</p>
            default: return type
        }
  
    }
    return (
       <div>
            <div className=" bg-white px-3 py-5 lg:p-10 rounded">
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Project Type</p>
                    <p>{formatProjectType(data?.projectTypes)}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Name of Client</p>
                    <p>{data?.projectData?.clientName}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Location of Project</p>
                    <p>{data?.projectData?.propertyLocation}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Type of project</p>
                    <p>{data?.projectData?.projectType}</p>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Type of building</p>
                    <p>Land Survey</p>
                </div>
            </div>
            <div className='mt-6 px-3 py-5 bg-white  lg:p-10 rounded'>
                <p className='text-2xl fw-600 mb-10'>Uploads</p>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Survey Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.surveyPlan)}>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Architectural Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.architecturalPlan)}>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Structural Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.structuralPlan)}>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Mechanical Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.mechanicalPlan)}>Preview document</p>
                    </div>
                </div>
                <div className="flex border-b py-3">
                    <p className="w-3/12 fw-500">Electrical Plan</p>
                    <div>
                        <p onClick={() => openDoc(data?.projectData?.electricalPlan)}>Preview document</p>
                    </div>
                </div>
            </div>
       </div>
    )
}

