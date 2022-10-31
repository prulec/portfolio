import React from "react";

export default function Social(props) {
  return (
    <div className="social">
      <img
        src={props.social.icon}
        alt={props.social.name + " icon"}
      />
    </div>
  );
}