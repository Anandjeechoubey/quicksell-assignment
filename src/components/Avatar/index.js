import React from "react";
import "./Avatar.css";

const colors = ["green", "blue", "red", "orange", "purple"];
const avalibilityColors = ["#ccc", "#2ecc71"];

const Avatar = ({ initial, id, available = false }) => {
  const availableColor = available
    ? avalibilityColors[1]
    : avalibilityColors[0];

  return (
    <div className="Avatar" style={{ backgroundColor: colors[id % 5] }}>
      <span style={{ fontSize: "smaller" }}>{initial}</span>
      <div
        className="Online__indicator"
        style={{ backgroundColor: availableColor }}
      ></div>
    </div>
  );
};

export default Avatar;
