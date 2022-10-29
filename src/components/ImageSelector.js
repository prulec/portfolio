import React from "react";

import "./ImageSelector.css";

export default function ImageSelector(props) {
  return (
    <div>
      {props.images.map((image, idx) =>
        idx + 1 === props.selected ? (
          <div className="selectedBullet"></div>
        ) : (
          <div className="bullet"></div>
        )
      )}
    </div>
  );
}
