import React, { useState, useEffect } from 'react';

export default function Astro() {

  const [astronauts, setAstronauts] = useState({
    message: 'pending',
    number: undefined,
    people: [{
      craft: '',
      name: ''
    }]
   })
   useEffect(() => {
     const url = "http://api.open-notify.org/astros.json";
     const promise = fetch(url);
     promise.then(res => {
       return res.json();
     })
      .then(data => {
        console.log(data);
      })

   }, [])

  return (
    <div>
      Astro
    </div>
  )
}
