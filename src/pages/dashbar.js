import "./dashbar.css";
import React, { useState } from "react";

function Dashbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
        <a href={() => false} className="closebtn" onClick={closeNav}>
          &times;
        </a>

        <div className="dashboard-child-div">
          <div className="dashboard-name">
            <span>Hi Welcome</span>
          </div>

          <div className="dashboard-contents">
            <div className="content-inner">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/papercut/60/bar-chart.png"
                alt="laptop-metrics"
                title="Help"
              />
            </div>
          </div>
          <div className="dashboard-contents">
            <div className="content-inner">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/document--v1.png"
                alt="laptop-metrics"
                title="Help"
              />
            </div>
          </div>
          <div className="dashboard-contents">
            <div className="content-inner">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/archive.png"
                alt="archive"
              />
            </div>
          </div>
          <div className="dashboard-contents">
            <div className="content-inner">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/info--v1.png"
                alt="laptop-metrics"
                title="Help"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span
          id="main"
          style={{ fontSize: "25px", cursor: "pointer" }}
          onClick={openNav}
        >
          &#9776;
        </span>
      </div>
      <style jsx>{`
        .sidenav {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #ececec;
          overflow-x: hidden;
          transition: 0.5s;
          padding-rig: 0px;
        }

        .sidenav.open {
          width: 120px;
        }

        .sidenav a {
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 20px;
          color: #818181;

          transition: 0.3s;
        }

        .sidenav a:hover {
          color: #000000;
        }

        .sidenav .closebtn {
          position: absolute;
          top: 0;
          right: 15px;
          font-size: 30px;
          margin-left: 50px;
        }

        #main {
          transition: margin-left 0.5s;
          padding: 10px;
          color: #000000;
          background-color: #ececec;
          border-radius: 8px;
        }

        #main:hover {
          border-radius: 5px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }

        @media screen and (max-height: 450px) {
          .sidenav {
            padding-top: 15px;
          }
          .sidenav a {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Dashbar;
