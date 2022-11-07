import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { AiOutlineCloudUpload } from 'react-icons/ai';

export default function Service() {

    const [landSurvey, setLandSurvey] = useState(false);
    const [gInvest, setGInvest] = useState(false);
    const [cDraw, setCDraw] = useState(false);
    const [bAppove, setBAppove] = useState(false);
    const [sCalc, setSCalc] = useState(false);

    const CloseSurvey = () => {
        setLandSurvey(false)
        setGInvest(false)
        setCDraw(false)
        setBAppove(false)
        setSCalc(false)
    }

  return (
    <div>
      <div className="font-primary relative z-10">
        <Header />
        <div className="bg-service bg-cover bg-center text-white lg:h-80 h-52 flex items-center">
          <div className="box">
            <div>
              <p className="lg:text-4xl text-2xl fw-700 mb-4">
                Find Service Patner
              </p>
              <p className="lg:w-5/12">Thousands of qualified workers avaliable to help you to kick start your project</p>
            </div>
          </div>
        </div>
        <div className="section">
            <div className="box">
                <div>
                    <div className="text-center py-4">
                        <p className="text-xl lg:text-3xl fw-600">What service do you need a service provider for  ?</p>
                    </div>
                    <div className="lg:grid-3 justify-between lg:mt-24 my-12">
                        <div className="shadow-md h-48 center-item">
                            <div className="cursor-pointer" onClick={() => {setLandSurvey(true)}}>
                                <img src={require("../assets/images/survey.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Land Survey</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                            <div className="cursor-pointer" onClick={() => {setGInvest(true)}}>
                            <img src={require("../assets/images/GI.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Geotechnical Investigation</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                            <div className="cursor-pointer" onClick={() => {setCDraw(true)}}>
                            <img src={require("../assets/images/CS.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Construction Drawing</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lg:flex justify-evenly lg:mb-24">
                        <div className="shadow-md lg:w-4/12 h-48 center-item lg:mt-3 mt-10">
                            <div className="cursor-pointer" onClick={() => {setBAppove(true)}}>
                            <img src={require("../assets/images/BA.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Building Approval</p>
                            </div>
                        </div>
                        <div className="shadow-md lg:w-4/12 h-48 center-item lg:mt-3 mt-10">
                            <div className="cursor-pointer" onClick={() => {setSCalc(true)}}>
                            <img src={require("../assets/images/SC.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Contractor or Smart Calculator</p>
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
                    <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey}/>
                    
                </div>
                <div className="mt-6">
                    <p><span className="text-red-600 pr-2">*</span>Required</p>
                </div>
                <div className="mt-5">
                    <form>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                               1. Name for the property<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                               2. Location of the property<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                               3. Local Government of the Property<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="flex mt-2 fs-500">
                                <div className="w-6/12">
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Eti Osa</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Lagos Island</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ikeja</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Apapa</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Agege</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Alimosho</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Amuwu Odofin</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ibeju Lekki</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ifako Ijaye</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Kosofe</label>
                                    </div>
                                </div>
                                <div className="w-6/12">
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Lagos Mainland</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Mushin</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Oshodi Isolo</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ojo</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Shomolu</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Surulere</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ajeromi-Ifelodun</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Badagry</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Epe</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="lga" />
                                        <label className="pl-1">Ikorodu</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                4. Size of Land<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="flex mt-2 fs-500">
                                <div className="w-6/12">
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">0 - 1000 sq.m</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">1001 - 2000 sq.m</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">2001 - 4000 sq.m</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">40001 - 5000 sq.m</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">5001 - 1 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">1.01 HA - 2 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">2.01 HA - 4 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">4.01 HA - 6 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">6.01 HA - 8 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">8.01 HA - 10 HA</label>
                                    </div>
                                </div>
                                <div className="w-6/12">
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">10.01 HA - 15 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">15.01 HA - 20 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">20.01 HA - 25 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">25.01 HA - 30 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">30.01 HA - 35 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">35.01 HA - 40 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">40.01 HA - 45 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">45.01 HA -50 HA</label>
                                    </div>
                                    <div className="py-1">
                                        <input type="radio" name="size" />
                                        <label className="pl-1">Over 50 HA</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                              5. Type of property to be built<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Perimeter Survey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Detailed Survey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">As-built survey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Re-establishment of beacons</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Compilation of plans</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Court Appearance</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Engineering Survey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Change of Title</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      )}
      {gInvest && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40" onClick={CloseSurvey}>
        <div className="bg-white lg:w-5/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Geotechnical Investigation</p>
                <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey}/>
                
            </div>
            <div className="mt-12">
                <form>
                    <div className="lg:flex justify-between">
                        <div className="lg:w-6/12 lg:pr-4">
                            <label className="block">
                                First Name
                            </label>
                            <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="lg:w-6/12 lg:pl-4 lg:mt-0 mt-3">
                            <label className="block">
                                Last Name
                            </label>
                            <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-6 w-full">
                        <label className="block">
                            Email
                        </label>
                        <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                            />
                    </div>
                    <div className="mt-8">
                        <button className="btn-primary w-full">Submit</button>
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
                    <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey}/>
                    
                </div>
                <div className="mt-6">
                    <p><span className="text-red-600 pr-2">*</span>Required</p>
                </div>
                <div className="mt-5">
                    <form>
                        <div className="fs-500">
                            <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                            <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                1. Name for client<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                2. Type of drawing needed<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="d-type" />
                                    <label className="pl-1">Architectural</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="d-type" />
                                    <label className="pl-1">Structural</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="d-type" />
                                    <label className="pl-1">Mechanical</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="d-type" />
                                    <label className="pl-1">Electrical</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="d-type" />
                                    <label className="pl-1">All</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                3. Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                4. Upload Architectural plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                5. Upload Structural plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                6. Upload Mechanical plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                7. Upload Electrical plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block">
                                8. Location of Project<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder="Enter location address"
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                9. Type of project<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Residential</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Commercial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Industrial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Educational</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Religious</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                10. If Residential, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Bungalow</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Duplex</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Multi-storey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Terraced building</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">High rise building</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                11. If Commercial, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Bank</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Shopping mall</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Supermarket</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Office suites</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                12. If Religious, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="m-type" />
                                    <label className="pl-1">Church</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="m-type" />
                                    <label className="pl-1">Mosque</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                13. If Educational, select type of building<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Primary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Secondary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Tertiary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Postgraduate</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="btn-primary w-full">Submit</button>
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
                    <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey}/>
                    
                </div>
                <div className="mt-6">
                    <p><span className="text-red-600 pr-2">*</span>Required</p>
                </div>
                <div className="mt-5">
                    <form>
                        <div className="w-full">
                            <label className="block fw-600">
                                1. Name of client<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="w-full lg:mt-6 mt-3">
                            <label className="block fw-600">
                                2. Purpose of building<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Residential</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Commercial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Industrial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Religious</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Educational</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Recreational</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="purpose" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            3. Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            4. Upload Architectural plan<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            5. Upload Structural plan
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            6. Upload Mechanical plan
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            7. Upload Electrical plan
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            8. Upload Soil Test Report
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            9. Upload C of O/Deed of Assignment/R of O<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            10. Upload Site plan
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            11. Upload Site Analysis Report
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            12. Upload Environmental Impact Assessment report
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            13. Upload Tax Clearance Certificate
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            14.  Upload Letter of Supervision from COREN Registered Engineer
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                            15. Upload Stamped and Sealed Copy of Structural Calculation Sheet
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-8">
                            <button className="btn-primary w-full">Submit</button>
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
                        <p className="text-lg lg:text-2xl fw-600">Request for Contractor or Smart Calculator</p>
                        <p className="mt-2 fs-500">Architectural, Structural, Electrical and Mechanical Drawings.</p>
                    </div>
                    <FontAwesomeIcon icon={faTimes} className="text-2xl relative -top-3 cursor-pointer" onClick={CloseSurvey}/>
                    
                </div>
                <div className="mt-6">
                    <p><span className="text-red-600 pr-2">*</span>Required</p>
                </div>
                <div className="mt-5">
                    <form>
                        <div className="fs-500">
                            <p><span className="text-red-600  pr-2">*</span>This form will record your name, please fill your name.</p>
                            <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                    />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                1. Name for client<span className="text-red-600 pl-2">*</span>
                            </label>
                            <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                                />
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                2. Upload Survey Plan<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                3. Upload Architectural plan<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                4. Upload Structural plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                5. Upload Mechanical plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
                            </div>
                            <p className="my-2 fs-300 text-gray-600">File number limit: 5 Single file size limit: 1GB Allowed file types: Word, Excel, PPT, PDF, Image, Video,
                                Audio
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                6. Upload Electrical plan, if avaliable
                            </label>
                            <div class="overflow-hidden border border-gray-400 rounded center-item relative w-64 mt-4 mb-4">
                                <p className="py-1 relative z-0 flex items-center"><AiOutlineCloudUpload/><span className="pl-2">Upload file</span></p>
                                <input class="cursor-pointer absolute block opacity-0 focus:opacity-1 z-10 pin-r pin-t" type="file"  multiple />
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
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Residential</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Commercial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Industrial</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Educational</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="p-type" />
                                    <label className="pl-1">Religious</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                9. If Residential, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Bungalow</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Duplex</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Multi-storey</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">Terraced building</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="r-type" />
                                    <label className="pl-1">High rise building</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                10. If Commercial, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Bank</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Shopping mall</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Supermarket</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Office suites</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                11. If Religious, select type of building *<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="m-type" />
                                    <label className="pl-1">Church</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="m-type" />
                                    <label className="pl-1">Mosque</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="c-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-6 w-full">
                            <label className="block fw-600">
                                12. If Educational, select type of building<span className="text-red-600 pl-2">*</span>
                            </label>
                            <div className="mt-3 fs-500">
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Primary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Secondary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Tertiary</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Postgraduate</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" name="e-type" />
                                    <label className="pl-1">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
      )}
    </div>
  );
}