import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>Search</h2>
      <input className="searchInput"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Navbar;