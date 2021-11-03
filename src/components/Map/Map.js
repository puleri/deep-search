import React, { useEffect, useState, useCallback } from 'react'
import icon from './iss.png';
import './Map.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '400px',
  borderRadius: "14px"
};


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = useState(null)

  useEffect(() => {

  }, [])

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }
  const propData = props.data.iss_position
  const latitude = parseFloat(roundToTwo(propData.latitude))
  const longitude = parseFloat(roundToTwo(propData.longitude))
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
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={1}
        >
        <img
        lat={latitude}
        lng={longitude}
        id="icon" src={icon} alt="ISS" />
      </GoogleMap>

    </div>
  ) : (
    <>
    </>
  )
}
