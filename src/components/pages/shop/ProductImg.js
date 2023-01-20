/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// const baseURL = process.env.REACT_APP_IMAGE_URL;


export  const ProductImage = ({item}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="lg:w-full flex">
         <Swiper 
           onSwiper={setThumbsSwiper}
           spaceBetween={2}
           slidesPerView={5}
           freeMode={true}
           direction='vertical'
        //    breakpoints: {
        //     480: {
        //       direction: "vertical",
        //       slidesPerView: 3
        //     }
        //   }
           watchSlidesProgress={true}
           modules={[FreeMode, Navigation, Thumbs]}
           className="w-2/12 pr-3"
        >
            {item.product_image.map((i, ) => {
                return <SwiperSlide><img src={i.url} alt="product" className="w-11/12 lg:h-16"/></SwiperSlide>;
            })}
        </Swiper>
        <Swiper 
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-10/12 pl-3"
        >
            {item.product_image.map((i,) => {
                return <SwiperSlide><img src={i.url} alt="product" className="w-full lg:h-72 xl:h-96"/></SwiperSlide>;
            })}
        </Swiper>   
    </div>
  );
};
