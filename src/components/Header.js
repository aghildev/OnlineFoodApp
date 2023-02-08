import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center text-white bg-slate-700 shadow-2xl">
    <Link to="/">
      <div className=" w-20 rounded-t-lg">
        <img className ="rounded-r-lg" src={logo} alt="logo" />
      </div>
      </Link>
      <div >
        <ul className="flex px-5">
          
            <li className="px-5"><Link to="/">Home</Link></li>
          
         
            <li className="px-5"> <Link to="/about">About </Link></li>
         
          
            <li className="px-5"><Link to="/contact">Contact</Link></li>
            <li className="px-5"><Link to="/instamart">InstaMart</Link></li>
          
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header