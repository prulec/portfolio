import React from "react";

import "./ProjectGallery.css";
import ProjectGallerySelector from "./ProjectGallerySelector";

export default function ProjectGallery(props) {
  let selected = 0;
  return (
    <div className="projectGallery">
      <img src={props.images[selected]} alt="Screenshot" />
      <ProjectGallerySelector images={props.images} selected={selected} />
    </div>
  );
}
