import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { VideoPlayer } from "./components";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { GenereScreen, HomeScreen, LoginScreen, MovieScreen, ProfileScreen, SearchScreen, TvScreen, PeopleScreen } from './screens'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsuscribe
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/movies/genere/:id" element={<GenereScreen />} />
            <Route exact path="/tv/genere/:id" element={<GenereScreen />} />
            <Route exact path="/movie/:id" element={<MovieScreen />} />
            <Route exact path="/tv/:id" element={<TvScreen />} />
            <Route exact path='/search' element={<SearchScreen />} />
            <Route exact path='/people/:id' element={<PeopleScreen />} />
            <Route exact path='/video' element={<VideoPlayer />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
