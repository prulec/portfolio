import React from "react";

import "./Display.css";
import { CONSTANTS } from "../CONSTANTS";
import Start from "./Start";
import Project from "./Project";
import About from "./About";

export default function Display(props) {
  switch (props.show) {
    case CONSTANTS.START:
      return <Start />;
    case CONSTANTS.PROJECT:
      return <Project project={props.project} />;
    case CONSTANTS.ABOUT:
      return <About />;
    case CONSTANTS.CONTACT:
      return <div className="display"></div>;
    case CONSTANTS.THANKS:
      return <div className="display"></div>;
    default:
      return;
  }
}
