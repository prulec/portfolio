import React from "react";

import "./Display.css";
import ProjectGallery from "./ProjectGallery";
import ProjectInfo from "./ProjectInfo";

export default function Project(props) {
  return (
    <div className="display">
      <ProjectGallery project={props.project} />
      <ProjectInfo project={props.project} />
    </div>
  );
}
