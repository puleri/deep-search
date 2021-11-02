import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login/Login.js";
import Astro from "./components/Astro/Astro.js";
import Profile from "./components/Profile/Profile.js";
import ISS from "./components/ISS/ISS.js";
import React, { useState, useEffect } from 'react';

import {firebase} from './firebase';

export default function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState
  ({
    username: '',
    email: ''
  })

  firebase.auth().onAuthStateChanged((user) => {
    if(user){

      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  })

  if (isUserSignedIn) {
    return (
      <div className="App">
              <Route
              exact
              path="/"
              component={Profile}
              currentUser={currentUser}
              />


              <Route
              path="/astronaut"
              component={Astro}
              />



              <Route
              path="/ISS"
              component={ISS}
              />
        </div>
    )
  } else {
    return (
      <Route
      path="/"
      component={Login}
      currentUser={currentUser}
      />

    )
  }
}
