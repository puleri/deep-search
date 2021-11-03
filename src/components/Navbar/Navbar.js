import React from 'react';
import { firebase } from '../../firebase';
import { Link } from 'react-router-dom';
import './Navbar.css';
import astro from './astronaut.png';
import rocket from './rocket.png';
import iss from './iss.png';
import home from './home.png'

export default function Navbar() {

    const signOut = () => {
      firebase.auth().signOut();
    }
  return (
    <div className="navbar-container">
      <Link data-testid="Link" to="/"><img id="nav-home" src={home} alt="astronaut-icon" /></Link>
      <Link data-testid="Link" to="/astronauts"><img id="nav-astro" src={astro} alt="astronaut-icon" /></Link>
      <Link data-testid="Link" to="/iss"><img id="nav-iss" src={iss} alt="iss-icon" /></Link>
      <button onClick={signOut}><img id="nav-rocket" src={rocket} alt="astronaut-icon" /></button>
    </div>
  )
}
