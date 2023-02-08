import React,{useEffect, useState}from 'react'
import { Link } from "react-router-dom";

import {restaurantData} from "./constants"
import RestaurantCard from "./RestaurantCard"
import ShimmerUi from './ShimmerUi';
import filterData from '../utils/Filter';
import {RESTO_LIST_URL} from "./constants"
import useOnlineStatus from '../utils/hooks/useOnlineStatus';


function Body() {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    
    useEffect(()=>{
        //console.log("useEffect Triggered")
        getRestaurants()
      },[])
      const getRestaurants = async()=>{
        const data = await fetch(RESTO_LIST_URL);
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
       
      }

   const isOnline = useOnlineStatus()
   if(!isOnline) {
         return <h1>Sorry..Internet Connection Interupted</h1>
   }

  
   
    if (!allRestaurants) return null;
  return (allRestaurants.length===0)?<ShimmerUi/>: (
    <div className="bg-slate-900 ">
    <input 
    className = "p-2 w-56 rounded-lg"type="text" 
    placeholder="Search For The Restaurants"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    
    />
    <button 
    className="rounded-full px-5 py-2  bg-teal-400"
    onClick={() => {
        //console.log("cl")
            // filter the data
            const data = filterData(searchText,allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data)
            // setAllRestaurants(data);
            //console.log(restaurants)
          }}
        >Search</button>
    <div className="flex flex-wrap gap-10 w-full ml-10">
       {filteredRestaurants.map((restaurant)=>{
        return(
             <Link to = {"/restaurant/"+ restaurant.data.id}  key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}/>
            </Link>
        )
       })}
    </div>
    </div>
  )
}

export default Body