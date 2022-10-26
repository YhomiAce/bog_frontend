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
                autoplay={{ delay: 3000 }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={4}
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
                        <div>
                            <img src={require("../../assets/images/image1.png")} alt="img1" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">John Adeleke</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img2.png")} alt="img2" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Stamp Raskidat</p>
                        <p className="fs-400 fw-500 py-1">Abia, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img3.png")} alt="img3" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Holland Stamp</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img4.png")} alt="img4" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Frank Monts</p>
                        <p className="fs-400 fw-500 py-1">Accra, Ghana</p>
                        <p className="fs-600 fw-600">Civil Engineer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img5.png")} alt="img5" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">John Adeleke</p>
                        <p className="fs-400 fw-500 py-1">Nairobi, Kenya</p>
                        <p className="fs-600 fw-600">Architech</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img3.png")} alt="img6" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">David Stamp</p>
                        <p className="fs-400 fw-500 py-1">Kogi, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img3.png")} alt="img3" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Holland Stamp</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img5.png")} alt="img5" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">John Adeleke</p>
                        <p className="fs-400 fw-500 py-1">Nairobi, Kenya</p>
                        <p className="fs-600 fw-600">Architech</p>
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
                <div className="text-center             slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/image1.png")} alt="img1" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">John Adeleke</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img2.png")} alt="img2" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Stamp Raskidat</p>
                        <p className="fs-400 fw-500 py-1">Abia, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img3.png")} alt="img3" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Holland Stamp</p>
                        <p className="fs-400 fw-500 py-1">Lagos, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img4.png")} alt="img4" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">Frank Monts</p>
                        <p className="fs-400 fw-500 py-1">Accra, Ghana</p>
                        <p className="fs-600 fw-600">Civil Engineer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img5.png")} alt="img5" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">John Adeleke</p>
                        <p className="fs-400 fw-500 py-1">Nairobi, Kenya</p>
                        <p className="fs-600 fw-600">Architech</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div>
                            <img src={require("../../assets/images/img3.png")} alt="img6" className="w-28 m-auto"/>
                        </div>
                        <p className="fs-500 pt-4 fw-600">David Stamp</p>
                        <p className="fs-400 fw-500 py-1">Kogi, Nigeria</p>
                        <p className="fs-600 fw-600">Land Surveyor</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}