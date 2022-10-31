import React from "react";
import { FormControl, InputLabel, FilledInput } from "@mui/material";

import "./Display.css";
import "./Contact.css";

export default function Contact() {
  const highlightColor = '#6750A4';
  return (
    <div className="display">
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">
          Name
        </InputLabel>
        <FilledInput
          id="component-filled"
          //   value={name}
          //   onChange={handleChange}
        />
      </FormControl>
    </div>
  );
}
