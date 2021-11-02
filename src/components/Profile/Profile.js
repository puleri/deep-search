import React, { useState } from 'react';
import { firebase } from '../../firebase';

export default function Profile() {

  const signOut = () => {
    firebase.auth().signOut();
  }
  
  return (
    <div>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}
