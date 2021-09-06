import React from "react"
import { useParams } from "react-router"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

const WrappedMap = withScriptjs(withGoogleMap(MapComponent))
const apiKey = "AIzaSyBEpQHHHkZyoFBQ78flP7iDmhdCEKAyOXc"

function CustomMap(props) {
  console.log(props.maps)
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`} loadingElement={<div style={{ height: "100%" }} />} containerElement={<div style={{ height: "100%" }} />} mapElement={<div style={{ height: "100%" }} />} />
    </div>
  )
}

function MapComponent(props) {
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.921879, lng: -87.652496 }}>
      <Marker position={{ lat: 41.921879, lng: -87.652496 }} />
    </GoogleMap>
  )
}

export default CustomMap
