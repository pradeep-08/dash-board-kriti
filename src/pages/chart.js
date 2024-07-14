import React from "react";
import "../pages/chart.css";
import Bar1 from "./bar1";
import Bar2 from "./bar2";

function Chart() {
  return (
    <>
    
    <div className="second-nav-bar">
        <div className="dashboard-child">
          <span className="dashboard-name-1">Dashboard</span>
          <div className="user-login-icons">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/name--v1.png"
              alt="name--v1"
            />
            <span>Demo-user</span>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/exit--v1.png"
              alt="exit--v1"
            />
          </div>
        </div>
      </div>
      <div className="master-container">
        <div className="main-div-chart-layout">
          <div className="main-chart-container">
            <Bar1 />
          </div>
          <div className="main-chart-container-2">
            <div className="bar-container">
              <Bar2 />
              <div className="semi-bar-details">
                <div>
                  <div className="b1">
                    <div className="box-1"></div>Completed
                  </div>
                  <div className="b2">
                    <div className="box-1"></div>In-process
                  </div>
                  <div className="b3">
                    <div className="box-1"></div>Not-yet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Chart;
