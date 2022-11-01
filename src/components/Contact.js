import React from "react";

import "./Display.css";
import ContactImage from "./ContactImage";
import ContactForm from "./ContactForm";
import Thanks from "./Thanks";

export default function Contact() {
  return (
    <div className="display">
      <ContactImage />
      <ContactForm />
      <Thanks />
    </div>
  );
}
