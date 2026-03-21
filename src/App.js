// src/App.js
import React from "react";
import "./App.css";
import campusImage from "./campus-map.png.jpg"; // your image in src folder

function App() {
  return (
    <div className="App">
      <div className="campus-map-container">
        <img src={campusImage} alt="Campus Map" className="campus-map-image" />
      </div>
    </div>
  );
}

export default App;