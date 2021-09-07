import React from "react"
import { withScriptjs, withGoogleMap } from "react-google-maps"

import AddListingMapComponent from "./AddListingMapComponent"

const WrappedMap = withScriptjs(withGoogleMap(AddListingMapComponent))
const API_KEY = process.env.REACT_APP_BUSINESS_API_KEY

function AddListingMap(props) {
  return (
    <div style={{ width: "40%", height: "400px", padding: "20px 80px 0 0" }}>
      <WrappedMap maps={props.maps} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`} loadingElement={<div style={{ height: "100%" }} />} containerElement={<div style={{ height: "100%" }} />} mapElement={<div style={{ height: "100%" }} />} />
    </div>
  )
}

export default AddListingMap
