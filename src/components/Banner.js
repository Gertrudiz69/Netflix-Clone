import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../Request";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [movil, setMovil] = useState(false);
  const navigate = useNavigate()

  const movilBanner = () => {
    const w = window.innerWidth;

    if (w <= 768) {
      setMovil(true);
    } else {
      setMovil(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results.filter(movie => movie?.backdrop_path && movie?.poster_path)[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    movilBanner();
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: `${movil ? "100vw auto" : "cover"}`,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${
          movil ? movie?.poster_path : movie?.backdrop_path
        }')`,
        backgroundPosition: "center center",
      }}
    >
      {!movil ? (
        <>
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button" onClick={() => navigate(`/tv/${movie.id}`)}>Ver</button>
            </div>
            <h1 className="banner__description">
              {truncate(`${movie?.overview}`, 200)}
            </h1>
          </div>
        </>
      ) : null}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
