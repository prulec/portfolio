import React from "react";

import "./App.css";
import { CONSTANTS } from "./CONSTANTS";
import { TECHS } from "./TECHS";
import { PROJECTS } from "./PROJECTS";
import Techbar from "./components/Techbar";
import Projects from "./components/Projects";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="container">
      <Techbar techs={TECHS} />
      <Projects projects={PROJECTS} />
      <Display show={CONSTANTS.ABOUT} project={PROJECTS[3]} />
      <Navbar />
    </div>
  );
}
