import React from "react";

import "./Tech.css";

export default function Tech(props) {
  return (
    <div className="tech" onClick={props.select}>
      <img
        src={"assets/svg/" + props.tech.filename}
        alt={props.tech + " icon"}
        className={
          props.isSelected || props.tech.name === "Add" ?
            "select" : "deselect"
        }
      />
    </div>
  );
}
