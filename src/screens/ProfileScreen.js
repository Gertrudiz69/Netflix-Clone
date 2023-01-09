import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  // eslint-disable-next-line
  const [profile, setProfile] = useState(true)


  return (
    <div className='profileScreen'>
      <Nav isProfile={profile}/>
      <div className='profileScreen__body'>
        <h1>
          <BsArrowLeftShort onClick={() => navigate('/')} />
          Editar Perfil
        </h1>
        <div className='profileScreen__info'>
          <img
            className=''
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <button className='profileScreen__signOut' onClick={() => auth.signOut()}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen