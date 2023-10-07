import React from "react";

// css
import "./Card.css";
import Tag from "../Tag";

// components
import Avatar from "../Avatar";

// icons
import { priorityIcons, progressIcons } from "../Icons";

const Card = ({ data, user, grouping }) => {
  const { title, tag, id } = data;
  const name = user.name;
  const userId = parseInt(user.id.split("-")[1]) - 1;
  const initial = name
    ? name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "initial";
  return (
    <div className="Card">
      <header className="Card__header">
        <span style={{ fontSize: "medium" }}>{id}</span>
        {grouping !== 1 && (
          <Avatar initial={initial} available={user.available} id={userId} />
        )}
      </header>
      <section
        style={{
          flexGrow: 1,
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {grouping !== 0 && progressIcons(data.status)}
        <p style={{ fontSize: "small" }}>{title}</p>
      </section>
      <footer style={{ gap: "1rem", display: "flex", alignItems: "center" }}>
        {grouping !== 2 && <span>{priorityIcons(data.priority)}</span>}
        {tag.map((tag, id) => {
          return <Tag key={id} text={tag} />;
        })}
      </footer>
    </div>
  );
};

export default Card;
