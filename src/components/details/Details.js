import React, { useEffect } from "react"
import { useParams } from "react-router"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

import CustomMap from "../map/Map"
import "./detailsStyles.css"

function Details(props) {
  const { id } = useParams()
  const listing = props.listings.find(l => l.id == id)
  const { lat, lng } = props.maps[0]

  useEffect(() => {
    console.log(props.maps)
    console.log(lat)
    console.log(lng)
    console.log(listing.address)
    props.fetchMarker(listing.address)
  }, [])

  return (
    <>
      <container className="details-container">
        <h2 className="details-item">{listing.name}</h2>
        <h4 className="details-item">{listing.address}</h4>
        <h4 className="details-item">{listing.hours}</h4>
        <p className="details-item">{listing.description}</p>

        <CustomMap id={id} />
      </container>
    </>
  )
}

export default Details
