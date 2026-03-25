// src/CampusMap.js
import React from "react";
import "./CampusMap.css";
import campusImage from "./campus-map.png.jpg";

const nodes = [
  { name: "Library", top: "20%", left: "30%" },
  { name: "Gym", top: "50%", left: "70%" },
  { name: "Cafeteria", top: "60%", left: "45%" },
];


const CampusMap = () => {
  // Function when a node is clicked
  const handleClick = (building) => {
    alert(`You clicked on ${building}`);
  };
  return (
    <div className="campus-map-container">
      <img src={campusImage} alt="Campus Map" className="campus-map-image" />

      {nodes.map((node) => (
        <button
          key={node.name}
          onClick={() => handleClick(node.name)}
          style={{
            position: "absolute",
            top: node.top,
            left: node.left,
            transform: "translate(-50%, -50%)",
            backgroundColor: "red",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
      ))}
    </div>
  );
};
export default CampusMap;
