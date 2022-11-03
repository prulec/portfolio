import React, { useRef } from "react";
import {
  FormControl,
  InputLabel,
  FilledInput,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpzay8r",
        "template_y85904d",
        form.current,
        "_HcWsWbcJAyRVOnGb"
      )
      .then(
        (result) => {
          console.log(result.text);
          props.toThank();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="form" ref={form} onSubmit={sendEmail}>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">E-mail</InputLabel>
        <FilledInput
          id="component-filled"
          autoFocus
          name="reply_to"
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Message"
          multiline
          name="message"
          // maxRows={4}
          // value={value}
          // onChange={handleChange}
          variant="filled"
        />
        <Button
          variant="contained"
          disableElevation
          startIcon={<MailOutline />}
          type="submit"
        >
          Send
        </Button>
      </FormControl>
    </Box>
  );
}
