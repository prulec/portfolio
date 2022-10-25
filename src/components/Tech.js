import React from "react";

import { tech } from "../tech-mock";

export default function Tech() {
  let total = Object.keys(tech).length
  return (
    <div className="tech">
      <img src={"assets/svg/" + tech.D3 + ".svg"} alt="icon" />
    </div>
  );
}
