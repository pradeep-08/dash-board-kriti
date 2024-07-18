import React from "react";
import Card from "../card";
import Chart from "../chart";
import "./dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
      <div className="dashboard-container-child"> <Chart />
      <Card/></div>
      
      </div>
      <p class="cp-text">
     Copyright © 2024 KritiLabs Technologies. All rights reserved.
</p>
    </>
  );
}

export default Dashboard;
