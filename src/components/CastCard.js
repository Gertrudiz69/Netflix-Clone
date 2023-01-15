import React from 'react'
import './CastCard.css'

function CastCard({ cast }) {
  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="castCard__directorInfo">
      <div className="directorInfo__img" style={{
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('${img_url}${cast?.profile_path}')`,
        backgroundPosition: "center top",
      }}>
      </div>
      <span>{cast.job}: </span>
      <span>{cast.name}</span>
    </div>
  )
}

export default CastCard