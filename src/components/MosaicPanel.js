import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

import "./MosaicPanel.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MosaicPanel(props) {
  const [mosaicSize, setMosaicSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setMosaicSize({
      width: props.windowSize.width * (props.showFullPage ? 0.45 : 1),
    });
  }, [props.windowSize]);

  let imagesData = props.projects.map((project) => ({
    img: project.images[0],
    title: project.name,
    rows: project.size === 2 ? 2 : 1,
    cols: project.size === 0 ? 1 : 2,
    position: project.position,
  }));

  let totalColumns = 5;
  let totalWidth = mosaicSize.width;
  // let totalHeight = mosaicSize.height
  // let horizontal = imagesData.reduce((acc,cur) => acc += cur.cols + 2 * (cur.rows - 1), 0)
  // let totalRows = Math.ceil(horizontal/totalColumns)
  // let rowHeight = Math.min(totalWidth/totalColumns, totalHeight/totalRows)
  let rowHeight = totalWidth / totalColumns;

  return (
    <div className="mosaicPanel">
      <ImageList
        sx={{ width: "100%", margin: 0 }}
        variant="quilted"
        cols={totalColumns}
        rowHeight={rowHeight}
        gap={2}
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
