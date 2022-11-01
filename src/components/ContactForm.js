import React from "react";
import {
  FormControl,
  InputLabel,
  FilledInput,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <Box component="form">
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">E-mail</InputLabel>
        <FilledInput
          id="component-filled"
          autoFocus
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Message"
          multiline
          // maxRows={4}
          // value={value}
          // onChange={handleChange}
          variant="filled"
        />
        <Button
          variant="contained"
          disableElevation
          startIcon={<MailOutline />}
        >
          Send
        </Button>
      </FormControl>
    </Box>
  );
}
