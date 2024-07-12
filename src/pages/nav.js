import React from "react";
import "../pages/nav.css";
import Dashboard from "./dashbar";
import Tickets from "./service/tickets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Nav() {
  // State to manage the selected option
 
  return (
    <>
      <div className="main-nav-bar">
        <div className="menu-button-div">
          <Dashboard/>
        </div>

        <div className="nav-bar-main-content">
        <BrowserRouter>
      <Routes>
        <Route path="blogs" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
          <div  className="nav-button">Dashboard</div>
          <div className="nav-button">Service</div>
          <div className="nav-button">Contact</div>
          <div className="nav-button">Help</div>
        </div>
      </div>
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
    </>
  );
}

export default Nav;
