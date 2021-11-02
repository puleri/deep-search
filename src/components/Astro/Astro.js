import React, { useState, useEffect } from 'react';

export default function Astro() {

  const [astronauts, setAstronauts] = useState({
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
        setAstronauts({
          message: data.message,
          number: data.number,
          people: data.people
        })
        ;
      })

   }, [])

  return (
    <div>
      Astro
      <button onClick={() => console.log(astronauts)}>Log</button>
    </div>
  )
}
