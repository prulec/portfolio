import React from "react";

import './Display.css';
import AboutImage from "./AboutImage";
import AboutInfo from "./AboutInfo";
import { ABOUT } from "../ABOUT";

export default function About() {
    return (
        <div className="display">
            <AboutImage image={ABOUT.image} />
            <AboutInfo about={ABOUT} />
        </div>
    )
}