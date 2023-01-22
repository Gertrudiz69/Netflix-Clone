import React from 'react'
import { GenereGrid, Nav } from '../components'
import requests from '../Request'
import './GenereScreen.css'

function GenereScreen() {
  var winLocPath = window.location.pathname
  var genreUrl = ''
  var media = ''
  var Url = ''
  var id = 0

  const pathnameArr = winLocPath.split('/')
  const mediaType = pathnameArr[1] 

  if(mediaType === 'tv') {
    genreUrl = requests.fetchGenereSerie
    media = 'tv'
  } else {
    genreUrl = requests.fetchGenereMovies
    media = 'movie'
  }

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
      case '/tv/genere/10759':
        Url = requests.fetchActionTv
        id = 10759
        break
      case '/tv/genere/16':
        Url = requests.fetchAnimationTv
        id = 16
        break
      case '/tv/genere/35':
        Url = requests.fetchComedyTv
        id = 35
        break
      case '/tv/genere/80':
        Url = requests.fetchCrimeTv
        id = 80
        break
      case '/tv/genere/99':
        Url = requests.fetchDocumentariesTv
        id = 99
        break
      case '/tv/genere/18':
        Url = requests.fetchDramaTv
        id = 18
        break
      case '/tv/genere/10751':
        Url = requests.fetchFamilyTv
        id = 10751
        break
      case '/tv/genere/10762':
        Url = requests.fetchKidsTv
        id = 10762
        break
      case '/tv/genere/9648':
        Url = requests.fetchMysteryTv
        id = 9648
        break
      case '/tv/genere/10763':
        Url = requests.fetchNewsTv
        id = 10763
        break
      case '/tv/genere/10764':
        Url = requests.fetchRealityTv
        id = 10764
        break
      case '/tv/genere/10765':
        Url = requests.fetchSciFiTv
        id = 10765
        break
      case '/tv/genere/10766':
        Url = requests.fetchSoapTv
        id = 10766
        break
      case '/tv/genere/10767':
        Url = requests.fetchTalkTv
        id = 10767
        break
      case '/tv/genere/10768':
        Url = requests.fetchWarTv
        id = 10768
        break
      case '/tv/genere/37':
        Url = requests.fetchWesternTv
        id = 37
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

      <GenereGrid fetchUrl={Url} idUrl={id} fetchGenre={genreUrl} media={media}/>
    </>
  )
}

export default GenereScreen