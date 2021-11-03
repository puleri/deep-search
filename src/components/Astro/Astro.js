import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Astro.css';

export default function Astro() {

  const [data, setData] = useState({
    message: 'pending',
    number: undefined,
    people: []
   })
   useEffect(() => {
     const url = "http://api.open-notify.org/astros.json";
     const promise = fetch(url);
     promise.then(res => {
       return res.json();
     })
      .then(data => {
        setData({
          message: data.message,
          number: data.number,
          people: data.people
        })
        ;
      })

   }, [])

   const astroData = data.people;
   const astroJSX =   astroData.map((person) => (
     <div className="list-item">
       <b>{person.name}</b> in the {person.craft} spacecraft
     </div>
   ));

  return (
    <div className="astro-container">
      <Navbar />
      <h1 id="astro-header">Astronauts in space</h1>
      <ul className="astro-list">
      {astroJSX}
      </ul>
    </div>
  )
}
