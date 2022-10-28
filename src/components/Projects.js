import React from "react";

import './Projects.css'
import ProjectThumb from "./ProjectThumb";

export default function Projects(props) {
  return (
    <div className="projects">
      {props.projects.map(project => (
        <ProjectThumb project={project} />
      ))}
      {
        (props.projects.length % 2 !== 0) &&
        <div className="projects--blank" />
      }
    </div>
  );
}