import React, { useEffect } from "react"
import { useParams } from "react-router"

import CustomMap from "../map/Map"
import "./detailsStyles.css"

function Details(props) {
  const { id } = useParams()
  const listing = props.listings.find(l => l.id == id)

  useEffect(() => {
    console.log(props.maps)

    props.fetchMarker(listing.address)
  }, [])

  return (
    <>
      {props.maps[0] == undefined ? null : (
        <container className="details-container">
          <h2 className="details-item">{listing.name}</h2>
          <h4 className="details-item">{listing.address}</h4>
          <h4 className="details-item">{listing.hours}</h4>
          <p className="details-item">{listing.description}</p>

          <CustomMap id={id} />
        </container>
      )}
    </>
  )
}

export default Details
