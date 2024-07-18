import React from "react";
import "../pages/chart.css";
import Bar1 from "./bar1";
import Bar2 from "./bar2";


function Chart() {
  return (
    <>
      <div className="chart-master-container">
        <div className="second-nav-bar">
          <div className="dashboard-child">
            <span className="dashboard-name-1">Dashboard</span>
           
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
                  
                    <div className="b1"><div>Completed</div>
                      <div className="box-1"></div>
                    </div>
                    <div className="b2"><div>In-process</div>
                      <div className="box-2"></div>
                    </div>
                    <div className="b3"><div>Not-yet</div>
                      <div className="box-3"></div>
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
