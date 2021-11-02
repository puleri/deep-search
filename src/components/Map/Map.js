import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './Map.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '400px',
  borderRadius: "2px"
};


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = useState(null)

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }
  const propData = props.data.iss_position
  const latitude = roundToTwo(propData.latitude)
  const longitude = roundToTwo(propData.longitude)
  const center = {
    lat: latitude,
    lng: longitude
  };



  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={0}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        <img id="icon" src={icon} alt="ISS" />
      </GoogleMap>
      <button onClick={() => console.log(API_KEY)}>Props</button>



    </div>
  ) : (
    <>
    <button onClick={() => console.log(API_KEY)}>Props</button>
    </>
  )
}
