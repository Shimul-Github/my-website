import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../Components/sectionTitle/sectionTitle";
import img1 from '../../assets/OrderOnline/1.jpg'

const Catagory = () => {
  return (
    <section className="my-5">
      <SectionTitle
        subHeading={"From 8AM TO 12PM"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        className="mySwiper swiper-h border-2 w-full"
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
            <img className="w-full" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <Swiper
            className="mySwiper2  h-52"
            direction={"vertical"}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
          <SwiperSlide>
            <img className="w-full h-full" src={img1} alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-full" src={img1} alt="" />
            </SwiperSlide>
        </Swiper>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
<Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>