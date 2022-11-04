import { Tooltip } from "@mui/material";
import React from "react";

import "./Tech.css";

export default function Tech(props) {
  return (
    <Tooltip title={props.tech.name} placement="right">
      <div
        className="tech"
        style={{ order: props.tech.position }}
        onClick={props.select}
      >
        <img
          src={"assets/svg/" + props.tech.filename}
          alt={props.tech + " icon"}
          className={
            props.isSelected || props.tech.name === "Add"
              ? "select"
              : "deselect"
          }
        />
      </div>
    </Tooltip>
  );
}
