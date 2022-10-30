import React from "react";

import "./ImageSelector.css";

export default function ImageSelector(props) {
  return (
    <div className="imageSelector">
      {props.images.map((image, idx) =>
        idx === props.selected ? (
          <div className="selectedBullet">
            <div></div>
          </div>
        ) : (
          <div className="noSelectedBullet">
            <div></div>
          </div>
        )
      )}
    </div>
  );
}
