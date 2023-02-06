import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      </Link>
      <div className="nav-items">
        <ul>
          
            <li><Link to="/">Home</Link></li>
          
         
            <li> <Link to="/about">About </Link></li>
         
          
            <li><Link to="/contact">Contact</Link></li>
          
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header