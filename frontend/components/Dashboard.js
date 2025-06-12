import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Dashboard</h2>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;