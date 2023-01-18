import React from 'react'
import { Pulsar } from '@uiball/loaders'
import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <Pulsar 
      size={100}
      speed={1.75} 
      color="white" 
      />
      Cargando...
    </div>
  )
}

export default Loader