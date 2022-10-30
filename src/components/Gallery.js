import React from "react";

import "./Gallery.css";
import ImageSelector from "./ImageSelector";

export default function Gallery(props) {
  let selected = 0;
  return (
    <div className="gallery">
      <img src={props.images[selected]} alt="Screenshot" />
      <ImageSelector images={props.images} selected={selected} />
    </div>
  );
}
