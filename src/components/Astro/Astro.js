import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Astro.css';

export default function Astro() {
  // Hook is used to handle state of the API call
  const [data, setData] = useState({
    message: 'pending',
    number: undefined,
    people: []
  });

  // Hook used to do something only on page load
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
      })
      .catch(err => console.err)
      // CONSOLE.LOG LOAD
      console.log("page is loaded")
   }, []);

   const astroData = data.people;
   const astroJSX =   astroData.map((person, i) => (
     <div key={i} className="list-item">
       <b>{person.name}</b> in the {person.craft} spacecraft
     </div>
   ));

   // CONSOLE.LOG VARIABLE
   // console.log("astro data is ", astroData)

  return (
    <div className="astro-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 id="astro-header">Astronauts in space</h1>
        <ul className="astro-list">
        {data.message === "pending" ? 'Loading...' : astroJSX}
        </ul>
      </div>
    </div>
  )
}
