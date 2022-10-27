import React from "react";

import './Projects.css'
import ProjectThumb from "./ProjectThumb";

export default function Projects(props) {
  return <div className="projects">
    {props.projects.map(project => (
      <ProjectThumb project={project}/>
    ))}
  </div>;
}
