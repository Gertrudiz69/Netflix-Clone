import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./Nav.css";
import axios from "../axios";
import requests from "../Request";

function Nav({ isProfile }) {
  const [show, setShow] = useState(false)
  const [genere, setGenere] = useState([])

  const navigate = useNavigate()
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchGenereMovies);
      setGenere(request.data.genres);
      return request;
    }   
    
    window.addEventListener('scroll', transitionNavBar)
    
    fetchData()
  }, [])


  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <div className="nav__details">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            alt="Netflix Logo"
            onClick={() => {
              window.scrollTo(0,0)
              navigate('/')
            }}
          />
          {isProfile ? null : (<div className="nav__links">
            <Link onClick={() => window.scrollTo(0,0)}>Inicio</Link>
            <div className="nav__dropdown">
              <button className="nav__dropdownButton">Géneros <IoIosArrowForward /></button>
              <div className="nav__dropdownLinks">
                {genere.map(type => (
                    <a href={`/movies/genere/${type.id}`} key={type.id}>{type.name}</a>
                  )
                )}
              </div>
            </div>
          </div>)}
        </div>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          onClick={() => navigate('/profile')}
        />
      </div>
    </div>
  );
}

export default Nav;
