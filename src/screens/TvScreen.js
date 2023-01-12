import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../Request';
import Nav from '../Nav';

function TvScreen() {
  const [tvSerie, setTvSerie] = useState([])
  const [date, setDate] = useState([])

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
      return request
    }
    fetchData()
  }, [tvSerieId])
  
  const img_url = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <Nav />
      <div className='movieScreen'>
        <div className='movieScreen__container'>
          <img src={img_url + tvSerie.poster_path} alt={tvSerie.title} />
          <div className='movieScreen__details'>
            <h1>{tvSerie.name} <span>({date})</span></h1>
            <p>{tvSerie.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TvScreen