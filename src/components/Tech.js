import React from "react";

import "./Tech.css"

export default function Tech(props) {
  return (
    <div className="tech">
      <img
        src={"assets/svg/" + props.tech.filename}
        alt={props.tech + " icon"}
      />
    </div>
  );
}