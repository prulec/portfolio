import React from "react";

export default function Project(props) {
  return <div className="project">
    <img src={props.thumbnail} alt={props.thumbnail} />
  </div>;
}
