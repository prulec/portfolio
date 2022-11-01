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
  const [projectDisplayed, setProjectDisplayed] = useState();
  const [display, setDisplay] = useState(CONSTANTS.START);

  const selectTech = (event, techName) => {
    if (techName !== techSelected) {
      setTechSelected(techName);
      setTechsFilter([techName]);
      setProjectsFilter(
        PROJECTS.filter((project) => project.techs.includes(techName)).map(
          (project) => project.name
        )
      );
      setProjectSelected();
    } else {
      setTechSelected();
      setTechsFilter(getNames(TECHS));
      setProjectsFilter(getNames(PROJECTS));
      setProjectSelected();
    }
  };

  const selectProject = (event, projectName) => {
    if (projectName !== projectSelected) {
      setTechSelected();
      setTechsFilter(
        PROJECTS.find((project) => project.name === projectName).techs
      );
      setProjectsFilter([projectName]);
      setProjectSelected(projectName);
    } else {
      setTechSelected();
      setTechsFilter(getNames(TECHS));
      setProjectsFilter(getNames(PROJECTS));
      setProjectSelected();
    }
  };

  const displayProject = (event, projectName) => {
    setProjectDisplayed(
      PROJECTS.find((project) => project.name === projectName)
    );
    setDisplay(CONSTANTS.PROJECT);
  };

  const displayFromNavbar = (event, sectionName) => {
    setDisplay(sectionName)
  }

  return (
    <div className="container">
      <Techbar techs={TECHS} filter={techsFilter} select={selectTech} />
      <Projects
        projects={PROJECTS}
        filter={projectsFilter}
        select={selectProject}
        display={displayProject}
      />
      <Display show={display} project={projectDisplayed} />
      <Navbar display={display} open={displayFromNavbar} />
    </div>
  );
}
