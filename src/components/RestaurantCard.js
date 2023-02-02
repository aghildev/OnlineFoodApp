import React from 'react'
import { IMG_BASE_URL } from "./constants";

function RestaurantCard({cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating}) {
    return (
        <div className="card">
            <img src={IMG_BASE_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{area}</h6>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard