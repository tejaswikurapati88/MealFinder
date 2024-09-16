import "./index.css";
import Component from "react";

const Navbar = () => (
  <div className="nav-cont">
    <h1 className="nav-heading">TheMealDB</h1>
    <div className="nav-button-cont">
      <button className="home-btn">Home</button>
      <input type="search" placeholder="search" className="searchbar" />
    </div>
  </div>
);

export default Navbar;
