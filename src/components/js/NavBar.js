import React from "react";
import "../css/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>

      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          Shopping Cart
        </a>
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/authenticate">Log in</a>
            </li>
            <li>
              <a href="/authenticate">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
