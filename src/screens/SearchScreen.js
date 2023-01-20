import axios from '../axios'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Nav } from '../components'
import './SearchScreen.css'
import requests from '../Request'
import { useNavigate } from 'react-router-dom'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(1)
  const [loadMore, setLoadMore] = useState(false)
  const [searchRes, setSearchRes] = useState([])

  const navigate = useNavigate()


  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    setOffset(1)
    try {
      const request = await axios.get(requests.fetchSearch + `&query=${searchTerm}&page=${offset}`)
      const filterRes = request.data.results.filter((item) => (item.media_type === 'tv' || item.media_type === 'movie') && item.poster_path)
      setSearchRes(filterRes)
      if(filterRes.lenght < 20){
        setLoadMore(false)
      } else {
        setLoadMore(true)
      }
      return request
    } catch(error) {
      console.error(error);
    }
  }

  const handleNextPage = async () => {
    try {
      setOffset(offset + 1 );
      const request = await axios.get(requests.fetchSearch + `&query=${searchTerm}&page=${offset}`)
      const filterRes = request.data.results.filter((item) => (item.media_type === 'tv'  || item.media_type === 'movie') && item.poster_path)
      const uniqueResults = filterRes.filter(result => !searchRes.some(prevResult => prevResult.id === result.id))
      setSearchRes([...searchRes, ...uniqueResults])
      return request
    } catch(error) {
      console.error(error);
    }
  }
  
  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Nav />
      <div className='searchScreen'>
        <form onSubmit={handleSubmit} className='searchScreen__form'>
          <input type='text' value={searchTerm} onChange={handleChange}/>
          <button type='submit'>
            <BiSearchAlt />
          </button>
        </form>
        <div className='searchScreen__grid'>
          {searchRes.map(item => (
            <div className='searchScreen__card' key={item.id} onClick={() => navigate(`/${item.media_type}/${item.id}`)}>
              <img loading='lazy' src={img_url + item.poster_path} alt={item.name} />
            </div>
          ))}
        </div>
        {loadMore ? (
          <button className='searchScreen__loadMore' onClick={handleNextPage}>Cargar mas</button>
        ) : null}
      </div>

    </>
  )
}

export default SearchScreen