import { combineReducers } from "redux"

const user = (state = null) => state
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
const map = (state = []) => state

export default combineReducers({ user, isLoggedIn, listings, map })
