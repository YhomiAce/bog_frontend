import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function ProfSlides() {


    return(
        <Swiper
                spaceBetween={10}
                autoplay={{ delay: 5000 }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={5}
                coverflowEffect={{
                    rotate:40,
                    stretch:0,
                    depth:50,
                    modifier:1,
                    slideShadows: false,
                }}
                modules={[ EffectCoverflow, Autoplay ]}
                className="text-white"
            >
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/survey.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-400 fw-500 py-1">Land Surveyor</p>
                        <p className="fs-600 fw-600">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/BC.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        
                        <p className="fs-600 fw-600">Structural Engineer</p>
                        <p className="fs-400 fw-500 py-1">Asaba, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/arch.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Architecture</p>
                        <p className="fs-400 fw-500 py-1">Ogun, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/civil.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Civil Engineer</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/prof.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Building Contractorr</p>
                        <p className="fs-400 fw-500 py-1">Edo, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/survey.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/BC.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        
                        <p className="fs-600 fw-600">Structural Engineer</p>
                        <p className="fs-400 fw-500 py-1">Asaba, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/arch.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Architecture</p>
                        <p className="fs-400 fw-500 py-1">Ogun, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/civil.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Civil Engineer</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/prof.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Building Contractorr</p>
                        <p className="fs-400 fw-500 py-1">Edo, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/BC.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        
                        <p className="fs-600 fw-600">Structural Engineer</p>
                        <p className="fs-400 fw-500 py-1">Asaba, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/CS.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Construction Drawing</p>
                        <p className="fs-400 fw-500 py-1">Ogun, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/BA.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Building Approval</p>
                        <p className="fs-400 fw-500 py-1">Oyo, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-3 bg-white">
                            <img src={require("../../assets/images/prof.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600">Building Contractorr</p>
                        <p className="fs-400 fw-500 py-1">Edo, Nigeria</p>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export function ProfSlidesSm() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide className="mb-8">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/survey.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2 ">Land Surveyor</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/BC.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        
                        <p className="fs-600 fw-600 mt-2">Structural Engineer</p>
                        <p className="fs-400 fw-500 py-1">Asaba, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/arch.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Architecture</p>
                        <p className="fs-400 fw-500 py-1">Ogun, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/civil.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Civil Engineer</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/prof.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Building Contractorr</p>
                        <p className="fs-400 fw-500 py-1">Edo, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/CS.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Construction Drawing</p>
                        <p className="fs-400 fw-500 py-1">Ogun, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/BA.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Building Approval</p>
                        <p className="fs-400 fw-500 py-1">Oyo, Nigeria</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-4/12 mx-auto circle p-6 bg-white">
                            <img src={require("../../assets/images/prof.png")} alt="img1" className="w-full m-auto"/>
                        </div>
                        <p className="fs-600 fw-600 mt-2">Building Contractorr</p>
                        <p className="fs-400 fw-500 py-1">Edo, Nigeria</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}