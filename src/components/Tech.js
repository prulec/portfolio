import { Tooltip, ClickAwayListener } from "@mui/material";
import React, { useState } from "react";

import "./Tech.css";

export default function Tech(props) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(handleTooltipClose, 2000);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        title={props.tech.name}
        placement={props.vertical ? "right" : "top"}
        arrow
        disableInteractive
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <div
          className="tech"
          style={{ order: props.tech.position }}
          onClick={(event) => {
            event.stopPropagation();
            handleTooltipOpen();
            props.select(event);
          }}
        >
          <img
            src={"assets/svg/" + props.tech.filename}
            alt={props.tech + " icon"}
            className={
              props.isSelected || props.tech.name === "Add"
                ? "select"
                : "deselect"
            }
          />
        </div>
      </Tooltip>
    </ClickAwayListener>
  );
}
