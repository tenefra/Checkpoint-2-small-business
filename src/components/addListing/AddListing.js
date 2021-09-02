import React, { Component } from "react"
import { TextField, Button, Container } from "@material-ui/core"

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
      }
    }
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
              <TextField required onChange={this.handleNameChange} value={this.state.newListing.name} name="name" label="Name" type="text" />
              <TextField required onChange={this.handleAddressChange} value={this.state.newListing.address} name="address" label="Address" type="text" />
              <TextField required onChange={this.handleHoursChange} value={this.state.newListing.hours} name="hours" label="Hours (ex. 8AM - 9PM)" type="text" />
              <TextField required onChange={this.handleDescriptionChange} value={this.state.newListing.description} name="description" label="Description" type="text" />
              <Button type="submit" className="addlisting-form" variant="contained" color="primary">
                SAVE
              </Button>
            </form>
          </Container>
          {/* Google Map API map goes here */}
        </div>
      </>
    )
  }
}

export default AddListing
