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
      <div className="nav-item">
        <Link data-testid="Link" to="/"><img id="nav-home" src={home} alt="astronaut-icon" /></Link>
        <p className="item-label">Home</p>
      </div>

      <div className="nav-item">
        <Link data-testid="Link" to="/astronauts"><img id="nav-astro" src={astro} alt="astronaut-icon" /></Link>
        <p className="item-label">Atronauts</p>
      </div>

      <div className="nav-item">
        <Link data-testid="Link" to="/iss"><img id="nav-iss" src={iss} alt="iss-icon" /></Link>
        <p className="item-label">ISS Locator</p>
      </div>

      <div className="nav-item">
        <button onClick={signOut}><img id="nav-rocket" src={rocket} alt="astronaut-icon" /></button>
        <p className="item-label">Log off</p>
      </div>
    </div>
  )
}
