import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './GenereGrid.css'
import { Grid, Loader } from './'
import { IoIosArrowForward } from 'react-icons/io'

function GenereGrid({ fetchUrl, idUrl, fetchGenre, media }) {
  const [movieBanner, setMovieBanner] = useState([])
  const [movil, setMovil] = useState(false);
  const [genere, setGenere] = useState([])
  const [loading, setLoading] = useState(true)

  var med = ''
  
  if(media === 'tv') {
    med = 'Series'
  } else {
    med = 'Péliculas'
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
    async function fetchGenere() {
      const request = await axios.get(fetchGenre);
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
      setLoading(false)
      return request;
    }
    fetchGenere()
    movilBanner();
    fetchData();
  }, [fetchGenre, idUrl, fetchUrl]);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <header
            className="banner"
            style={{
              backgroundSize: `${movil ? "100vw auto" : "cover"}`,
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('https://image.tmdb.org/t/p/original${
                movil ? movieBanner?.poster_path : movieBanner?.backdrop_path
              }')`,
              backgroundPosition: `${movil ? 'center top' : 'center center'}`,
            }}
          >
            <div className="banner--fadeBottom" />
          </header>
          <div className='genereGrid'>
            <div className='genereGrid__info'>
              <span>{med} <IoIosArrowForward /></span>
              <h1 className='genereGrid__title'>{genere.name}</h1>
            </div>

            <Grid fetchUrl={fetchUrl} media={media} />
          </div>
        </>
      )}
    </>
  )
}

export default GenereGrid