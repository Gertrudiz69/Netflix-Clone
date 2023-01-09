import axios from "./axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false, id, idArrowR, idArrowL }) => {
  const [movies, setMovies] = useState([]);
  const [displayArrL, setDisplayArrL] = useState(false)
  const [displayArrR, setDisplayArrR] = useState(true)
  const [movil, setMovil] = useState(false);
  const row = useRef(null)

  const movilBanner = () => {
    const w = window.innerWidth;

    if (w < 768) {
      setMovil(true);
    } else {
      setMovil(false);
    }
  };
  
  const displayArrow = () => {
    const row = document.querySelector("#" + id);
    const arrowLeft = document.querySelector('#'+idArrowL)
    const arrowRight = document.querySelector('#'+idArrowR)
    var currentScroll = row.scrollLeft

    if(currentScroll === 0) {
      arrowLeft.classList.add('displayNone')
      arrowLeft.classList.remove('displayIn')
      setDisplayArrL(false)
    } else {
      arrowLeft.classList.add('displayIn')
      arrowLeft.classList.remove('displayNone')
      setDisplayArrL(true)
    }
    
    if(currentScroll > 2220) {
      arrowRight.classList.add('displayNone')
      arrowRight.classList.remove('displayIn')
      setDisplayArrR(false)
    } else {
      arrowRight.classList.add('displayIn')
      arrowRight.classList.remove('displayNone')
      setDisplayArrR(true)
    }
  }

  useEffect(() => {
    row.current.addEventListener('scroll', displayArrow)
    // eslint-disable-next-line
  }, [])
  
  const img_url = "https://image.tmdb.org/t/p/original";
  
  function scrollR() {
    const row = document.querySelector("#" + id);
    const w = window.innerWidth;
    var currentScroll = row.scrollLeft;
    var scrollCount = 0;
    
    scrollCount++;
    row.scrollTo(currentScroll + (w * scrollCount), 0);
  }

  function scrollL() {
    const row = document.querySelector("#" + id);
    const w = window.innerWidth;
    var currentScroll = row.scrollLeft;
    var scrollCount = 0;

    scrollCount--;
    row.scrollTo(currentScroll + (w * scrollCount), 0);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    movilBanner()
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" id={id} ref={row}>
        {!movil ? (
          <div id={idArrowL} className="arrow__l" onClick={scrollL}>
            {displayArrL ? <IoIosArrowBack /> : null}
          </div>
        ) : null }
        {movies.map(
          (movie) =>
            (isLargeRow ? movie.poster_path : movie.backdrop_path) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${img_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.name || movie?.title || movie?.original_name}
                loading='lazy'
              />
            )
        )}
        {!movil ? (
          <div id={idArrowR} className="arrow__r" onClick={scrollR}>
            {displayArrR ? <IoIosArrowForward /> : null}
          </div>
        ) : null }
      </div>
    </div>
  );
};

export default Row;
