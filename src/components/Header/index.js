import React, { useState } from "react";

// css
import "./Header.css";

// icons
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OutsideClickHandler from "react-outside-click-handler";

// constants
import { GroupingOptions, OrderingOptions } from "../../constants";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="Header">
      <button
        className="Display__button"
        onClick={() => {
          setOpen1((e) => !e);
          setOpen2(false);
          setOpen3(false);
        }}
      >
        <TuneIcon /> <span>Display</span> <KeyboardArrowDownIcon />
      </button>
      {open1 && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen1(false);
          }}
        >
          <div className="DropdownBox t-5 l-4 px-4 py-2">
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span>Grouping</span>
              <button
                className="Display__button"
                onClick={() => {
                  setOpen2((e) => !e);
                  setOpen3(false);
                }}
              >
                {GroupingOptions[grouping]} <KeyboardArrowDownIcon />
              </button>
              {open2 && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setOpen2(false);
                  }}
                >
                  <div className="DropdownBox t-4 l-8 px-4 py-4">
                    {GroupingOptions.map((option, id) => (
                      <button
                        style={{
                          background: "white",
                          border: "none",
                          padding: "0.5rem 1rem",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                        }}
                        key={id}
                        onClick={() => {
                          setGrouping(id);
                          localStorage.setItem("grouping", id);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </OutsideClickHandler>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span>Ordering</span>
              <button
                className="Display__button"
                onClick={() => {
                  setOpen3((e) => !e);
                  setOpen2(false);
                }}
              >
                {OrderingOptions[ordering]} <KeyboardArrowDownIcon />
              </button>
              {open3 && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setOpen3(false);
                  }}
                >
                  <div className="DropdownBox t-7 l-8 px-4 py-4">
                    {OrderingOptions.map((option, id) => (
                      <button
                        style={{
                          background: "white",
                          border: "none",
                          padding: "0.5rem 1rem",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                        }}
                        key={id}
                        onClick={() => {
                          setOrdering(id);
                          localStorage.setItem("ordering", id);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </OutsideClickHandler>
              )}
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
