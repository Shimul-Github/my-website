// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu =  () =>{
    const axiosPublic = useAxiosPublic();
    // const [menu,setMenu]=useState([])
    // const [loading,setLoading]=useState(true)
    // AMRA BACKEND THEKE MENU LOAD KORECHI USEEFFECT DIE BUT ETI DIE AMRA WEBSITE E KONO CHANGE KORLE TA AUTO LOAD KORE ABAR CHANGED LOOK TO DAKATE PARI NA, TAI TANSTACK QUERY DIE DATA LOAD KORE REFETCH DIBO
//     useEffect(() => {
//         // fetch('kebapData.json')
//         fetch('http://localhost:5000/menus')
//        .then(res=>res.json())
//        .then(data=>{
//         setMenu(data);
//         setLoading(false);
//     });
// },[])
 const {data:menu =[], isPending: loading, refetch } = useQuery({
    queryKey:['menu'],
    queryFn: async() =>{
        const res = await axiosPublic.get('/menus');
        return res.data;

    }
 })

    // console.log(menu)
    return [menu,loading,refetch]
}
export default useMenu;