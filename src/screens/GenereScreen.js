import React from 'react'
import { GenereGrid, Nav } from '../components'
import requests from '../Request'
import './GenereScreen.css'

function GenereScreen() {
  var winLocPath = window.location.pathname
  var Url = ''
  var id = 0

  const urlFetch = () => {
    switch (winLocPath) {
      case '/movies/genere/28':
        Url = requests.fetchActionMovies
        id = 28
        break
      case '/movies/genere/99':
        Url = requests.fetchDocumentaries
        id = 99
        break
      case '/movies/genere/27':
        Url = requests.fetchHorrorMovies
        id = 27
        break
      case '/movies/genere/10770':
        Url = requests.fetchTVMovies
        id = 10770
        break
      case '/movies/genere/12':
        Url = requests.fetchAdventureMovies
        id = 12
        break
      case '/movies/genere/18':
        Url = requests.fetchDramaMovies
        id = 18
        break
      case '/movies/genere/10402':
        Url = requests.fetchMusicMovies
        id = 10402
        break
      case '/movies/genere/53':
        Url = requests.fetchThrillerMovies
        id = 53
        break
      case '/movies/genere/16':
        Url = requests.fetchAnimationMovies
        id = 16
        break
      case '/movies/genere/10751':
        Url = requests.fetchFamilyMovies
        id = 10751
        break
      case '/movies/genere/9648':
        Url = requests.fetchMysteryMovies
        id = 9648
        break
      case '/movies/genere/10752':
        Url = requests.fetchWarMovies
        id = 10752
        break
      case '/movies/genere/35':
        Url = requests.fetchComedyMovies
        id = 35
        break
      case '/movies/genere/14':
        Url = requests.fetchFantasyMovies
        id = 14
        break
      case '/movies/genere/10749':
        Url = requests.fetchRomanceMovies
        id = 10749
        break
      case '/movies/genere/37':
        Url = requests.fetchWesternMovies
        id = 37
        break
      case '/movies/genere/80':
        Url = requests.fetchCrimeMovies
        id = 80
        break
      case '/movies/genere/36':
        Url = requests.fetchHistoryMovies
        id = 36
        break
      case '/movies/genere/878':
        Url = requests.fetchScienceFictionMovies
        id = 878
        break
      default:
        Url = ''
        break
      } 
      return (Url, id)
  }
  urlFetch()
  return (
    <>
      <Nav />

      <GenereGrid fetchUrl={Url} idUrl={id}/>
    </>
  )
}

export default GenereScreen