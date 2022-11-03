import React from "react";

import './Display.css';
import AboutImage from "./AboutImage";
import AboutInfo from "./AboutInfo";

export default function About(props) {
    return (
        <div className="display">
            <AboutImage image={props.about.image} />
            <AboutInfo about={props.about} />
        </div>
    )
}