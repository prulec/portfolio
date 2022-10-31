import React from "react";

import "./AboutInfo.css";
import Social from "./Social";

export default function AboutInfo(props) {
  return (
    <div className="aboutInfo">
      <div className="aboutInfo--header">
        <h1>{props.about.name}</h1>
        <p>{props.about.title}</p>
      </div>
      <div className="aboutInfo--details">
        <div className="aboutInfo--details--socials">
          {props.about.socials.map((social) => (
            <Social social={social} />
          ))}
        </div>
        <p className="aboutInfo--details--description">{props.about.description}</p>
      </div>
    </div>
  );
}
