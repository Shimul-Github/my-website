import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("kebapData.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "Popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="space-y-5">
      <SectionTitle
        subHeading="Know About"
        heading="Popular Menus"
    
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4" >
        {menu.map(item=><MenuItem 
        key={item.id}
        item={item}
        ></MenuItem>)}
      </div>
    </section>
  );
};

export default PopularMenu;
