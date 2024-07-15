import React from "react";
import Card from "../card";
import Chart from "../chart";
import "./dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <Chart />
        <Card/>
      </div>
      
    </>
  );
}

export default Dashboard;
