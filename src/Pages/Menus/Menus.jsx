import {Helmet} from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import coverImg from '../../assets/CoverImg/1.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menus = () => {
  return (
    <div>
      <Helmet>
        <title>Sundarban ||| Menus</title>
         
      </Helmet>
      <Cover ></Cover>
      {/* <PopularMenu></PopularMenu>
      <PopularMenu></PopularMenu>
      <PopularMenu></PopularMenu> */}
    </div>
  );
};

export default Menus;
