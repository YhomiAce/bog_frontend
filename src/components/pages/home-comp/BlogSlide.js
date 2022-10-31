import React from "react";
import { BsArrowRight} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

export default function BlogSlides() {


    return (
        <Swiper
            spaceBetween={50}
            autoplay={{ delay: 5000 }}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={2}
            modules={[ Autoplay ]}
        >
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog1.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">Seven Traits of Profitable Specialty Contractors</p>
                        <p className="pt-2 pb-3 ">Anyone who has managed a construction company, enterprice, department, or project knows...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog1.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export  function BlogSlidesSm() {

    return (
        <Swiper
            spaceBetween={50}
            autoplay={{ delay: 5000 }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            pagination={true}
            modules={[ Autoplay, Pagination ]}
        >
            
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog1.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog2.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog1.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:w- mx-2 bg-white text-black relative">
                    <div>
                        <img src={require("../../assets/images/blog1.png")} alt="blog1" className="w-full"/>
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        22 OCT, 2022
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">6 Ways to Improve Machine Operators’ Safety on Cons. . .</p>
                        <p className="pt-2 pb-3 ">It should not be surprising that there needs to be an emphasis on machine operators, given...</p>
                        <BsArrowRight className="text-lg text-primary"/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}