import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { signIn } = useContext(AuthContext);
  //   const handleLogout = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     signIn(email, password);
  //   };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Be Our Client</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {/* Popular form validation are formik, react hook form. Available in react awsome components  */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                className="input"
                placeholder="Type your Name"
              />
              {errors.name?.type === "required" && (
                <p role="alert">Your name is required</p>
              )}
              <label className="label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p role="alert">Your email is required</p>
              )}
              <label className="label">Password</label>
              <input
                 type="password"
                 name="password"
                 className="input"
                 placeholder="Email"
                 {...register("password", { required: true, 
                minLength:6,
                maxLength:20, 
                // pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/
            
            
            })}
              />
                {errors.password?.type === "required" && (
                <p role="alert">Your password is required</p>)}  
                {errors.password?.type === "minLength" && (
                <p role="alert">Your password should be minimum 6 characters</p>)} 
                {errors.password?.type === "maxLength" && (
                <p role="alert">Your password should be maximum 20 characters</p>)} 
                {errors.password?.type === "pattern" && (
                <p role="alert">Your password should have one UpperCase,One LowerCase and One Special Character </p>)} 
          
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral mt-4"
              ></input>
            </fieldset>
          </form>
          <p>
            If you are already a our Client, please{" "}
            <Link to="/login" className="link link-hover font-bold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
