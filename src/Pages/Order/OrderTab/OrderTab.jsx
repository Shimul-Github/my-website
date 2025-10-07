import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 gap-10 ml-28 ">
      {items.map((item) => (
        <FoodCard key={item.id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
