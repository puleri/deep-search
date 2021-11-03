import React from 'react';
import './Login.css';
import google from './google.png';
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

          <button data-testid="Button" onClick={()=>signInWithFirebase()} className="homepage-link"><img id="google" alt="google-icon" src={google} />Login with Google</button>

      </div>
    )
  }
