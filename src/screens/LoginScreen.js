import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

  const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt='Netflix Logo' onClick={() => setSignIn(false)} />
        <button className='loginScreen__button' onClick={() => setSignIn(true)}>
          Inicia Sesión
        </button>

        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
        {signIn ? (
            <SignUpScreen />
        ) : (
          <>
            <h1>Películas y series ilimitadas y mucho más</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
            <div className='loginScreen__input'>
              <form>
                <input type='email' placeholder='Email'/>
                <button className='loginScreen__registrate' onClick={() => setSignIn(true)}>
                  Registrate
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen