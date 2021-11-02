import React from 'react';
import './Login.css';
import { firebase } from '../../firebase.js';



export default function Glow() {

  const signInWithFirebase = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
    return (
      <div className="glow-div">

          <button onClick={()=>signInWithFirebase()} className="homepage-link">Login</button>

      </div>
    )
  }
