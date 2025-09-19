import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import coverImg from '../../../assets/CoverImg/ADANAKEBAB-H1.jpg'
// const slides = [
//   coverImg,
//   coverImg,
//   coverImg,
//   coverImg
  
// ]
const MenuCatagory = ({ items, title, coverImg }) => {
    console.log(items)
  return (
    <div>
        {/* <Cover slides={slides} ></Cover> */}
        { title && <Cover img={coverImg} title='Our Menu' ></Cover>}
      <div className="grid md:grid-cols-2 gap-4 py-2.5 items-center">
        {items.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
        <button className="border-2 p-4 bg-yellow-400 text-white rounded-2xl ml-96 ">
          View Full Menus
        </button>
      </div>
    </div>
  );
};

export default MenuCatagory;
