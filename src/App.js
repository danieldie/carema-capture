import React from "react";
import Webcam from "react-webcam";
import WebcamVideo from "./WebcamVideo";
import "./App.css";

function App() {
  const videoConstraints = {
    width: { min: 640 },
    height: { min: 480 },
    aspectRatio: 0.6666666667,
    facingMode: "user"
  };

  return (
    <div className="App">
      <WebcamVideo />
    </div>
  );
}

export default App;
