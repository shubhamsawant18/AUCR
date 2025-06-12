import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "70px", padding: "20px", textAlign: "center" }}>
      <Navbar />
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Dashboard;