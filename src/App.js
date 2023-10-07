import { useEffect, useState } from "react";
import axios from "axios";

// css
import "./App.css";

// components
import Header from "./components/Header";
import Group from "./components/Group";

// constants
import {
  PriorityLevels,
  // ProgressLevels,
  // GroupingOptions
} from "./constants";

function App() {
  // const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  const [grouping, setGrouping] = useState(0);
  const [ordering, setOrdering] = useState(0);
  const [byPriority, setByPriority] = useState([]);
  const [byUser, setByUser] = useState([]);
  const [byStatus, setByStatus] = useState([]);

  // const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        setUsers(res.data.users);
        const p = res.data.tickets.reduce((acc, ticket) => {
          const priority = PriorityLevels[ticket.priority];
          acc[priority] = acc[priority] || [];
          acc[priority].push(ticket);
          return acc;
        }, []);
        setByPriority(p);
        setGroups(p);
        console.log("t", res.data.users);
        setByUser(
          res.data.tickets.reduce((acc, ticket) => {
            const userId =
              res.data.users[parseInt(ticket.userId.split("-")[1]) - 1].name;
            acc[userId] = acc[userId] || [];
            acc[userId].push(ticket);
            return acc;
          }, [])
        );
        setByStatus(
          res.data.tickets.reduce((acc, ticket) => {
            const status = ticket.status;
            acc[status] = acc[status] || [];
            acc[status].push(ticket);
            return acc;
          }, [])
        );
      });
  }, []);

  useEffect(() => {
    if (grouping === 0) {
      setGroups(byPriority);
    } else if (grouping === 1) {
      setGroups(byUser);
      console.log(byUser);
    } else if (grouping === 2) {
      setGroups(byStatus);
    }
  }, [grouping, byPriority, byUser, byStatus]);

  return (
    <body className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <main
        style={{
          display: "flex",
          padding: "4rem",
          gap: "3rem",
          overflow: "scroll",
          scrollbarColor: "#fff #fff",
          minHeight: "calc(100vh - 18rem)",
        }}
      >
        {Object.keys(groups).map((group, id) => {
          return (
            <Group
              width={100 / groups.length}
              key={id}
              users={users}
              name={group}
              grouping={grouping}
              tasks={Object.values(groups)[id]}
            />
          );
        })}
      </main>
    </body>
  );
}

export default App;
