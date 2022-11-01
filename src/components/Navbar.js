import React from "react";
import { CloseRounded, KeyboardDoubleArrowUp } from "@mui/icons-material";

import "./Navbar.css";
import { CONSTANTS } from "../CONSTANTS";

export default function Navbar(props) {
  return (
    <div className="navbar">
      {[CONSTANTS.ABOUT, CONSTANTS.CONTACT].includes(props.display) && (
        <div className="navbar--extra">
          <span>cv</span>
          <span onClick={(event) => props.open(event, CONSTANTS.CONTACT)}>
            contact
          </span>
        </div>
      )}
      <div className="navbar--main">
        <CloseRounded
          className="closeButton"
          onClick={(event) => props.open(event, CONSTANTS.START)}
        />
        <KeyboardDoubleArrowUp
          className="arrow"
          onClick={(event) => props.open(event, CONSTANTS.ABOUT)}
        />
        <span onClick={(event) => props.open(event, CONSTANTS.ABOUT)}>
          prulec
        </span>
      </div>
    </div>
  );
}
