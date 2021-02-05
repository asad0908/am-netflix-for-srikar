import React from "react";
import "../../css/Dashboard/Dashboard.css";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Widget from "./Widget";
import WidgetRev from "./WidgetRev";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Widget
        title="Enjoy on your TV."
        des="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
      players and more."
        tv
        imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        videosrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
      />
      <WidgetRev />
      <Widget
        title="Watch everywhere."
        des="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        videosrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
      />
      <FAQ />
      <Footer mode="dark" />
    </div>
  );
};

export default Dashboard;
