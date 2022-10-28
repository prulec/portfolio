import React from "react";

import './App.css'
import Techbar from "./components/Techbar";
import Projects from "./components/Projects";
import Display from "./components/Display";
import { TECHS } from "./techs-mock";
import { PROJECTS } from "./projects-mock";

export default function App() {
  return (
    <div className="container">
      <Techbar techs={TECHS}/>
      <Projects projects={PROJECTS}/>
      <Display />
    </div>
  );
}
