import React, { useEffect, useState } from "react";
import "./MovieScreen.css";
import { Nav, Rating, Loader } from "../components";
import axios from "../axios";
import requests from "../Request";

function MovieScreen() {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  const movieId = pathnameArr[2];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/movie/" + movieId + requests.fetchByID);
      setMovie(request.data);
      const dateMovie = request.data.release_date;
      const dateMovieArr = dateMovie.split("-");
      const date = dateMovieArr[0];
      setDate(date);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [movieId]);

  useEffect(() => {
    async function fetchCast() {
      const request = await axios.get("/movie/" + movieId + requests.fetchCast);
      setCast(request.data.cast);
      setLoading(false)
      return request;
    }

    fetchCast();
  }, [movieId]);

  console.log(cast);

  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div className="movieScreen">
            <div className="movieScreen__container">
              <img src={img_url + movie.poster_path} alt={movie.title} />
              <div className="movieScreen__details">
                <h1>
                  {movie.title} <span>({date})</span>
                </h1>
                <p>{movie.overview}</p>
                <Rating ratingNum={movie.vote_average / 10} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MovieScreen;
