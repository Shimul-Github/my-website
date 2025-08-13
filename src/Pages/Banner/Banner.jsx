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
    <div className="my-4 mx-2">
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide> Horizontal
          <img className="w-full" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide> Vertical
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide> Hello
              <img  src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide> Hello
              <img src={img2} alt="" />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
