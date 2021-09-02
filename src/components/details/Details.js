import React from "react"
import { useParams } from "react-router"

import "./detailsStyles.css"

function Details(props) {
  const { id } = useParams()
  const listing = props.listings.find(l => l.id == id)

  return (
    <>
      <container className="details-container">
        <h2 className="details-item">{listing.name}</h2>
        <h4 className="details-item">{listing.address}</h4>
        <h4 className="details-item">{listing.hours}</h4>
        <p className="details-item">{listing.description}</p>

        {/* map goes here */}
      </container>
    </>
  )
}

export default Details
