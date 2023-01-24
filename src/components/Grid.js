import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Grid.css";
import { BiInfoCircle } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";

function Grid({ fetchUrl, media }) {
  const [movieGrid, setMovieGrid] = useState([]);
  const [movil, setMovil] = useState(false);
  const [offset, setOffset] = useState(2)
  const [mediaType, setMediaType] = useState()

  const navigate = useNavigate()

  const genreType = () => {
    if(media === 'tv') {
      setMediaType(true)
    } else {
      setMediaType(false)
    }
  }

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
      setMovieGrid(request.data.results.filter(movie => movie.backdrop_path && movie.poster_path));
      return request;
    }

    genreType()
    movilBanner();
    fetchData();
    // eslint-disable-next-line
  }, [fetchUrl]);

  const handleNextPage = async () => {
    try {
      setOffset(offset => offset + 1)
      const request = await axios.get(fetchUrl + `&page=${offset}`)
      const results = request.data.results
      const uniqueResults = results.filter(result => !movieGrid.some(prevResult => prevResult.id === result.id))
      setMovieGrid([...movieGrid, ...uniqueResults])
    } catch(error) {
      console.error(error);
    }
  }

  const img_url = "https://image.tmdb.org/t/p/original";

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return (
    <>
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
              alt={mediaType ? movie?.name : movie?.title}
              onClick={() => navigate(mediaType ? `/tv/${movie.id}` :`/movie/${movie.id}`)}
            />
            {movil ? null : (
              <div className="grid__details">
                <h1>{truncate((mediaType ? movie?.name : movie?.title), 35)}</h1>
                <Link to={mediaType ? `/tv/${movie.id}` : `/movie/${movie.id}`} ><BiInfoCircle /></Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='searchScreen__loadMore' onClick={handleNextPage}>Cargar mas</button>
    </>
  );
}

export default Grid;
