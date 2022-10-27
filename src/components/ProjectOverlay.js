import React from "react";

import './ProjectOverlay.css'

export default function ProjectOverlay(props) {
  return <div className="projectOverlay">
    <h2>{props.project.name}</h2>
    <img src="assets/svg/log-in-circle.svg" alt="login-icon" />
  </div>;
}
