import React from "react"
import { useParams } from "react-router"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

function MapComponent(props) {
  console.log(props.maps)
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.921879, lng: -87.652496 }}>
      <Marker position={{ lat: 41.921879, lng: -87.652496 }} />
    </GoogleMap>
  )
}

export default MapComponent
