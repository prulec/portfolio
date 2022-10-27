import React from "react";

import "./ProjectThumb.css";
import ProjectOverlay from "./ProjectOverlay";

export default function Project(props) {
  return (
    <div className="projectThumb">
      <img className="projectThumb--img" src={props.project.images[0]} alt={props.project.images[0]} />
      <ProjectOverlay project={props.project} />
    </div>
  );
}
