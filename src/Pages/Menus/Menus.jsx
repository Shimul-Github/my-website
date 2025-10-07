import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../assets/CoverImg/1.jpg";
import dessertImg from "../../assets/CoverImg/1.jpg";
import pizzaImg from "../../assets/CoverImg/1.jpg";
import soupsImg from "../../assets/CoverImg/1.jpg";
import saladsImg from "../../assets/CoverImg/1.jpg";
import todaysOfferImg from "../../assets/CoverImg/1.jpg";
// alt chap die jekono ongse click korle seta select hobe
import useMenu from "../../hooks/useMenu.jsx";
import SectionTitle from "../../Components/SectionTitle/SectionTitle.jsx";
import MenuCatagory from "./MenuCatagory/MenuCatagory.jsx";
const Menus = () => {
  const [menu] = useMenu();
  // console.log(menu)
  const todaysOffer = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salads"); //salads ke select kore ctrl D marle duitai select hoye jabe.
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soups");
  const desserts = menu.filter((item) => item.category === "desserts");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Sundarban ||| Menus</title>
      </Helmet>
      <Cover img={coverImg} title="Our Menu"></Cover>
      {/* Main Cover */}
     

      {/* Pizza Menu Items */}
      <MenuCatagory items={pizza} title="pizza" img={pizzaImg}></MenuCatagory>
      {/* soups Menu Items */}
      <MenuCatagory items={soups} title="soups" img={soupsImg}></MenuCatagory>
       {/* Dessert Menu Items */}
      <MenuCatagory items={desserts} title="desserts" img={dessertImg}></MenuCatagory>
       {/* Drinks Menu Items */}
      <MenuCatagory items={drinks} title="drinks" img={dessertImg}></MenuCatagory>
       {/* salads Menu Items */}
      <MenuCatagory items={salads} title="salads" img={saladsImg}></MenuCatagory>
      {/* Offered Menu Items */}
       <SectionTitle subHeading="Dont Miss" heading="Today Offer"></SectionTitle>
      <MenuCatagory items={todaysOffer} title='offered' img={todaysOfferImg}></MenuCatagory>  
     
    </div>
  );
};

export default Menus;
