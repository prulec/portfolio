import React from "react";

import Techbar from "./components/Techbar";
import Projects from "./components/Projects";
import { TECHS } from "./techs-mock";
import { PROJECTS } from "./projects-mock";

export default function App() {
  return (
    <div className="container">
      <h1>App</h1>
      <Techbar techs={TECHS}/>
      <Projects projects={PROJECTS}/>
    </div>
  );
}
