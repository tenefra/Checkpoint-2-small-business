import React from "react"
import { useParams } from "react-router"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

import MapComponent from "./MapComponent"

const WrappedMap = withScriptjs(withGoogleMap(MapComponent))
const apiKey = ""

function CustomMap(props) {
  console.log(props.maps)
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`} loadingElement={<div style={{ height: "100%" }} />} containerElement={<div style={{ height: "100%" }} />} mapElement={<div style={{ height: "100%" }} />} />
    </div>
  )
}

export default CustomMap
