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
  return dispatch => {
    fetch(`https://maps.google.com/maps/api/geocode/json?key=AIzaSyBEpQHHHkZyoFBQ78flP7iDmhdCEKAyOXc&address=${listing}`)
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
