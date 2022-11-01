import React from "react";
import { MarkEmailReadOutlined } from "@mui/icons-material";

import "./Thanks.css";

export default function Thanks() {
  return (
    <div className="thanks">
      <MarkEmailReadOutlined className="mailSentIcon"/>
      <h1>Thanks for <br/>contacting me!</h1>
      <h2>The message was sent! :)</h2>
    </div>
  );
}
