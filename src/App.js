import React from "react";

import Techbar from "./components/Techbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="container">
      <h1>App</h1>
      <Techbar/>
      <Projects/>
    </div>
  );
}
