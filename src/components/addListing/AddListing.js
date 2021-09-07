import React, { Component } from "react"
import { TextField, Button, Container } from "@material-ui/core"
import { History, withRouter } from "react-router-dom"

import "./addListingStyles.css"

import AddListingMap from "./AddListingMap"

class AddListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newListing: {
        name: "",
        id: this.props.listings.length + 1,
        description: "",
        hours: "",
        address: ""
      },
      coordinates: {
        lat: 41.8757,
        lng: -87.6243
      }
    }
  }

  componentDidUpdate = () => {
    // const API_KEY = process.env.REACT_APP_BUSINESS_API_KEY
    // fetch(`https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&address=${this.state.newListing.address}`)
    //   .then(res => res.json())
    //   .then(response => {
    //     if (response.results[0] == undefined) {
    //       return
    //     } else {
    //       console.log(response.results[0].geometry.location)
    //       this.setState({
    //         coordinates: response.results[0].geometry.location
    //       })
    //     }
    //   })
  }

  handleNameChange = e => {
    this.setState({
      newListing: { ...this.state.newListing, name: e.target.value }
    })
  }
  handleAddressChange = e => {
    this.setState({
      newListing: { ...this.state.newListing, address: e.target.value }
    })
  }
  handleHoursChange = e => {
    this.setState({
      newListing: { ...this.state.newListing, hours: e.target.value }
    })
  }
  handleDescriptionChange = e => {
    this.setState({
      newListing: { ...this.state.newListing, description: e.target.value }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addListing(this.state.newListing)
    this.props.history.push("/")

    this.setState({
      newListing: {}
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <Container maxWidth="sm">
            <form onSubmit={e => this.handleSubmit(e)} className="addlisting-form">
              <TextField required style={{ width: "100%" }} onChange={this.handleNameChange} value={this.state.newListing.name} name="name" label="Name" type="text" />
              <TextField required style={{ width: "100%" }} onChange={this.handleAddressChange} value={this.state.newListing.address} name="address" label="Address" type="text" />
              <TextField required style={{ width: "100%" }} onChange={this.handleHoursChange} value={this.state.newListing.hours} name="hours" label="Hours (ex. 8AM - 9PM)" type="text" />
              <TextField required style={{ marginBottom: "20px", width: "100%" }} onChange={this.handleDescriptionChange} value={this.state.newListing.description} name="description" label="Description" type="text" />
              <Button style={{ width: "50%" }} type="submit" className="addlisting-form" variant="contained" color="primary">
                SAVE
              </Button>
            </form>
          </Container>
          <AddListingMap maps={this.state.coordinates} />
        </div>
      </>
    )
  }
}

export default withRouter(AddListing)
