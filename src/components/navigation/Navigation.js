import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { green } from "@material-ui/core/colors"

import "./navigationStyles.css"

const Navigation = props => {
  return (
    <>
      <AppBar className="AppBar" style={{ backgroundColor: green["A700"] }} position="relative">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Chicago Small Business
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Listings</Link>
            </li>
            {props.isLoggedIn ? (
              <li className="nav-list-item">
                <Link to="/addListing">Add</Link>
              </li>
            ) : null}
            {props.isLoggedIn ? (
              <li
                onClick={() => {
                  document.cookie = "loggedIn="
                  window.location.replace("/login")
                }}
                className="nav-list-item"
              >
                <Link to="/">LOGOUT</Link>
              </li>
            ) : (
              <li className="nav-list-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation
