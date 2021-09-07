import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { green, grey } from "@material-ui/core/colors"
import cookie from "cookie"

import "./navigationStyles.css"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const Navigation = props => {
  return (
    <>
      <AppBar style={{ backgroundColor: green["A700"] }} position="relative">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Chicago Small Business
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Listings</Link>
            </li>
            {checkAuth() ? (
              <li className="nav-list-item">
                <Link to="/addListing">Add</Link>
              </li>
            ) : null}
            {checkAuth() ? (
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

      {checkAuth() ? (
        <div className="UserBar" style={{ backgroundColor: grey[300] }} position="relative">
          <Typography variant="p" style={{ flexGrow: "1", color: grey[500] }}>
            Logged in as: {props.user}
          </Typography>
        </div>
      ) : null}
    </>
  )
}

export default Navigation
