import React from "react";

import "./Display.css";
import { CONSTANTS } from "../Constants";
import Gallery from "./Gallery";
import ProjectInfo from "./ProjectInfo";

export default function Display(props) {
  switch (props.show) {
    case CONSTANTS.START:
      return (
        <div className="display">
          <div className="display--backImage">
            <img src={"assets/png/astronaut.png"} alt="background" />
          </div>
        </div>
      );
    case CONSTANTS.PROJECT:
      return (
        <div className="display">
          <Gallery images={props.project.images} />
          <ProjectInfo project={props.project}/>
        </div>
      );
    default:
      return;
  }
}
