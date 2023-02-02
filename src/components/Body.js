import React,{useState}from 'react'
import {restaurantData} from "./constants"
import RestaurantCard from "./RestaurantCard"

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;

  }
function Body() {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantData);
  return (
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
        console.log("cl")
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
            console.log(restaurants)
          }}
        >Search</button>
    <div className="cards-container">
       {restaurants.map((restaurant)=>{
        return(
            <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
        )
       })}
    </div>
    </>
  )
}

export default Body