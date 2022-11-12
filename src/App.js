import React, { useState } from "react";

import "./App.css";
import { CONSTANTS } from "./CONSTANTS";
import { TECHS } from "./data/TECHS";
import { PROJECTS } from "./data/PROJECTS";
import { ABOUT } from "./data/ABOUT";
import Techbar from "./components/Techbar";
import Projects from "./components/Projects";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import MosaicPanel from "./components/MosaicPanel";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const getNames = (array) => {
  return array.map((i) => i.name);
};

// useWindowSize Hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default function App() {
  const [techsFilter, setTechsFilter] = useState(getNames(TECHS));
  const [techSelected, setTechSelected] = useState();
  const [projectsFilter, setProjectsFilter] = useState(getNames(PROJECTS));
  const [projectSelected, setProjectSelected] = useState();
  const [projectDisplayed, setProjectDisplayed] = useState();
  const [display, setDisplay] = useState(CONSTANTS.START);
  const showFullPage = useMediaQuery("(min-width: 750px)");
  const windowSize = useWindowSize();

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
    setDisplay(sectionName);
  };

  return (
    <div className="container">
      {(showFullPage || display === CONSTANTS.START) && (
        <div className="mainSelector">
          <MosaicPanel
            projects={PROJECTS}
            projectsFilter={projectsFilter}
            selectProject={selectProject}
            projectSelected={projectSelected}
            displayProject={displayProject}
            techs={TECHS}
            techsFilter={techsFilter}
            selectTech={selectTech}
            windowSize={windowSize}
            showFullPage={showFullPage}
          />
          {/* <Techbar techs={TECHS} filter={techsFilter} select={selectTech} />
          <Projects
            projects={PROJECTS}
            filter={projectsFilter}
            select={selectProject}
            display={displayProject}
          /> */}
        </div>
      )}
      {(showFullPage || display !== CONSTANTS.START) && (
        <Display
          show={display}
          project={projectDisplayed}
          about={ABOUT}
          techs={TECHS}
        />
      )}
      <Navbar display={display} open={displayFromNavbar} about={ABOUT} />
    </div>
  );
}
