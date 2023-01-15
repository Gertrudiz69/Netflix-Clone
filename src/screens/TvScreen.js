import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../Request';
import { Nav, Rating, Loader } from '../components';
import './TvScreen.css'

function TvScreen() {
  const [tvSerie, setTvSerie] = useState([])
  const [date, setDate] = useState([])
  const [cast, setCast] = useState([])
  // eslint-disable-next-line
  const [dir, setDir] = useState("");
  const [loading, setLoading] = useState(true)

  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  const tvSerieId = pathnameArr[2];
  
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/tv/' + tvSerieId + requests.fetchByID)
      setTvSerie(request.data)
      const dateTvSerieFirst = request.data.first_air_date
      const dateTvSerieLast = request.data.last_air_date
      const dateTvSerieFirstArr = dateTvSerieFirst.split('-')
      const dateTvSerieLastArr = dateTvSerieLast.split('-')
      const dateFirst = dateTvSerieFirstArr[0]
      const dateLast = dateTvSerieLastArr[0]
      const date = () => {
        if(dateFirst === dateLast){
          return dateFirst
        } else {
          return dateFirst + '-' + dateLast
        }
      }
      setDate(date())
      setLoading(false)
      return request
    }
    fetchData()
  }, [tvSerieId])

  useEffect(() => {
    async function fetchCast() {
      const request = await axios.get("/tv/" + tvSerieId + requests.fetchCast);
      setCast(request.data.cast.filter((cast) => cast.profile_path));
      const dirFil = await request.data.crew.filter(
        (dir) => dir.job === "Director"
      );
      setDir(dirFil[0]);
      setLoading(false);
      return { request, dirFil };
    }

    fetchCast();
  }, [tvSerieId]);
  
  const img_url = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Nav />
          <div className='movieScreen'>
            <div className='movieScreen__container'>
              <img src={img_url + tvSerie.poster_path} alt={tvSerie.title} />
              <div className='movieScreen__details'>
                <h1>{tvSerie.name} <span>({date})</span></h1>
                <p>{tvSerie.overview}</p>
                <div className='tvScreen__info'>
                  <Rating ratingNum={(tvSerie.vote_average)/10} />
                  <div className="cast__carousel">
                    {cast.map((cast) => (
                      <div className="castCard" key={cast.name}>
                        <img
                          loading="lazy"
                          src={img_url + cast.profile_path}
                          alt={cast.name}
                        />
                        <h2>{cast.name}</h2>
                        <span>{cast.character}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default TvScreen