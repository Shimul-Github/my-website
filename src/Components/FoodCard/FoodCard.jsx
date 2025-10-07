const FoodCard = ({ item }) => {
  const { id, name, image, price, recipe } = item;
  // console.log(image);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
        <p>Price:{price}</p>
        </div>
        <p>
         {recipe}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
