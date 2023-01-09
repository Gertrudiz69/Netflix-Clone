import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Grid.css";

function Grid({ fetchUrl }) {
  const [movieGrid, setMovieGrid] = useState([]);
  const [movil, setMovil] = useState(false);

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
      const request = await axios.get(fetchUrl);
      setMovieGrid(request.data.results);
      return request;
    }
    movilBanner();
    fetchData();
  }, [fetchUrl]);

  const img_url = "https://image.tmdb.org/t/p/original";

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return (
    <div className="grid">
      {movieGrid.map((movie) => (
        <div className="grid__component" key={movie.id}>
          <img
            loading="lazy"
            src={
              movil
                ? img_url + movie?.poster_path
                : img_url + movie?.backdrop_path
            }
            alt={movie.title}
          />
          {movil ? null : (
            <div className="grid__details">
              <h1>{truncate(movie.title, 35)}</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Grid;
