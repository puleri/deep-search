import React, { useState, useEffect } from 'react';

export default function ISS() {

  const [data, setData] = useState({
    message: 'pending',
    timestamp: undefined,
    iss_position: {},
   })

   useEffect(() => {
     const url = "http://api.open-notify.org/iss-now.json";
     const promise = fetch(url);
     promise.then(res => {
       return res.json();
     })
      .then(data => {
        setData({
          message: data.message,
          timestamp: data.timestamp,
          iss_position: data.iss_position
        })
        ;
      })
   }, [])

   const issData = data.iss_position;

  return (
    <div>
      <button onClick={()=> console.log(issData)}>Log</button>
      ISS
    </div>
  )
}
