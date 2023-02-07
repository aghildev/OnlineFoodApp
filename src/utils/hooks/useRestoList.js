import {useState,useEffect} from "react"

const useRestoList = ()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    useEffect(()=>{
        console.log("useEffect Triggered")
        getRestaurants()
      },[])
      const getRestaurants = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.14287788958732&lng=73.00082512199879&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
       
      }


      return {allRestaurants,filteredRestaurants}
}


export default useRestoList