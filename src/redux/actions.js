export const addListing = listing => {
  return {
    type: "ADD_LISTING",
    value: listing
  }
}

export const removeListing = index => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}

export const addUser = user => {
  return {
    type: "ADD_USER",
    value: user
  }
}

export const removeUser = user => {
  return {
    type: "REMOVE_USER",
    value: user
  }
}

export const fetchMarker = listing => {
  const API_KEY = process.env.REACT_APP_BUSINESS_API_KEY
  return dispatch => {
    fetch(`https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&address=${listing}`)
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_MARKER",
          value: response.results[0].geometry.location
        }
        dispatch(action)
      })
  }
}

export const clearMarker = maps => {
  return {
    type: "CLEAR_MARKER",
    value: maps
  }
}
