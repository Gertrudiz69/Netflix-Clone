import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { Loader, Nav } from '../components'
import requests from '../Request';
import './PeopleScreen.css'

function PeopleScreen() {

  const [people, setPeople] = useState([])
  // eslint-disable-next-line
  const [proyects, setProyects] = useState([])
  const [loading, setLoading] = useState(true)

  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  const peopleId = pathnameArr[2];

  useEffect(() => {
    async function fetchPeople() {
      const request = await axios.get('/person/' + peopleId + requests.fetchByID)
      setPeople(request.data)
      setLoading(false)
      return request
    }

    async function fetchProyects() {
      const request = await axios.get('/person/' + peopleId + requests.fetchProyects)
      setProyects(request.data.cast)
      setLoading(false)
      return request
    }

    fetchProyects()
    fetchPeople()
  }, [peopleId])

  console.log(people);

  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <>
      {loading ? 
        <Loader />  
      : (
        <>
          <Nav />
          <div className='movieScreen'>
            <div className='movieScreen__container'>
              <img src={img_url + people.profile_path} alt={people.id}/>
              <div className='movieScreen__details'>
                <h1>
                  {people.name} <span>({people.birthday})</span>
                </h1>
                <h2>Biografia</h2>
                <p className='peopleScreen__bio'>{people.biography}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PeopleScreen