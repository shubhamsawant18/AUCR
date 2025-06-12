import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <h2>SAOS COM</h2>
      <div>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/dashboard" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;