import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import Delete from "@material-ui/icons/Delete"
import { red } from "@material-ui/core/colors"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import "./listingStyles.css"

function Listing(props) {
  useEffect(() => {
    props.clearMarker()
  }, [])

  return (
    <>
      <main>
        <TableContainer>
          <Table style={{ minWidth: "650" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "16px" }}>Name</TableCell>
                <TableCell style={{ fontSize: "16px" }} align="left">
                  Description
                </TableCell>
                <TableCell style={{ fontSize: "16px" }} align="left">
                  Hours
                </TableCell>
                <TableCell style={{ fontSize: "16px" }} align="left">
                  Address
                </TableCell>
                {props.checkAuth() ? (
                  <TableCell style={{ fontSize: "16px" }} align="left">
                    Delete
                  </TableCell>
                ) : null}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listings.map(({ name, id, description, hours, address }, idx) => {
                return (
                  <TableRow key={name}>
                    <TableCell style={{ fontSize: "16px" }} component="th" scope="row">
                      <Link to={`/details/${id}`} className="details-link">
                        <strong>{name}</strong>
                      </Link>
                    </TableCell>
                    <TableCell style={{ fontSize: "16px" }} align="left">
                      {description}
                    </TableCell>
                    <TableCell style={{ fontSize: "16px" }} align="left">
                      {hours}
                    </TableCell>
                    <TableCell style={{ fontSize: "16px" }} align="left">
                      {address}
                    </TableCell>
                    {props.checkAuth() ? (
                      <TableCell style={{ fontSize: "16px" }} align="left">
                        <Delete className="five" onClick={e => props.removeListing(idx)} style={{ color: red[500] }}></Delete>
                      </TableCell>
                    ) : null}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  )
}

export default Listing
