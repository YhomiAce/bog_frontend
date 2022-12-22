import React, {useState, useEffect} from "react";
import Axios from "../../config/config";
import toaster from "toasted-notes";
import { Link } from "react-router-dom";
import { AboutSlides, AboutSlides2, AboutSlidesSm, ReviewSlideSm } from "./home-comp/AboutSlides";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import Spinner from "../layouts/Spinner";

export default function About() {

    const [vision, setVision] = useState(true)
    const [mission, setMission] = useState(false)
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        try {
            setLoading(true);
            const res = await Axios.get('/testimony/get-hompage-testimonies');
            setLoading(false);
            if (res.success === true) {
                setReviews(res.data)
            }

        } catch (error) {
            setLoading(false);
            toaster.notify(
                error?.response?.data?.message || error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
    console.log(reviews)
    useEffect(() => {
        getReviews();
    }, []);


  return (
    <div>
      <div className="font-primary">
        <Header />
        <div className="bg-about-bg bg-cover bg-center text-white lg:h-80 h-40 flex items-center">
          <div className="box">
            <div>
              <p className="lg:text-4xl text-2xl fw-700 mb-2">
                About Us
              </p>
            </div>
          </div>
        </div>
        <div className="section bg-light">
            <div className="box">
                <div>
                    <div className="lg:flex items-center">
                        <div className="lg:w-6/12">
                            <p className="lg:px-10 fw-500 text-lg lg:text-3xl">BOG intends to provide products and services to intending structure owners using a digitized process.</p>
                        </div>
                        <div className="lg:w-6/12 mt-4 lg:mt-0">
                            <p className="fs-600 text-gray-800 lg:px-10">BOG is an online marketplace which intends to provide a platform for individuals interested in owning structures in Nigeria/Africa achieve their aim. We are  focused on helping people throughout the world realize their dreams of building a world class structure </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="box">
                <div>
                    <div className="lg:mt-4">
                        <div className="flex justify-center">
                            <div className="center-item py-6 shades w-5/12 lg:w-3/12" onClick={() => {setVision(true); setMission(false)}}>
                                <img src={require("../assets/images/vision.png")} alt="vision" className="w-10 lg:w-16 pr-2" />
                                <p className="fw-600 fs-700">Vision</p>
                            </div>
                            <div className="center-item py-6 shades w-5/12 lg:w-3/12" onClick={() => {setVision(false); setMission(true)}}>
                                <img src={require("../assets/images/mission.png")} alt="vision" className="w-10 lg:w-16 pr-2" />
                                <p className="fw-600 fs-700">Mission</p>
                            </div>
                        </div>
                        <div className="lg:w-9/12 mt-8 lg:mt-16 lg:pb-8 mx-auto">
                            {vision && (
                                <p className="text-center scale-ani">To be a digitized way of getting construction management, administrative, and procurement activities carried out in Nigeria with little or no hassle to our clients</p>
                            )}
                            {mission && (
                                <p className="text-center scale-ani">Our mission is enable Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section bg-about lg:bg-center bg-top text-white">
            <div className="box">
                <div>
                    <div className="text-center pb-12 text-xl lg:text-2xl fw-600">
                        <p className="mx-auto w-11/12 lg:w-9/12">Monitor and manage your projects from anywhere without being encumbered by time and distance</p>
                    </div>
                    <div className="bg-white text-black py-8">
                        <div className="lg:grid-3 lg:px-20 justify-between lg:my-12 my-3">
                            <div className="py-3 px-6 center-item">
                                <div className="cursor-pointer text-center" >
                                    <img src={require("../assets/images/SC.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">Smart Calculator</p>
                                    <p className="mt-3">Magna sit do ipsum id qui fugiat esse id in est. Labore minim proident minim quis nisi aliquip.</p>
                                </div>
                            </div>
                            <div className="py-3 px-6 center-item lg:mt-0 mt-3">
                                <div className="cursor-pointer text-center" >                               
                                    <img src={require("../assets/images/tv.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">In app meetings and reviews</p>
                                    <p className="mt-3">Ea pariatur laboris laborum sint sit. Anim labore occaecat deserunt excepteur quis dolor.</p>
                                </div>
                            </div>
                            <div className="py-3 px-6 center-item lg:mt-0 mt-3">
                                <div className="cursor-pointer text-center" >                             
                                    <img src={require("../assets/images/prof.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">Find expert construction workers</p>
                                    <p className="mt-3">Ea pariatur laboris laborum sint sit. Anim labore occaecat deserunt excepteur quis dolor.</p>
                                </div>
                            </div>
                            <div className="py-3 px-6 center-item lg:mt-10 mt-3">
                                <div className="cursor-pointer text-center" >                               
                                    <img src={require("../assets/images/tractor.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">Shop for construction materials</p>
                                    <p className="mt-3">Ea pariatur laboris laborum sint sit. Anim labore occaecat deserunt excepteur quis dolor.</p>
                                </div>
                            </div>
                            <div className="py-3 px-6 center-item lg:mt-10 mt-3">
                                <div className="cursor-pointer text-center" >                             
                                    <img src={require("../assets/images/CS.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">Project & Order progress live tracking</p>
                                    <p className="mt-3">Ea pariatur laboris laborum sint sit. Anim labore occaecat deserunt excepteur quis dolor.</p>
                                </div>
                            </div>
                            <div className="py-3 px-6 center-item lg:mt-10 mt-3">
                                <div className="cursor-pointer text-center" >                                
                                    <img src={require("../assets/images/call.png")} alt="survey" className="lg:w-16 w-16 mx-auto mb-5" />
                                    <p className="fw-500">Quality customer care</p>
                                    <p className="mt-3">Ea pariatur laboris laborum sint sit. Anim labore occaecat deserunt excepteur quis dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="box">
                <div>
                    <div className="text-center">
                        <p className="text-2xl fw-600 pt-3 pb-6">Perks of choosing BOG</p>
                        <p className="lg:w-5/12 mx-auto">Here are some of the reasons why we remain a top pick for intending structure owners</p>
                    </div>
                    <div className="mt-10 hidden lg:block">
                        <AboutSlides/>
                    </div>
                    <div className="mt-10 lg:hidden">
                        <AboutSlidesSm/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section bg-light">
            <div className="box">
                <div>
                    <div className="lg:text-2xl text-xl fw-600 lg:w-4/12">
                        <p>See what our Clients and Patners have to say about us </p>
                    </div>
                    <div className="mt-12 hidden lg:block">
                        {
                            loading? <Spinner/> : <AboutSlides2 reviews={reviews}/>
                        }
                    </div>
                    <div className="mt-12 lg:hidden">
                        {
                            loading? <Spinner/> : <ReviewSlideSm reviews={reviews}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="box">
                <div className="lg:flex lg:py-6 flex-row-reverse justify-center items-center">
                    <div className="lg:w-6/12 ">
                        <img src={require("../assets/images/build.png")} alt="build" className="lg:w-10/12 w-full m-auto"/>
                    </div>
                    <div className="lg:w-5/12 mt-6 lg:mt-0 ">
                        <p className="text-xl lg:text-3xl fw-500">
                            Bringing together a community of service partners, product partners
                            and clients.
                        </p>
                        <p className="my-3">An online marketplace which intends to provide a platform for individuals interested in owning structures in Nigeria/Africa achieve their aim.</p>
                        <Link to="/login"><button className="btn-primary px-6 mt-6">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}