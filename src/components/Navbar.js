import React from "react";
import { CloseRounded, KeyboardDoubleArrowUp } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--extra">
        <span>cv</span>
        <span>contact</span>
      </div>
      <div className="navbar--main">
        <CloseRounded className="closeButton" />
        <KeyboardDoubleArrowUp className="arrow" />
        <span>prulec</span>
      </div>
    </div>
  );
}
