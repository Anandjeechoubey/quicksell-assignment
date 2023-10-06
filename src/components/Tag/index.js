import React from "react";

// css
import "./Tag.css";

//icons
import CircleIcon from "@mui/icons-material/Circle";

const Tag = ({ text }) => {
  return (
    <div className="Tag">
      {" "}
      <CircleIcon style={{ color: "#aaa", fontSize: "smaller" }} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
