import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function Service() {

    const [landSurvey, setLandSurvey] = useState(false);
    const [soilTest, setSoilTest] = useState(false);
    const [aDraw, setADraw] = useState(false);
    const [sDraw, setSDraw] = useState(false);
    const [mDraw, setMDraw] = useState(false);
    const [eDraw, setEDraw] = useState(false);

    const CloseSurvey = () => {
        setLandSurvey(false)
        setSoilTest(false)
        setADraw(false)
        setSDraw(false)
        setMDraw(false)
        setEDraw(false)
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
                    <div className="lg:grid-3 justify-between lg:my-24 my-12">
                        <div className="shadow-md h-48 center-item">
                            <div className="cursor-pointer" onClick={() => {setLandSurvey(true)}}>
                                <img src={require("../assets/images/survey.png")} alt="survey" className="lg:w-16 mx-auto mb-5" />
                                <p className="fw-500">Land Survey</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                            <div className="cursor-pointer" onClick={() => {setSoilTest(true)}}>
                                <p className="fw-500">Soil Test</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item lg:mt-0 mt-10">
                            <div className="cursor-pointer" onClick={() => {setADraw(true)}}>
                                <p className="fw-500">Architectural Drawing</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item mt-10">
                            <div className="cursor-pointer" onClick={() => {setSDraw(true)}}>
                                <p className="fw-500">Structural Drawing</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item mt-10">
                            <div className="cursor-pointer" onClick={() => {setMDraw(true)}}>
                                <p className="fw-500">Mechanical Drawing</p>
                            </div>
                        </div>
                        <div className="shadow-md h-48 center-item mt-10">
                            <div className="cursor-pointer" onClick={() => {setEDraw(true)}}>
                                <p className="fw-500">Electrical Drawing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
      {landSurvey && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Land Survey</p>
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
      {soilTest && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Soil Test</p>
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
      {aDraw && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Architectural Drawing</p>
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
      {sDraw && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Structural Drawing</p>
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
      {mDraw && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Mechanical Drawing</p>
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
      {eDraw && (
        <div className="fixed font-primary top-0 w-full h-screen bg-op center-item z-40">
        <div className="bg-white lg:w-4/12 px-5 lg:px-12 w-11/12 py-12 shadow fw-500 scale-ani">
            <div className="flex justify-between">
                <p className="text-lg lg:text-2xl fw-600">Request Electrical Drawing</p>
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
    </div>
  );
}