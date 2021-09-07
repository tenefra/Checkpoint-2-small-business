import React from "react"
import { GoogleMap, Marker } from "react-google-maps"

function AddListingMapComponent(props) {
  const { lat, lng } = props.maps
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: lat, lng: lng }}>
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  )
}

export default AddListingMapComponent
