import React from "react";

import ProjectThumb from "./ProjectThumb";

export default function Projects(props) {
  return <div className="projects">
    {props.projects.map(project => (
      <ProjectThumb thumbnail={project.images[0]}/>
    ))}
  </div>;
}
