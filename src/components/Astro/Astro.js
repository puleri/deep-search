import React, { useState, useEffect } from 'react';

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
     <div>
       {person.craft},
       {person.name}
     </div>
   ));

  return (
    <div>
      <ul>
      {astroJSX}
      </ul>
      Astro
      <button onClick={() => console.log(data)}>Log</button>
    </div>
  )
}
