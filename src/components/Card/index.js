import React from "react";

// css
import "./Card.css";
import Tag from "../Tag";

// components
import Avatar from "../Avatar";

const Card = ({ data, user }) => {
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
        <span>{id}</span>
        <Avatar initial={initial} available={user.available} id={userId} />
      </header>
      <section style={{ flexGrow: 1 }}>
        <p>{title}</p>
      </section>
      <footer>
        {tag.map((tag, id) => {
          return <Tag key={id} text={tag} />;
        })}
      </footer>
    </div>
  );
};

export default Card;
