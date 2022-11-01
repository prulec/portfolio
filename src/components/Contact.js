import React, { useState } from "react";

import "./Display.css";
import ContactImage from "./ContactImage";
import ContactForm from "./ContactForm";
import Thanks from "./Thanks";

export default function Contact() {
  const [showThanks, setShowThanks] = useState(false);

  const toThank = (event) => {
    setShowThanks(true)
  }

  return (
    <div className="display">
      <ContactImage />
      {showThanks ? <Thanks /> : <ContactForm toThank={toThank}/>}
    </div>
  );
}
