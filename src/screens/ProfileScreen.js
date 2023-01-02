import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'

const ProfileScreen = () => {
  const user = useSelector(selectUser)



  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Editar Perfil</h1>
        <div className='profileScreen__info'>
          <img
            className=''
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Planes</h3>

              <button className='profileScreen__signOut' onClick={() => auth.signOut()}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen