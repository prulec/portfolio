import React from "react";

import "./Display.css";
import { CONSTANTS } from "../CONSTANTS";
import Start from "./Start";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

export default function Display(props) {
  switch (props.show) {
    case CONSTANTS.START:
      return <Start />;
    case CONSTANTS.PROJECT:
      return <Project project={props.project} />;
    case CONSTANTS.ABOUT:
      return <About />;
    case CONSTANTS.CONTACT:
      return <Contact />;
    default:
      return;
  }
}
