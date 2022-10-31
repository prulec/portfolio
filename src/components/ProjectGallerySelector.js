import React from "react";

import "./ProjectGallerySelector.css";

export default function ProjectGallerySelector(props) {
  return (
    <div className="projectGallerySelector">
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
