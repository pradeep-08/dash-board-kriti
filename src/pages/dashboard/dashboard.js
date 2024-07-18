import React from "react";
import Card from "../card";
import Chart from "../chart";
import "./dashboard.css";
import Footer from "../service/footer";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
      <div className="dashboard-container-child"> <Chart />
      <Card/>   </div>
      
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
