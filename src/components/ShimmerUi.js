import React from 'react'

function ShimmerUi() {
  return (
    
    <div className="shimmer-container">
        {Array(20).fill("  ").map((el)=>{
          return(
            
              <div className="card-shimmer"></div>
         
          )
          
        })}
    </div>
  )
}

export default ShimmerUi