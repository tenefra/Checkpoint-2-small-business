import React from "react"
import { Switch, Route, Redirect } from "react-router"
import cookie from "cookie"

import AddListingContainer from "./containers/AddListingContainer"
import DetailsContainer from "./containers/DetailsContainer"
import ListingContainer from "./containers/ListingContainer"
import LoginContainer from "./containers/LoginContainer"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (checkAuth() ? <Component {...props} /> : <Redirect to="/" />)} />
}

const Router = () => {
  return (
    <Switch>
      <ProtectedRoute path="/addlisting" component={AddListingContainer} />
      <Route path="/details/:id">
        <DetailsContainer />
      </Route>
      <Route path="/login">
        <LoginContainer />
      </Route>
      <Route path="/">
        <ListingContainer checkAuth={checkAuth} />
      </Route>
    </Switch>
  )
}

export default Router
