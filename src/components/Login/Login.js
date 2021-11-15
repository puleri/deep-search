import React, { useState } from 'react';
import Glow from './Glow.js'

export default function Login() {

  return (
    <div data-testid="Login" className="login-container">
      <div className="header-wrapper">
        <p data-testid="subheader" id="landing-pre">Videologic presents...</p>
        <h1 data-testid="header" id="landing-heading">Deep Search</h1>
        <p id="landing-sub">(Space edition)</p>
      </div>

      <Glow/>

    </div>
  )
}
