import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

import "./MosaicPanel.css";
import Tech from "./Tech";

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
  let gap = 1;
  let padding = 2 * 0.2 * 16;
  let totalWidth = mosaicSize.width - padding - gap * (totalColumns - 1);
  let rowHeight = totalWidth / totalColumns;

  let titleFontSize = Math.min(32, mosaicSize.width * 0.07)

  return (
    <div className="mosaicPanel">
      <div className="mosaicPanel--header">
        <div className="mosaicPanel--header--title">
          <h1 style={{ fontSize: titleFontSize }}>{props.projectSelected || "Projects"}</h1>
          {props.projectSelected && (
            <img
              src="assets/svg/show-project.svg"
              alt="display-icon"
              onClick={(event) => {
                event.stopPropagation();
                props.displayProject(event, props.projectSelected);
              }}
            />
          )}
        </div>
        <div className="mosaicPanel--header--techs">
          <h2>Techs</h2>
          <ul>
            {props.techs.map((tech) => (
              <li>
                <Tech
                  tech={tech}
                  isSelected={props.techsFilter.includes(tech.name)}
                  select={(event) => props.selectTech(event, tech.name)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ImageList
        sx={{
          width: "auto",
          margin: 0,
          padding: "0 5px 1px 5px",
        }}
        variant="quilted"
        cols={totalColumns}
        rowHeight={rowHeight}
        gap={gap}
      >
        {imagesData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={{
              order: -item.position,
              outline: "solid 1px #8B8B8B",
            }}
            onClick={(event) => props.selectProject(event, item.title)}
            className={
              props.projectsFilter.includes(item.title)
                ? "selectProject"
                : "deselectProject"
            }
          >
            <img
              {...srcset(item.img, 0, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
