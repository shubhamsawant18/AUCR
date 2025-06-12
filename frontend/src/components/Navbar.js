import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      padding: "15px",
      background: "#282c34",
      color: "white",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ marginLeft: "20px" }}>SAOS COM</h2>
      <div style={{ marginRight: "20px" }}>
        <Link to="/" style={{ margin: "15px", color: "white", textDecoration: "none", fontSize: "18px" }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ margin: "15px", color: "white", textDecoration: "none", fontSize: "18px" }}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;