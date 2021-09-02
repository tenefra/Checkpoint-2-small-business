import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import Delete from "@material-ui/icons/Delete"
import { red } from "@material-ui/core/colors"

import "./listingStyles.css"

function Listing(props) {
  return (
    <>
      <main>
        <container>
          <div className="table-titles">
            <div className="one">Name</div>
            <div className="two">Description</div>
            <div className="three">Hours</div>
            <div className="four">Address</div>
            {props.checkAuth() ? <p className="details-item">Delete</p> : null}
          </div>
        </container>
        <hr />

        {props.listings.map(({ name, id, description, hours, address }, idx) => {
          return (
            <container>
              <div className="table-titles">
                <Link to={`/details/${id}`} className="one details-link">
                  <p>{name}</p>
                </Link>
                <p className="two">{description}</p>
                <p className="three">{hours}</p>
                <p className="four">{address}</p>
                {props.checkAuth() ? <Delete className="five" onClick={e => props.removeListing(idx)} style={{ color: red[500] }}></Delete> : null}
              </div>
              <hr />
            </container>
          )
        })}
      </main>
    </>
  )
}

export default Listing
