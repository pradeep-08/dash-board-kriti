import React from "react";
import "../pages/nav.css";
import Dashboard from "./dashbar";

function Nav() {
  // State to manage the selected option
  const openInNewTab = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <div className="main-nav-bar">
        <div className="menu-button-div">
        <Dashboard />
        </div>
        <div className="nav-bar-main-content">
          <div className="nav-button"  onClick={() => openInNewTab("/")}>Dashboard</div>
          <div className="nav-button" onClick={() => openInNewTab("/tickets")}>
            Tickets
          </div>
          <div className="nav-button"  onClick={() => openInNewTab("/contact")}>Contact</div>
          <div className="nav-button"  onClick={() => openInNewTab("/help")}>Help</div>
          <div className="user-login-icons">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/user-male-circle--v1.png"
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
