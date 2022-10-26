import React from "react";

import Tech from "./Tech";

export default function Techbar(props) {
  return <div className="techbar">
    {props.techs.map(tech => (
      <Tech tech={tech}/>
    ))}
    <Tech tech={{ name: "Add", filename: "add.svg" }}/>
  </div>;
}
