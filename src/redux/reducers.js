import { combineReducers } from "redux"

const user = (state = null, action) => {
  switch (action.type) {
    case "ADD_USER":
      let userState = [action.value]
      return userState
    case "REMOVE_USER":
      let newState = [...state]
      newState.splice(action.value, 1)
      return newState
    default:
      return state
  }
}

const isLoggedIn = (state = false) => state
const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [action.value, ...state]
    case "REMOVE_LISTING":
      let newState = [...state]
      newState.splice(action.value, 1)
      return newState
    default:
      return state
  }
}

const maps = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_MARKER":
      let mapState = [action.value]
      return mapState
    default:
      return state
  }
}

export default combineReducers({ user, isLoggedIn, listings, maps })
