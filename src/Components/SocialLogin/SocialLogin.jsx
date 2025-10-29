import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
 const {googleSignIn} = useAuth();
 const axiosPublic = useAxiosPublic()
 const navigate = useNavigate()
 const handlGoogleSignIn = () => {
    googleSignIn()
    .then(res =>{
      console.log('This is Google',res.user)
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        console.log(res.data)
        navigate('/')
      })


    })
 }
  return <button onClick={handlGoogleSignIn}
  className="btn btn-secondary flex items-center justify-center gap-1.5">
    Login with your
    <FaGoogle></FaGoogle>
      Account
    </button>;
};

export default SocialLogin;
