import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.js';
import { Link, Router } from 'react-router-dom'
import './Profile.css'
import { firebase } from '../../firebase';

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



  const fullName = currentUser.username
  const firstName = fullName.substr(0, fullName.indexOf(' '));

  return (
    <div className="profile-container">

      <Navbar />

      <div className="content-wrapper">
        <h1 id="welcome">Hi {firstName}</h1>
      </div>
    </div>
  )
}
