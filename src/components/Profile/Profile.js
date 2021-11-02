import React, { useState } from 'react';
import { firebase } from '../../firebase';

export default function Profile(props) {


  const signOut = () => {
    firebase.auth().signOut();
  }
  return (
    <div>
      <button onClick={signOut}>Log out</button>
      <button onClick={() => console.log(props)}>Props</button>
    </div>
  )
}
