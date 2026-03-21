// src/CampusMap.js
import React from "react";
import "./CampusMap.css"; // optional CSS
import campusImage from "./campus-map.png.jpg"; // your image in src/

const CampusMap = () => {
  return (
    <div className="campus-map-container">
      <img src={campusImage} alt="Campus Map" className="campus-map-image" />
    </div>
  );
};

export default CampusMap;