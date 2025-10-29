import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(cart);
  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
             refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="flex justify-evenly space-y-6 my-4">
        <h1>Total Number of Orders:{cart.length}</h1>
        <h1>Total price:{totalPrice}</h1>
        <button>Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  {item.image ? (
                    <img src={item.image} alt="" className="w-20 h-18.5" />
                  ) : (
                    <img
                      src="https://i.postimg.cc/bNYQ9X86/ben-wicks-ODXOROj-Peds-unsplash.jpg"
                      alt=""
                      className="w-20 h-18.5"
                    />
                  )}
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-400"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </>
  );
};

export default Cart;
