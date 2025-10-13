import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

 

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    // Apply Tanstack query with axios secure to get data from server
    // const {data} = useQuery({
    const {data:cart=[]} = useQuery({
        queryKey:['cart'],
        queryFn: async () => {
           const res =  await axiosSecure.get('/carts')
            // console.log(res.data)
            return res.data;
            // console.log(res.data)
        }
        

    });
    // console.log(cart)
    
    return [cart]
    
};

export default useCart;