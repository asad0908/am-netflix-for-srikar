import React from "react";
import "../css/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginal}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
