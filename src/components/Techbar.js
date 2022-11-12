import React from "react";

import "./Techbar.css";
import Tech from "./Tech";

export default function Techbar(props) {
  return (
    <div className="techbar">
      {props.techs.map((tech) => (
        <Tech
          tech={tech}
          isSelected={props.filter.includes(tech.name)}
          select={(event) => props.select(event, tech.name)}
          vertical={true}
        />
      ))}
      {/* <Tech tech={{ name: "Add", filename: "add.svg" }} /> */}
    </div>
  );
}
