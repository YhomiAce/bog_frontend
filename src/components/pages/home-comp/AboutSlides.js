import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/images/img2.png";
import img2 from "../../assets/images/img4.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/image1.png";
import { getUserType } from "../../../services/helper";

export const Reviews = [
    {
        id: 1,
        img: img1,
        name: "Green Mouse",
        job: "Project Owner",
        review: "I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible"
    },
    {
        id: 2,
        img: img2,
        name: "Chukka Uzo",
        job: "Construction",
        review: "Thanks to BOG, I now handle the whole construction process hazzle free. I’m glad that I’m part of the BOG service providers."
    },
    {
        id: 3,
        img: img3,
        name: "Frank Jnr",
        job: "Product Partner",
        review: "I sell my gravel as a product partner on BOG and ever since I started, I’ve not had any issue. Its awesome."
    },
    {
        id: 4,
        img: img4,
        name: "Promise Afolabi",
        job: "Civil Engineer",
        review: "I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible."
    },
    {
        id: 5,
        img: img1,
        name: "Frank Jnr",
        job: "Product Partner",
        review: "I sell my gravel as a product partner on BOG and ever since I started, I’ve not had any issue. Its awesome."
    },
    {
        id: 6,
        img: img2,
        name: "Chukka Uzo",
        job: "Construction",
        review: "Thanks to BOG, I now handle the whole construction process hazzle free. I’m glad that I’m part of the BOG service providers."
    },
    {
        id: 7,
        img: img1,
        name: "Green Mouse",
        job: "Project Owner",
        review: "I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible"
    },
    {
        id: 8,
        img: img4,
        name: "Promise Afolabi",
        job: "Civil Engineer",
        review: "I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible."
    },
];


export  function AboutSlides() {


    return(
        <Swiper
                spaceBetween={30}
                autoplay={{ delay: 6000 }}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                pagination={true}
                modules={[Autoplay, Pagination ]}
                className=""
            >
                <SwiperSlide className=" mb-12">
                    <div 
                        className="text-center py-4 shadow lg:w-10/12 mx-auto"
                        >
                        <div>
                            <img src={require("../../assets/images/call.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4 w-6/12 m-auto">Execellent Customer Care</p>
                        <p className="mt-2 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/safe.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 w-6/12 mx-auto  mt-4">Safe, Secure & Reliable </p>
                        <p className="mt-2 px-4 fs-400">BOG is a reliable platform known to be very safe and secure  . </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/rely.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 w-6/12 mx-auto mt-4">On time product and service delivery</p>
                        <p className="mt-2 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do. 22</p>
                        
                    </div>
                </SwiperSlide> */}
            </Swiper>
    )
}

export  function AboutSlidesSm() {


    return(
        <Swiper
                spaceBetween={30}
                autoplay={{ delay: 6000 }}
                grabCursor={true}
                loop={true}
                centeredSlides={false}
                slidesPerView={1}
                pagination={true}
                modules={[Autoplay, Pagination ]}
                className=""
            >
                <SwiperSlide className=" mb-12">
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center py-4 shadow lg:w-10/12 mx-auto">
                        <div>
                            <img src={require("../../assets/images/tv.png")} alt="img1" className="w-20 m-auto"/>
                        </div>
                        <p className="fs-500 fw-500 mt-4">Execellent Customer Care</p>
                        <p className="mt-4 px-4 fs-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export  function AboutSlides2() {


    return(
        <Swiper
                spaceBetween={30}
                autoplay={{ delay: 6000 }}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={3}
                pagination= {{clickable: true}}
                modules={[Pagination, Autoplay, Navigation ]}
                className=""
            >
                <SwiperSlide className=" mb-12">
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img2.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/image1.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Chukka Uzo</p>
                                <p className="fs-300">Construction</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">Thanks to BOG, I now handle the whole construction process hazzlefree. I’m glad that I’m part of the BOG service providers.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img3.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Frank Jnr</p>
                                <p className="fs-300">Service Partner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">I sell my gravel as a product partner on BOG and ever since i started, I’ve not had any issue with the platform. Its awesome.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img4.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Promise Afolabi</p>
                                <p className="fs-300">Civil Engineer</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img4.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img2.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img3.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500 h-16 overflow-hidden">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export  function AboutSlides2Sm() {


    return(
        <Swiper
                spaceBetween={30}
                autoplay={{ delay: 6000 }}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                pagination={true}
                modules={[Autoplay, Pagination ]}
                className=""
            >
                <SwiperSlide className=" mb-12">
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img2.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/image1.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Chukka Uzo</p>
                                <p className="fs-300">Construction</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">Thanks to BOG, I now handle the whole construction process hazzlefree. I’m glad that I’m part of the BOG service providers.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img3.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Frank Jnr</p>
                                <p className="fs-300">Service Partner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I sell my gravel as a product partner on BOG and ever since i started, I’ve not had any issue. Its awesome.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img4.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Promise Afolabi</p>
                                <p className="fs-300">Civil Engineer</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img4.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img2.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-4 border border-blue-400 px-5 mx-auto bg-white rounded">
                        <div className="flex items-center">
                            <img src={require("../../assets/images/img3.png")} alt="img1" className="w-16"/>
                            <div className="pl-4">
                                <p className="fw-600">Green Mouse</p>
                                <p className="fs-300">Project Owner</p>
                            </div>
                        </div>
                        <p className="mt-4 fs-500">I’ve always wanted to monintor and manage my project in Nigeria her from UK. Thanks to BOG for making it possible </p>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export function  ReviewSlide({reviews}) {

    const review = useRef();
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let tl = gsap.timeline();

           
            tl.to(review.current, {xPercent:-60, duration: 32,repeat: -1, ease:"none"})
        
            review.current.addEventListener("mouseenter", function () {
                tl.pause();
              });
              review.current.addEventListener("mouseleave", function () {
                tl.play();
              });
        }, );
        
        
            return () => ctx.revert();
    }, []);

    return (
        <div className="w-full overflow-hidden " >
            <div className="flex w-200" ref={review}>
                {reviews.map(item => {
                        return (
                            <div className="py-4 mr-10 hover:bg-primary hover:text-white border border-pri px-5 mx-auto bg-white rounded">
                                <div className="flex items-center">
                                    <img src={item.img} alt="img1" className="w-16"/>
                                    <div className="pl-4">
                                        <p className="fw-600">{item.name}</p>
                                        <p className="fs-300">{getUserType(item.user.userType)}</p>
                                    </div>
                                </div>
                                <p className="mt-4 fs-500">{item.message}</p>
                            </div>
                        )
                    } 
                        
                    )}
            </div>
        </div>
    )
}