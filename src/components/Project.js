import React from "react";

import "./Display.css";
import ProjectGallery from "./ProjectGallery";
import ProjectInfo from "./ProjectInfo";

export default function Project(props) {
  return (
    <div className="display">
      <ProjectGallery images={props.project.images} />
      <ProjectInfo project={props.project} />
    </div>
  );
}
