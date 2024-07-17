import React from "react";
import "../pages/card.css";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-container-child">
          <div className="arrow-div">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/fluency-systems-regular/48/drag-up-right-arrow.png"
              alt="drag-up-right-arrow"
            />
          </div>
          <div className="check-status-container">
            <div className="check-status">
              <div>Check-IN</div>
            </div>
            <div className="count-container">
              <img
                className="card-image"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-check-in-vacation-planning-flaticons-lineal-color-flat-icons.png"
                alt="external-check-in-vacation-planning-flaticons-lineal-color-flat-icons"
              />
              <span className="count-bar"> + 130 Today</span>
            </div>
          </div>
        </div>

        <div className="card-container-child">
          <div className="arrow-div">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/fluency-systems-regular/48/drag-up-right-arrow.png"
              alt="drag-up-right-arrow"
            />
          </div>
          <div className="check-status">
            <div>Check-Out</div>
          </div>

          <div className="count-container">
            <img
              className="card-image"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-check-out-vacation-planning-flaticons-lineal-color-flat-icons.png"
              alt="external-check-in-vacation-planning-flaticons-lineal-color-flat-icons"
            />
            <span className="count-bar"> + 50 Today</span>
          </div>
        </div>
        <div className="card-container-child">
          <div className="arrow-div">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/fluency-systems-regular/48/drag-up-right-arrow.png"
              alt="drag-up-right-arrow"
            />
          </div>
          <div className="check-status">
            <div>Completed</div>
          </div>

          <div className="count-container">
            <img
              className="card-image"
              src="https://img.icons8.com/color-glass/48/approval--v1.png"
              alt="external-check-in-vacation-planning-flaticons-lineal-color-flat-icons"
            />
            <span className="count-bar"> + 50 Today</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
