import React from "react";

export default function Social(props) {
  return (
    <div className="social">
    <a href={props.social.link} target="_blank" rel="noreferrer">
      <img
        src={props.social.icon}
        alt={props.social.name + " icon"}
      />
    </a>
    </div>
  );
}