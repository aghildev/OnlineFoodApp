import React,{useEffect, useState}from 'react'
import { Link } from "react-router-dom";
import useRestoList from '../utils/hooks/useRestoList';
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
   

    const {allRestaurants,filteredRestaurants} = useRestoList()
   
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