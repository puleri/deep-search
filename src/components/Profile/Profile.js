import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom'
import './Profile.css'
import { firebase } from '../../firebase';
import astro from './astronaut.png';
import rocket from './rocket.png';
import iss from './iss.png';

export default function Profile() {

  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: ''
  })

  useEffect(() => {
    const user = firebase.auth().currentUser
    setCurrentUser({
      username: user.displayName,
      email: user.email
    })
  }, [])

  const signOut = () => {
    firebase.auth().signOut();
  }

  const fullName = currentUser.username
  const firstName = fullName.substr(0, fullName.indexOf(' '));

  return (
    <div className="profile-container">

      <div className="navbar-container">
        <Link data-testid="Link" to="/astronauts"><img id="nav-astro" src={astro} alt="astronaut-icon" /></Link>
        <Link data-testid="Link" to="/iss"><img id="nav-iss" src={iss} alt="iss-icon" /></Link>
        <button onClick={signOut}><img id="nav-rocket" src={rocket} alt="astronaut-icon" /></button>
      </div>

      <div className="content-wrapper">
        <h1 id="welcome">Hi {firstName}</h1>
      </div>
    </div>
  )
}
