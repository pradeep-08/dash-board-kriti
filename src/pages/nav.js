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
        </div>
      </div>

    </>
  );
}

export default Nav;
