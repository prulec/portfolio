import React from "react";

import "./Projects.css";
import ProjectThumb from "./ProjectThumb";

export default function Projects(props) {
  return (
    <div className="projects">
      {props.projects.map((project) => (
        <ProjectThumb
          project={project}
          isSelected={props.filter.includes(project.name)}
          select={(event) => props.select(event, project.name)}
          display={props.display}
        />
      ))}
      {props.projects.length % 2 !== 0 && (
        <div className="projects--blank" style={{ order: 10000 }} />
      )}
    </div>
  );
}
