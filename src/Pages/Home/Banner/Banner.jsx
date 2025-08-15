import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/2.jpg";
import img3 from "../../../assets/Banner/3.jpg";
import img4 from "../../../assets/Banner/4.jpg";
import img5 from "../../../assets/Banner/5.jpg";
import img6 from "../../../assets/Banner/6.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
        <img src={img1} />
          <p className="legend text-white">Legend 1</p>
        </div>
        <div>
          <img src={img1} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img1} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
