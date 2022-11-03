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
      return <Project project={props.project} techs={props.techs}/>;
    case CONSTANTS.ABOUT:
      return <About about={props.about}/>;
    case CONSTANTS.CONTACT:
      return <Contact />;
    default:
      return;
  }
}
