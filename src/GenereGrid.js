import axios from './axios';
import React, { useEffect, useState } from 'react'
import './GenereGrid.css'
import requests from './Request';
import Grid from './Grid';
import { IoIosArrowForward } from 'react-icons/io'

function GenereGrid({ fetchUrl, idUrl }) {
  const [movieBanner, setMovieBanner] = useState([])
  const [movil, setMovil] = useState(false);
  const [genere, setGenere] = useState([])

  const movilBanner = () => {
    const w = window.innerWidth;

    if (w < 768) {
      setMovil(true);
    } else {
      setMovil(false);
    }
  };
  
  useEffect(() => {
    async function fetchGenere() {
      const request = await axios.get(requests.fetchGenereMovies);
      setGenere(request.data.genres.find(genere => genere.id === idUrl))
      return request
    }
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovieBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchGenere()
    movilBanner();
    fetchData();
  }, [fetchUrl, idUrl]);

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: `${movil ? "100vw auto" : "cover"}`,
          backgroundRepeat: "no-repeat",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${
            movil ? movieBanner?.poster_path : movieBanner?.backdrop_path
          }')`,
          backgroundPosition: `${movil ? 'center top' : 'center top'}`,
        }}
      >
        <div className="banner--fadeBottom" />
      </header>
      <div className='genereGrid'>
        <div className='genereGrid__info'>
          <span>Péliculas <IoIosArrowForward /></span>
          <h1 className='genereGrid__title'>{genere.name}</h1>
        </div>

        <Grid fetchUrl={fetchUrl} />
      </div>
    </>
  )
}

export default GenereGrid