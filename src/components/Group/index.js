import React from "react";
import Card from "../Card";

// css
import "./Group.css";

// icons
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Group = ({ tasks, name, width, users }) => {
  const userIds = tasks.map((task) => parseInt(task.userId.split("-")[1] - 1));
  return (
    <div className="Group" style={{ width: `${width}%`, minWidth: "300px" }}>
      <header className="Group__header">
        <SignalCellularAltIcon style={{ color: "#666" }} />
        <span style={{ fontWeight: "bold" }}> {name}</span>
        <span style={{ color: "#666", flexGrow: 1 }}> {tasks.length}</span>
        <AddIcon style={{ color: "#666" }} />
        <MoreHorizIcon style={{ color: "#666" }} />
      </header>
      {tasks.map((task, id) => {
        return <Card key={id} user={users[userIds[id]]} data={task} />;
      })}
    </div>
  );
};

export default Group;
