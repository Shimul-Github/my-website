import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-10 ml-28 ">
        {items.map((item) => (
          <FoodCard key={item.id} item={item}></FoodCard>
        ))}
      </div>
      <h1 className="font-bold">Need to Apply Pagination Here</h1>
      <div className="join my-6">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </>
  );
};

export default OrderTab;
