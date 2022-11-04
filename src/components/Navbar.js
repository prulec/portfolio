import React from "react";
import { CloseRounded, KeyboardDoubleArrowUp } from "@mui/icons-material";

import "./Navbar.css";
import { CONSTANTS } from "../CONSTANTS";

export default function Navbar(props) {
  return (
    <div
      className={"navbar" + (props.display === CONSTANTS.START ? " start" : "")}
    >
      {[CONSTANTS.ABOUT, CONSTANTS.CONTACT].includes(props.display) && (
        <div className="navbar--extra">
          <a href={props.about.cv} target="_blank" rel="noreferrer">
            <span>cv</span>
          </a>
          <span onClick={(event) => props.open(event, CONSTANTS.CONTACT)}>
            contact
          </span>
        </div>
      )}
      <div className="navbar--main">
        {props.display !== CONSTANTS.START && (
          <CloseRounded
            className="closeButton"
            onClick={(event) => props.open(event, CONSTANTS.START)}
          />
        )}
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
