import React from "react";
import "../pages/chart.css";
import Bar1 from "./bar1";

function Chart() {
  return (
    <>
      <div className="master-container">
        <div className="main-div-chart-layout">
          <div className="main-chart-container">
                <Bar1/>
          </div>
          <div className="main-chart-container-2"></div>
        </div>
      </div>
    </>
  );
}

export default Chart;
