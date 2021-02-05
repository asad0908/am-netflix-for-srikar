import React from "react";
import "../../css/Dashboard/WidgetRev.css";

const WidgetRev = () => {
  return (
    <div className="widget">
      <div className="widget__info">
        <div className="widget__content">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
        <div className="widget__tv">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="image"
          />
          <div className="widget__animation">
            <div className="widget__animation--image">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
            </div>
            <div className="widget__animation--text">
              <div className="text0">Stranger Things</div>
              <div className="text1">Downloading...</div>
            </div>
            ::after
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetRev;
