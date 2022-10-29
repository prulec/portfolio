import React from "react";

import "./Display.css";
import { CONSTANTS } from "../Constants";
import Gallery from "./Gallery";

export default function Display(props) {
  return (
    <div className="display">
      {props.show === CONSTANTS.START && (
        <div className="display--backImage">
          <div>
            <img src={"assets/png/astronaut.png"} alt="background" />
          </div>
        </div>
      )}
      {props.show === CONSTANTS.PROJECT && (
        <Gallery images={props.project.images} />
      )}
    </div>
  );
}
