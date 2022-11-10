import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

import "./MosaicPanel.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const totalHeight = 600
const totalWidth = 200
const totalColumns = 6

export default function MosaicPanel(props) {
  let imagesData = props.projects.map((project) => ({
    img: project.images[0],
    title: project.name,
    rows: project.size === 2 ? 2 : 1,
    cols: project.size === 0 ? 1 : 2,
    position: project.position,
  }));
  let horizontal = imagesData.reduce((acc,cur) => acc += cur.cols + 2 * (cur.rows - 1), 0)
  let totalRows = Math.trunc(horizontal / totalColumns) + (horizontal%totalColumns ? 1 : 0)
  let rowHeight = (totalWidth/totalColumns) < (totalHeight/totalRows) ? totalWidth/totalColumns : totalHeight/totalRows

  return (
    <div className="mosaicPanel">
      <ImageList
        sx={{ width: "100%", margin: 0 }}
        variant="quilted"
        cols={totalColumns}
        rowHeight={rowHeight}
      >
        {imagesData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={{ order: -item.position }}
          >
            <img
              {...srcset(item.img, 60, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
