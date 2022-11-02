import React, { useState } from "react";
import { useEffect } from "react";

import "./ProjectGallery.css";
import ProjectGallerySelector from "./ProjectGallerySelector";

export default function ProjectGallery(props) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    setSelectedImage(0)
  }, [props.project.name])

  const selectImage = (event, number) => {
    if (selectedImage !== number) {
      setSelectedImage(number);
    }
  };

  return (
    <div className="projectGallery">
      <img src={props.project.images[selectedImage]} alt="Screenshot" />
      <ProjectGallerySelector
        images={props.project.images}
        selected={selectedImage}
        select={selectImage}
      />
    </div>
  );
}
