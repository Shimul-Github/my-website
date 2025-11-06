import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../Components/sectionTitle/sectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useMenu from "../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
//   const handleItemUpdate = (item) => {
//     console.log(item);
//     const correctedPrice = 20;
//     // const updatePrice = async axiosSecure.update()
//   };
  const handleItemDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const deleteItem = item._id;
        const deleteRequest = await axiosSecure.delete(`/menus/${item._id}`);
        console.log(deleteRequest.data);
        if (deleteRequest.data.deletedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="Manage Item" subHeading="Hurry Up"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button
                      // onClick={() => handleItemUpdate(item._id)}
                      className="btn   btn-xs m-2 py-2"
                    >
                      Update It<FaEdit></FaEdit>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleItemDelete(item)}
                    className="btn   btn-xs"
                  >
                    Delete It<FaDeleteLeft></FaDeleteLeft>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
