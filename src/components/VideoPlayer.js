import axios from '../axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'
import requests from '../Request'

function VideoPlayer({id, media_type}) {
  const [url, setUrl] = useState('')
  const [widthVideo, setWidthVideo] = useState('')
  const [heightVideo, setHeightVideo] = useState('')

  const widthDevice = () => {
    const w = window.innerWidth

    if(w >= 1440) {
      setHeightVideo('500px')
      setWidthVideo('900px')
    } else {
      setHeightVideo('360px')
      setWidthVideo('640px')
    }
  }

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(`${media_type}/${id}` + requests.fetchTrailer + "&language=es-MX")
      const backup = await axios.get(`${media_type}/${id}` + requests.fetchTrailer + "&language=en-US")

      if(request.data.results.length <= 0) {
        setUrl(backup.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ].key)
      } else {
        setUrl(request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ].key)
      }
    }

    widthDevice()
    fetchVideo()
  }, [media_type, id])

  return (
    <div className='videoPlayer'>
      <div className='videoPlayer__video'>
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${url}`}
          width={widthVideo}
          height={heightVideo}
          controls
        />
      </div>
      <div className="background__videoPlayer" />
    </div>
  )
}

export default VideoPlayer