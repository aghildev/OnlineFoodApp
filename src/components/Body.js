import React,{useEffect, useState}from 'react'
import { Link } from "react-router-dom";
import {restaurantData} from "./constants"
import RestaurantCard from "./RestaurantCard"
import ShimmerUi from './ShimmerUi';

function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;

  }
function Body() {
    const [searchText, setSearchText] = useState("");
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
      //console.log()
     // console.log(filteredRestaurants)
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