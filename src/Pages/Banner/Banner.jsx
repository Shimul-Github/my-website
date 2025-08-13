import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from '../../assets/Banner/1.jpg'
import img2 from '../../assets/Banner/2.jpg'
import img3 from '../../assets/Banner/3.jpg'
import img4 from '../../assets/Banner/4.jpg'
import img5 from '../../assets/Banner/5.jpg'
import img6 from '../../assets/Banner/6.jpg'

const Banner = () => {
  return (
    <div>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>{img1}</SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
        <SwiperSlide>{img1}</SwiperSlide>
        <SwiperSlide>{img2}</SwiperSlide>
        <SwiperSlide>{img3}</SwiperSlide>
        <SwiperSlide>{img4}</SwiperSlide>
        <SwiperSlide>{img6}</SwiperSlide>
            
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>{img5}</SwiperSlide>
        <SwiperSlide>{img6}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
