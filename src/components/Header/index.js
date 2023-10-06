import React, { useState } from "react";

// css
import "./Header.css";

// icons
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// constants
import { GroupingOptions } from "../../constants";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="Header">
      <button className="Display__button" onClick={() => setOpen1((e) => !e)}>
        <TuneIcon /> <span>Display</span> <KeyboardArrowDownIcon />
      </button>
      {open1 && (
        <div className="DropdownBox t-5 l-4 px-4 py-2">
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <span>Grouping</span>
            <button
              className="Display__button"
              onClick={() => setOpen2((e) => !e)}
            >
              {grouping} <KeyboardArrowDownIcon />
            </button>
            {open2 && (
              <div className="DropdownBox t-4 l-8 px-4 py-4">
                {GroupingOptions.map((option, id) => (
                  <button key={id} onClick={() => setGrouping(id)}>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <span>Ordering</span>
            <button
              className="Display__button"
              onClick={() => setOpen3((e) => !e)}
            >
              {ordering} <KeyboardArrowDownIcon />
            </button>
            {open3 && (
              <div className="DropdownBox t-7 l-8 px-4 py-4">
                <button onClick={() => setOrdering("Grouping")}>
                  Grouping
                </button>
                <button onClick={() => setOrdering("Grouping")}>
                  Grouping
                </button>
                <button onClick={() => setOrdering("Grouping")}>
                  Grouping
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
