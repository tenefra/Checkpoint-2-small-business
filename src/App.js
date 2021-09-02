import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux/store"
import Router from "./Router"
import NavigationContainer from "./containers/NavigationContainer"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationContainer />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
