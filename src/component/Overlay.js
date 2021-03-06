import React, { useState } from "react";
import "../css/Overlay.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactPlayer from "react-player/youtube";
import "../css/Overlay.css";
import { IconButton } from "@material-ui/core";

const Overlay = ({ close, selected, videoOverLay }) => {
  console.log(selected);
  return (
    <div className="overlay">
      <div className="overlay__header">
        <IconButton
          style={{ background: "rgba(46,50,50,0.8)" }}
          onClick={() => close()}
        >
          <CloseIcon fontSize="large" style={{ fill: "#fff" }} />
        </IconButton>
      </div>

      <div className="videoContainer">
        <h4>
          {selected === "Hs-1_HNALhw" &&
            "Trailer Not Available, this is a default Netflix video"}
        </h4>
        <ReactPlayer
          controls={true}
          light
          url={`https://www.youtube.com/watch?v=${selected}`}
        />
      </div>
    </div>
  );
};

export default Overlay;
