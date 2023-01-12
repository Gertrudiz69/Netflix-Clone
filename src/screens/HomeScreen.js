import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row
        title='ORIGINALES DE NETFLIX'
        id = 'originales'
        idArrowR='arrowOriginalesR'
        idArrowL='arrowOriginalesL'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        isTvSeries = {true}
      />
      <Row 
        title='En tendencias'
        id = 'tendencias'
        idArrowR='arrowTendenciasR'
        idArrowL='arrowTendenciasL'
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row 
        title='Mas valoradas'
        id= 'valoradas'
        idArrowR='arrowValoradasR'
        idArrowL='arrowValoradasL'
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row 
        title='Acción'
        id= 'accion'
        idArrowR='arrowAccionR'
        idArrowL='arrowAccionL'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row 
        title='Comedia'
        id= 'comedia'
        idArrowR='arrowComediaR'
        idArrowL='arrowComediaL'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row 
        title='Horror'
        id= 'horror'
        idArrowR='arrowHorrorR'
        idArrowL='arrowHorrorL'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row 
        title='Romance'
        id= 'romance'
        idArrowR='arrowRomanceR'
        idArrowL='arrowRomanceL'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row 
        title='Documentales'
        id= 'documentales'
        idArrowR='arrowDocumentalesR'
        idArrowL='arrowDocumentalesL'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      
    </div>
  )
}

export default HomeScreen