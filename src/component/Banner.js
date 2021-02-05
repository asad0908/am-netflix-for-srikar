import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import axios from "../axios";
import requests from "../requests";
import Overlay from "./Overlay";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const closeOpen = () => {
    console.log("CLOSING");
    setIsOpen(false);
  };

  const setOpen = (movieName) => {
    // setSelected(movieName);
    movieTrailer(movieName)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setSelected("");
        setSelected(urlParams.get("v"));
      })
      .catch((err) => {
        setSelected("Hs-1_HNALhw");
      });
    setIsOpen(true);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const backgroundStyle = `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`;

  return (
    <>
      {isOpen && <Overlay selected={selected} close={closeOpen} />}
      <header
        style={{
          backgroundSize: "cover",
          backgroundImage: backgroundStyle,
          backgroundPosition: "top center",
        }}
        className="banner"
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              onClick={() =>
                setOpen(movie?.title || movie?.name || movie?.original_name)
              }
              className="banner__button"
            >
              Play
            </button>
            <button className="banner__button">My list</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
