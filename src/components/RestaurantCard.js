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
        <div className="border-solid border-2 border-sky-500 p-9 w-96 shadow-lg shadow-cyan-500/50 rounded-lg text-slate-400">
            <img className = "w-full" src={IMG_BASE_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{area}</h6>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard