import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom'
import './Profile.css'
import { firebase } from '../../firebase';
import astro from './astronaut.png';
import rocket from './rocket.png';

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
        <img id="nav-astro" src={astro} alt="astronaut-icon" />
        <img id="nav-rocket" src={rocket} alt="astronaut-icon" />

      </div>
      <div className="content-wrapper">
        <h1 id="welcome">Hi {firstName}</h1>

        <Link data-testid="Link" to="/astronauts">Astronauts</Link>

        <button onClick={signOut}>Log out</button>
      </div>
    </div>
  )
}
