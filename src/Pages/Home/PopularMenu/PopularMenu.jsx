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
      <button className="border-2 p-4 bg-yellow-400 text-white rounded-2xl ml-90 ">View Full Menus</button>
      </div>
    </section>
  );
};

export default PopularMenu;
