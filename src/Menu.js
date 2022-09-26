import React from "react";
import { NavLink } from "react-router-dom";

var Menu = () => {
  return (
    <>
      <div className="header_container">
        <h3 className="header_heading">Hardik Sharma Industries</h3>
        <div className="nav">
          <NavLink to="/" className="nav_link" end>
            Home
          </NavLink>
          <NavLink to="/service" className="nav_link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav_link">
            Contact
          </NavLink>
          <NavLink to="/search" className="nav_link">
            Search
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
