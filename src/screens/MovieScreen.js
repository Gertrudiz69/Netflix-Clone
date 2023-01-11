import React, { useEffect, useState } from 'react'
import './MovieScreen.css'
import Nav from '../Nav'
import axios from '../axios';
import requests from '../Request';

function MovieScreen() {
  const [movie, setMovie] = useState([])
  const [date, setDate] = useState([])

  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  const movieId = pathnameArr[2];
  
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/movie/' + movieId + requests.fetchMovieID)
      setMovie(request.data)
      const dateMovie = request.data.release_date
      const dateMovieArr = dateMovie.split('-')
      const date = dateMovieArr[0]
      setDate(date)
      return request
    }
    fetchData()
  }, [movieId])
  
  const img_url = "https://image.tmdb.org/t/p/original";

  console.log(movie);

  return (
    <>
      <Nav />
      <div className='movieScreen'>
        <div className='movieScreen__container'>
          <img src={img_url + movie.poster_path} alt={movie.title} />
          <div className='movieScreen__details'>
            <h1>{movie.title} <span>({date})</span></h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieScreen