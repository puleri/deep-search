import React, { useState, useEffect } from 'react';
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

  const signOut = () => {
    firebase.auth().signOut();
  }
  const fullName = currentUser.username
  const firstName = fullName.substr(0, fullName.indexOf(' '));
  return (
    <div className="profile-container">
      <h1 id="welcome">Hi {firstName}</h1>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}
