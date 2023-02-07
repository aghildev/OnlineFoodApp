import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_BASE_URL } from "./constants"
import ShimmerUi from "./ShimmerUi"

import useRestoMenu from '../utils/hooks/useRestoMenu'



function RestaurantDetails() {

  const param = useParams()
  const { id } = param
  
  const restoData = useRestoMenu(id)
  console.log(restoData)
  //if(!restoData) {return null}

  return (!restoData) ? <ShimmerUi /> : (
    <div className="menu-container">
      <div>
        {/* <h1>I am the restaurant with id:{id}</h1> */}
        <h2>{restoData.name}</h2>
        <img src={IMG_BASE_URL + restoData?.cloudinaryImageId} alt="" />
        <h2>{restoData?.avgRating}</h2>

        <h2>{restoData?.costForTwoMsg}</h2>

        <h2>{restoData?.cuisines?.join(", ")}</h2>
        <h2>{restoData?.city},{restoData?.area}</h2>
      </div>
      <div>
      <h1>Menu</h1>
          <ul style={{listStyleTpe:"disc"}}>
            {restoData?.menu?.items && Object.values(restoData.menu.items).map((item)=>{
              return(
                <li key={item.id}>{item.name}</li>
              )
            })}
          </ul>
      </div>
    </div>

  )
}

export default RestaurantDetails