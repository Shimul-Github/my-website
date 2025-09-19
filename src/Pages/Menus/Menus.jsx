import {Helmet} from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../assets/CoverImg/1.jpg'
import useMenu from '../../hooks/useMenu.jsx'
import SectionTitle from '../../Components/SectionTitle/SectionTitle.jsx'
import MenuCatagory from "./MenuCatagory/MenuCatagory.jsx";
const Menus = () => {
  const [menu]= useMenu() 
  // console.log(menu)
  const todaysOffer = menu.filter(item=>item.category === 'offered')
  const salads = menu.filter(item=>item.category === 'salads') //salads ke select kore ctrl D marle duitai select hoye jabe.
  const pizza = menu.filter(item=>item.category === 'pizza')
  const soups = menu.filter(item=>item.category === 'soups')
  const desserts = menu.filter(item=>item.category === 'desserts')

  return (
    <div>
      <Helmet>
        <title>Sundarban ||| Menus</title>     
      </Helmet>
      <Cover img={coverImg} title='Our Menu' ></Cover>
      <SectionTitle
      subHeading='Dont Miss'
      heading='Today Offer'
      ></SectionTitle>
      <MenuCatagory items={todaysOffer} ></MenuCatagory>
      
    </div>
  );
};

export default Menus;
