import React from "react";

import { TECHS } from "../TECHS";
import "./ProjectInfo.css";
import Tech from "./Tech";

export default function ProjectInfo(props) {
  let techs = TECHS.filter((tech) => props.project.techs.includes(tech.name));
  console.log(techs);
  return (
    <div className="projectInfo">
      <div className="projectInfo--header">
        <h1>{props.project.name}</h1>
        <div>
          <p>{props.project.date}</p>
          <div>
            <a href={props.project.url} target="_blank" rel="noreferrer">
              <img src={"assets/svg/OpenInNew.svg"} alt="Link" />
            </a>
            <a href={props.project.repo} target="_blank" rel="noreferrer">
              <img src={"assets/svg/Github.svg"} alt="Repo" />
            </a>
          </div>
        </div>
      </div>
      <div className="projectInfo--techs">
        {techs.map((tech) => (
          <Tech tech={tech} isSelected={true} />
        ))}
      </div>
      <p className="projectInfo--description">{props.project.description}</p>
    </div>
  );
}
