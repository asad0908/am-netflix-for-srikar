import React from "react";
import "../../css/Dashboard/Widget.css";

const Widget = ({ title, des, tv, imgsrc, videosrc, flex }) => {
  const flexStyle = {
    flexDirection: flex ? "row-reverse" : "row",
  };

  const videoStyle = tv
    ? {
        width: "80%",
        height: "80%",
        zIndex: 1,
        display: "inline-block",
        objectFit: "contain",
        paddingTop: "83px",
        paddingLeft: "60px",
        paddingRight: "40px",
      }
    : {
        width: "56%",
        height: "56%",
        zIndex: 1,
        display: "inline-block",
        objectFit: "contain",
        paddingTop: "30px",
        paddingBotton: "30px",
        paddingLeft: "78px",
        paddingRight: "40px",
      };

  const imgStyle = tv
    ? {
        position: "absolute",
        maxWidth: "100%",
        height: "400px",
        border: 0,
        zIndex: 2,
        overflow: "hidden",
      }
    : {
        position: "absolute",
        maxWidth: "100%",
        height: "350px",
        width: "450px",
      };

  return (
    <div className="widget">
      <div style={flexStyle} className="widget__info">
        <div className="widget__content">
          <h1>{title}</h1>
          <h2>{des}</h2>
        </div>
        {imgsrc && (
          <div className="widget__tv">
            <img style={imgStyle} src={imgsrc} alt="image" />
            {videosrc && (
              <video style={videoStyle} autoPlay={true} playsInline muted loop>
                <source src={videosrc} type="video/mp4" />
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
