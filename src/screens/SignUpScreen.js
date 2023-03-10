import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { RxCrossCircled } from 'react-icons/rx'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpScreen() {
  const [signUp, setSignUp] = useState(false);
  const [checkLength, setCheckLength] = useState(false);
  const [checkEqual, setCheckEqual] = useState(false);
  const [checkCapital, setCheckCapital] = useState(false);
  const [checkLetter, setCheckLetter] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkSpecial, setCheckSpecial] = useState(false);
  const [visiblePass, setVisiblePass] = useState(false)
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const showPass = () => {
    passwordRef.current.type = 'text'
    setVisiblePass(true)
  } 
  const showPass1 = () => {
    const pass1 = document.querySelector("#pass-1");
    const pass2 = document.querySelector("#pass-2");
    pass1.type = 'text'
    pass2.type = 'text'
    setVisiblePass(true)
  }

  const hidePass = () => {
    passwordRef.current.type = 'password'
    setVisiblePass(false)
  } 
  const hidePass1 = () => {
    const pass1 = document.querySelector("#pass-1");
    const pass2 = document.querySelector("#pass-2");
    pass1.type = 'password'
    pass2.type = 'password'
    setVisiblePass(false)
  }

  function valid() {
    const pass1 = document.querySelector("#pass-1");
    const pass2 = document.querySelector("#pass-2");
    const len = document.querySelector("#length");
    const equal = document.querySelector("#equal");
    const capital = document.querySelector("#capital");
    const letter = document.querySelector("#letter");
    const num = document.querySelector("#number");
    const special = document.querySelector("#special");

    if (pass1.value.length >= 8) {
      len.classList.add("correct");
      len.classList.remove("error");
      setCheckLength(true);
    } else {
      len.classList.remove("correct");
      len.classList.add("error");
      setCheckLength(false);
    }

    if (pass1.value === pass2.value && pass1.value.length > 0) {
      equal.classList.add("correct");
      equal.classList.remove("error");
      setCheckEqual(true);
    } else {
      equal.classList.remove("correct");
      equal.classList.add("error");
      setCheckEqual(false);
    }

    if (/[A-Z]/.test(pass1.value)) {
      capital.classList.add("correct");
      capital.classList.remove("error");
      setCheckCapital(true);
    } else {
      capital.classList.remove("correct");
      capital.classList.add("error");
      setCheckCapital(false);
    }

    if (/[a-z]/.test(pass1.value)) {
      letter.classList.add("correct");
      letter.classList.remove("error");
      setCheckLetter(true);
    } else {
      letter.classList.remove("correct");
      letter.classList.add("error");
      setCheckLetter(false);
    }

    if (/[0-9]/.test(pass1.value)) {
      num.classList.add("correct");
      num.classList.remove("error");
      setCheckNumber(true);
    } else {
      num.classList.remove("correct");
      num.classList.add("error");
      setCheckNumber(false);
    }

    if (/[^a-zA-Z0-9]/.test(pass1.value)) {
      special.classList.add("correct");
      special.classList.remove("error");
      setCheckSpecial(true);
    } else {
      special.classList.remove("correct");
      special.classList.add("error");
      setCheckSpecial(false);
    }
  }
  if (signUp === true) {
    window.addEventListener("input", valid);
  }

  const errWindow = useRef(null)
  const errAlert = useRef(null)

  const errorAlert = (error) => {
    
    errAlert.current.style.display= 'block'

    const errorMessages = {
      "auth/invalid-email": "La direcci??n de correo electr??nico no es v??lida",
      "auth/user-not-found":
        "No se ha encontrado ning??n usuario con esa direcci??n de correo electr??nico",
      "auth/wrong-password": "La contrase??a es incorrecta",
      "auth/email-already-in-use":
        "La direcci??n de correo electr??nico ya est?? en uso por otro usuario",
      "auth/weak-password": "La contrase??a es demasiado d??bil",
      "auth/too-many-requests": "Demasiados intentos fallidos, intentalo en unos minutos",
      "auth/internal-error": "Error interno, intentalo de nuevo"
    };

    errWindow.current.innerText =
      errorMessages[error.code] || "Error desconocido, intentalo en un rato.";
  };


  const validate = () => {
    const pass1 = document.querySelector("#pass-1");
    const pass2 = document.querySelector("#pass-2");
    const passVer = document.querySelector("#pass-ver");

    if (pass1.value === pass2.value && pass1.value.length >= 8) {
      passVer.value = pass1.value;
      return true;
    } else {
      return false;
    }
  };

  const reg = (e) => {
    e.preventDefault();
    validate();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        errorAlert(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        errorAlert(error);
      });
  };

  return (
    <>
      <div className="error__alert" id="error__alert" ref={errAlert}>
        <div className="error__details">
          <RxCrossCircled />
          <div className="error--window" id="error--window" ref={errWindow}></div>
          <button id="closeAlert" onClick={() => errAlert.current.style.display= 'none'}>
            Cerrar
          </button>
        </div>
      </div>

      <div className="signUpScreen">
        {!signUp ? (
          <form>
            <h1>
              <BsArrowLeftShort onClick={() => document.location.reload()} />
              Inicia Sesi??n
            </h1>
            <input
              ref={emailRef}
              placeholder="Email"
              type="email"
              autoComplete="username"
            />
            <div className="input__password">
              <input
                ref={passwordRef}
                placeholder="Contrase??a"
                type="password"
                autoComplete="current-password"
              />
              {visiblePass ? <span onClick={() => hidePass()}><AiFillEye/></span> : <span onClick={() => showPass()}><AiFillEyeInvisible/></span>}
            </div>
            <button type="submit" onClick={signIn}>
              Inicia Sesi??n
            </button>

            <h4>
              <span className="signUpScreen__gray">??Nuevo en Netflix? </span>
              <span
                className="signUpScreen__link"
                onClick={() => setSignUp(true)}
              >
                Registrate ahora.
              </span>
            </h4>
          </form>
        ) : (
          <form>
            <h1>
              <BsArrowLeftShort onClick={() => document.location.reload()} />
              Registrate
            </h1>
            <input
              ref={emailRef}
              placeholder="Email"
              type="email"
              autoComplete="username"
              required
            />
            <div className="input__password">
              <input
                id="pass-1"
                placeholder="Nueva contrase??a"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
              />
              {visiblePass ? <span onClick={() => hidePass1()}><AiFillEye/></span> : <span onClick={() => showPass1()}><AiFillEyeInvisible/></span>}
            </div>
            <div className="input__password">
              <input
                id="pass-2"
                placeholder="Nueva contrase??a"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
              />
              {visiblePass ? <span onClick={() => hidePass1()}><AiFillEye/></span> : <span onClick={() => showPass1()}><AiFillEyeInvisible/></span>}
            </div>
            <input hidden id="pass-ver" type="password" ref={passwordRef} />
            <div className="password__req">
              <ul>
                <li id="length" className="error">
                  {checkLength ? <FaCheck /> : <ImCross />}{" "}
                  <span>Minimo 8 caracteres</span>
                </li>
                <li id="equal" className="error">
                  {checkEqual ? <FaCheck /> : <ImCross />}{" "}
                  <span>Deben coincidir</span>
                </li>
                <li id="capital" className="error">
                  {checkCapital ? <FaCheck /> : <ImCross />}{" "}
                  <span>Una letra en mayuscula</span>
                </li>
                <li id="letter" className="error">
                  {checkLetter ? <FaCheck /> : <ImCross />}{" "}
                  <span>Una letra en minuscula</span>
                </li>
                <li id="number" className="error">
                  {checkNumber ? <FaCheck /> : <ImCross />}{" "}
                  <span>Un n??mero</span>
                </li>
                <li id="special" className="error">
                  {checkSpecial ? <FaCheck /> : <ImCross />}{" "}
                  <span>Un caracter especial</span>
                </li>
              </ul>
            </div>
            <button type="submit" onClick={reg}>
              Registrate
            </button>

            <h4>
              <span className="signUpScreen__gray">
                ??Ya tienes una cuenta?{" "}
              </span>
              <span
                className="signUpScreen__link"
                onClick={() => setSignUp(false)}
              >
                Inicia Sesi??n
              </span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
}

export default SignUpScreen;
