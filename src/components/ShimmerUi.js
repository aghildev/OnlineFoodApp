import React from 'react'

function ShimmerUi() {
  return (
    
    <div className="flex gap-6 flex-wrap">
        {Array(20).fill("  ").map((el)=>{
          return(
            
              <div className="w-96 bg-slate-400 h-96"></div>
         
          )
          
        })}
    </div>
  )
}

export default ShimmerUi