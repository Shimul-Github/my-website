import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import coverImg from "../../../assets/CoverImg/ADANAKEBAB-H1.jpg";
// const slides = [
//   coverImg,
//   coverImg,
//   coverImg,
//   coverImg

// ]
const MenuCatagory = ({ items, title, img }) => {
  // console.log(items)
  return (
    <div className="p-5">
      {/* <Cover slides={slides} ></Cover> */}
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 py-2.5 items-center mt-16">
        {items.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}

        <Link to={`/order/${title}`}>
          {/* <Link to= '/order'> */}
          <button className="btn btn-outline btn-primary p-4">Order Now</button>
        </Link>
      </div>
      <div className="text-center space-x-5">
        <button className="border-2 p-4 bg-yellow-400 text-white rounded-2xl">
          View Full Menus
        </button>
      </div>
    </div>
  );
};

export default MenuCatagory;
