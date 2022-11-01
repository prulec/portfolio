import React, { useState } from "react";

import "./App.css";
import { CONSTANTS } from "./CONSTANTS";
import { TECHS } from "./TECHS";
import { PROJECTS } from "./PROJECTS";
import Techbar from "./components/Techbar";
import Projects from "./components/Projects";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

const getNames = (array) => {
  return array.map((i) => i.name);
};

export default function App() {
  const [techsFilter, setTechsFilter] = useState(getNames(TECHS));
  const [techSelected, setTechSelected] = useState();
  const [projectsFilter, setProjectsFilter] = useState(getNames(PROJECTS));
  const [projectSelected, setProjectSelected] = useState();
  const [display, setDisplay] = useState(CONSTANTS.START);

  const selectTech = (event, techName) => {
    if (techName !== techSelected) {
      setTechSelected(techName);
      setTechsFilter([techName]);
      setProjectsFilter(
        PROJECTS
          .filter((project) => project.techs.includes(techName))
          .map((project) => project.name)
      );
      setProjectSelected(null);
    } else {
      setTechSelected(null);
      setTechsFilter(getNames(TECHS));
      setProjectsFilter(getNames(PROJECTS));
      setProjectSelected(null);
    }
  };

  return (
    <div className="container">
      <Techbar techs={TECHS} filter={techsFilter} select={selectTech} />
      <Projects projects={PROJECTS} filter={projectsFilter} />
      <Display show={display} project={projectSelected} />
      <Navbar display={display} />
    </div>
  );
}
