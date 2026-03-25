// src/CampusMap.js
import React from "react";
import "./CampusMap.css";
import campusImage from "./campus-map.png"; // correct file extension

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
        <button onClick={() => alert("Hello!")}>
        Click Me
      </button>
      <img src={campusImage} alt="Campus Map" className="campus-map-image" />

{nodes.map((node) => (
  <button
    key={node.name}
    title={node.name}
    onClick={() => handleClick(node.name)}
    style={{
      position: "absolute",
top: "100px",
left: "200px",
      transform: "translate(-50%, -50%)",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      border: "2px solid red",
      cursor: "pointer",
      zIndex: 10, // bring the circle above the image
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255,0,0,0.8)")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255,0,0,0.5)")}
  ></button>
))}
    </div>
  );
};
export default CampusMap;
