import React, { useState } from "react";

import "./ProjectThumb.css";
import ProjectOverlay from "./ProjectOverlay";

export default function ProjectThumb(props) {
  const [isHover, setIsHover] = useState(false);

  const doHover = () => setIsHover(true);
  const undoHover = () => setIsHover(false);

  return (
    <div
      className={"projectThumb" + (props.isSelected ? " select" : " deselect")}
      onMouseOver={doHover}
      onClick={props.select}
    >
      <img src={props.project.images[0]} alt={props.project.images[0]} />
      {isHover && (
        <ProjectOverlay
          project={props.project}
          undoHover={undoHover}
          display={props.display}
        />
      )}
    </div>
  );
}
