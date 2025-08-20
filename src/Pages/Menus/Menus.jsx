import {Helmet} from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../assets/CoverImg/1.jpg'
const Menus = () => {
  return (
    <div>
      <Helmet>
        <title>Sundarban ||| Menus</title>
         
      </Helmet>
      <Cover img={coverImg} title='Our Menus'></Cover>
    </div>
  );
};

export default Menus;
