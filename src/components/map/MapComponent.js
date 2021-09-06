import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

function MapComponent(props) {
  const { lat, lng } = props.maps[0]
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: lat, lng: lng }}>
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  )
}

export default MapComponent
