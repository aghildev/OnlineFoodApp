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
    <>
    <input 
    className = "searchbar"type="text" 
    placeholder="Search For The Restaurants"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    
    />
    <button 
    className="search-btn"
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
    <div className="cards-container">
       {filteredRestaurants.map((restaurant)=>{
        return(
             <Link to = {"/restaurant/"+ restaurant.data.id}  key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}/>
            </Link>
        )
       })}
    </div>
    </>
  )
}

export default Body