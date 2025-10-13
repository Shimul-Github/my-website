import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  // console.log(user.email)
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(image);
  const axiosSecure = useAxiosSecure()

  const handleAddCart = (food) => {
    // console.log(food,'clicked');
    if (user && user.email) {
      console.log(user, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
      };
      // Send to database to store in cartCollection
      // axios.post("http://localhost:5000/carts", cartItem)
      axiosSecure.post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: `Your food item ${name} is added to cart`,
              icon: "success",
              draggable: true,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Are You Logged In?",
        text: "Please Log in for adding to your Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <p>Price:{price}</p>
        </div>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddCart(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
