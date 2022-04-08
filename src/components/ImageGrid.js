import { MDBRipple } from "mdb-react-ui-kit";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={require("../assets/cave1.jpg")}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>

          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={require("../assets/pikespeak1.jpg")}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={require("../assets/falls1.webp")}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={require("../assets/gotg1.jpg")}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={require("../assets/pikespeak2.webp")}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={require("../assets/cave3.jpg")}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
