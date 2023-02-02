import React from 'react'
import logo from "../images/logo.jpg"

function Header() {
  return (
    <div className ="header-container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header