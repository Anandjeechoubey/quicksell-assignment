import React from "react";
import Card from "../Card";

// css
import "./Group.css";

// icons
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Avatar from "../Avatar";

const Group = ({ tasks, name, width, users, grouping }) => {
  const userIds = tasks.map((task) => parseInt(task.userId.split("-")[1] - 1));
  // const initial = name
  //   ? name
  //       .split(" ")
  //       .map((n) => n[0].toUpperCase())
  //       .join("")
  //   : "initial";
  return (
    <div
      className="Group"
      style={{ width: `${width}%`, minWidth: "300px", flexGrow: 1 }}
    >
      <header className="Group__header">
        {/* <SignalCellularAltIcon style={{ color: "#666" }} /> */}
        {grouping === 0 && <SignalCellularAltIcon style={{ color: "#666" }} />}
        {/* {grouping === 1 && <Avatar initial={initial} />} */}
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
