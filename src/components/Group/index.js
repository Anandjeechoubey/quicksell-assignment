import React from "react";
import Card from "../Card";

// css
import "./Group.css";

// icons
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { priorityIcons, progressIcons } from "../Icons";
import Avatar from "../Avatar";

const Group = ({ tasks, name, width, users, grouping, ordering }) => {
  const userIds = tasks.map((task) => parseInt(task.userId.split("-")[1] - 1));
  const initial = name
    ? name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "I";
  if (ordering === 0) tasks.sort((a, b) => b.priority - a.priority);
  if (ordering === 1) tasks.sort((a, b) => a.title.localeCompare(b.title));

  const user = users.find((user) => user.name === name) || {
    id: "usr-1",
    available: false,
  };
  const userId = parseInt(user.id.split("-")[1]) - 1;

  return (
    <div
      className="Group"
      style={{ width: `${width}%`, minWidth: "300px", flexGrow: 1 }}
    >
      <header className="Group__header">
        {/* <SignalCellularAltIcon style={{ color: "#666" }} /> */}
        {grouping === 0 && progressIcons(name)}
        {grouping === 1 && (
          <Avatar initial={initial} id={userId} available={user.available} />
        )}
        {grouping === 2 && priorityIcons(name)}
        <span style={{ fontWeight: "bold", fontSize: "small" }}> {name}</span>
        <span style={{ color: "#666", flexGrow: 1 }}> {tasks.length}</span>
        <AddIcon style={{ color: "#666", fontSize: "small" }} />
        <MoreHorizIcon style={{ color: "#666", fontSize: "small" }} />
      </header>
      {tasks.map((task, id) => {
        return (
          <Card
            grouping={grouping}
            key={id}
            user={users[userIds[id]]}
            data={task}
          />
        );
      })}
    </div>
  );
};

export default Group;
