import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";

export default function JoinTeam(){

    return(
        <div>
            <div className="font-primary">
                <Header/>
                <div className="bg-jot bg-cover bg-center text-white lg:h-80 h-40 flex items-center">
                    <div className="box">
                        <p className="lg:text-4xl text-2xl fw-700 mb-2">Join Our Team</p>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex lg:py-6 justify-between items-center">
                            <div className="lg:w-5/12 ">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667570080/BOG/jot-img_hvat0f.png" alt="join" className=" w-full m-auto"/>
                            </div>
                            <div className="lg:w-6/12 mt-6 lg:mt-0 ">
                                <p className="text-xl lg:text-3xl fw-600">
                                    Join Our Journey
                                </p>
                                <p className="mt-6">Laboris consectetur aliqua minim non laborum culpa enim ut Lorem quis commodo minim voluptate. Nostrud reprehenderit eiusmod et labore reprehenderit elit amet occaecat incididunt magna. Irure tempor nisi voluptate pariatur est dolore sint. Velit id consectetur laborum do culpa duis nulla qui. Sint consequat reprehenderit tempor ad consequat qui enim aliquip culpa cupidatat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:py-12 py-10 bg-light">
                    <div className="box">
                        <div className="lg:flex items-center justify-between">
                            <p className="text-lg fw-600">Explore our jobs and oppurtunity</p>
                            <button className="btn-primary mt-6 lg:mt-0">Click here to explore jobs and apply  </button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex lg:py-6 flex-row-reverse justify-between items-center">
                            <div className="lg:w-5/12 ">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667475148/BOG/hands_ljq9zp.png" alt="holding hands" className="w-full"/>
                            </div>
                            <div className="lg:w-6/12 mt-6 lg:mt-0 ">
                                <p className="text-xl lg:text-3xl fw-600">
                                    The way we work 
                                </p>
                                <p className="mt-6">Irure tempor amet quis elit minim minim culpa ex. Sint minim dolore aliquip incididunt dolor voluptate est do qui non officia elit pariatur laboris. Enim ad voluptate deserunt culpa magna irure Lorem mollit incididunt dolor. Nisi sint esse ea incididunt dolor. Et occaecat ipsum do voluptate incididunt id ullamco veniam commodo. Aliquip velit esse qui ex non.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:my-6">
                            <div className="lg:w-6/12 mx-auto text-center">
                                <p className="lg:text-3xl text-xl fw-600">Why you’ll love working here</p>
                                <p className="my-5">We value our team members, and we offer a full range of benefits and perks designed to support both your personal and professional goals:</p>
                                <button className="btn-primary">Join Our Team</button>
                            </div>
                            <div className="lg:flex lg:mt-20 mt-16">
                                <div className="lg:w-4/12 lg:grid items content-between">
                                    <div>
                                        <div className="lg:flex justify-start fs-500">
                                            <div className="cursor-pointer text-center lg:w-8/12" >
                                                <img src={require("../assets/images/cb.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                                <p className="fw-500">Competitive Benefits</p>
                                                <p className="mt-1">We take care and value our staffs and that's why we full range of benefits.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="lg:flex justify-end fs-500 mt-8 lg:mt-0">
                                            <div className="cursor-pointer text-center lg:w-8/12" >
                                                <img src={require("../assets/images/go.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                                <p className="fw-500">Growth Oppurtunity</p>
                                                <p className="mt-1">We offer opportunities for our team members to develop their skills  relevant to their career goals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-4/12 lg:px-16 py-16 hidden lg:block">
                                    <img src={require("../assets/images/jot-logo.png")} alt="xl-logo" className="w-full"/>
                                </div>
                                <div className="lg:w-4/12 lg:grid content-between">
                                    <div>
                                        <div className="lg:flex justify-end fs-500">
                                            <div className="cursor-pointer text-center mt-8 lg:mt-0 lg:w-8/12" >
                                                <img src={require("../assets/images/toa.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                                <p className="fw-500">Team-oriented atmosphere</p>
                                                <p className="mt-1">You get the oppurtunity to work with the best team members to complete tasks . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="lg:flex justify-start mt-8 lg:mt-0 fs-500">
                                            <div className="cursor-pointer text-center lg:w-8/12" >
                                                <img src={require("../assets/images/vo.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                                <p className="fw-500">Vacation Oppurtunities</p>
                                                <p className="mt-1">We sometimes need to recharge. That's why we offer paid vacation plans to cover your holidays.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}