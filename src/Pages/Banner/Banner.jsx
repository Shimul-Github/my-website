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
    <>
      <Swiper
        className="mySwiper swiper-h"
        direction={'horizontal'}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide> Horizontal
          <img className="w-50%" src={img1} alt="" />
        </SwiperSlide>
        
        <SwiperSlide> Vertical
          <img  className="w-50%" src={img4} alt="" />

          
        </SwiperSlide>
       
        <SwiperSlide>
          <img  className="w-50%" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="w-50%" src={img4} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
