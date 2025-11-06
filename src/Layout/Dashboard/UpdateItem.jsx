import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/sectionTitle/sectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  //   const item = useLoaderData();
  const { recipe, name, price, image, _id, category } = useLoaderData();
  //   console.log(item);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // upload to imagebb and then get a url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // loading();
    // now send the data to backend to store in menus collection
    console.log(res.data);
    if (res.data) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // now send the data
      const menuRes = await axiosSecure.patch(`/menus/${_id}`, menuItem);
      console.log(menuRes.data);
      // menuItem = "";
      if (menuRes.data.modifiedCount>0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to your Menu Collection in Database`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Update a Item"
        subHeading="Wannna Change"
      ></SectionTitle>
      <div>
        <form className="w-full mx-10" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Recipe name?</legend>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              className="input"
              placeholder="Type your Recipe Name"
            />
          </fieldset>

          <div className="flex gap-6">
            <div>
              <legend className="fieldset-legend">Category </legend>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select"
              >
                <option disabled={true} defaultValue={category}>
                  Select a Category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Price</legend>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Type your Price"
                  defaultValue={price}
                />
              </fieldset>
            </div>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea
              {...register("recipe")}
              className="textarea h-24"
              placeholder="Write your Recipe Details"
              defaultValue={recipe}
            ></textarea>
          </fieldset>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-ghost"
            />
          </div>

          <button className="btn my-3">Update a Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
