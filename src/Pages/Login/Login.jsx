import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
 

const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log('state is ', location.state)
  useEffect(() => {
    generateCaptcha();
  }, []);
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
    setUserInput("");
    setIsCaptchaValid(false);
  };
  const validateCaptcha = () => {
    if (userInput === captcha) {
      setIsCaptchaValid(true);
      setUserInput("");
      alert("Matched!");
    } else {
      alert("Captcha does not match! Try again.");
      generateCaptcha();
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Logged In successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(from,{replace:true});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sundorbon Kebap | Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h1 className="text-2xl font-extrabold">
              Don't have a ACCOUNT!!!--
              <Link className="underline text-amber-700" to="/signup">
                Click Here
              </Link>
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div style={{ margin: "20px 0" }}>
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: "10px",
                      textAlign: "center",
                      fontFamily: "monospace",
                      fontSize: "20px",
                      letterSpacing: "3px",
                    }}
                  >
                    {captcha}
                  </div>
                  <div>
                    <input
                      className="border w-full my-2 py-2"
                      type="text"
                      placeholder="Enter CAPTCHA"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                    />
                  </div>
                  <button
                    className="border px-8 bg-amber-700 text-white py-4 text-xl"
                    type="button"
                    onClick={validateCaptcha}
                  >
                    Validate
                  </button>
                </div>

                {/* <button className="btn btn-neutral mt-4">Login</button> */}
                {isCaptchaValid && (
                  <input
                    // disabled={disabled}
                    className="btn btn-neutral mt-4"
                    type="submit"
                    value="Submit"
                  />
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
