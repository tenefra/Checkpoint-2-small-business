import React, { Component } from "react"
import { Redirect } from "react-router"
import cookie from "cookie"
import { TextField, Button, Container } from "@material-ui/core"

import "./loginStyles.css"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  handleTextChange = e => {
    console.log(this.props.user)
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = e => {
    e.preventDefault()

    this.props.addUser(this.state.username)

    document.cookie = "loggedIn=true;max-age=60*1000"
  }

  render() {
    return (
      <>
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField className="form-item" required onChange={this.handleTextChange} value={this.state.username} name="username" label="Username" type="text" />
            <TextField className="form-item" required onChange={this.handleTextChange} value={this.state.password} name="password" label="Password" type="password" />
            <Button className="form-item" type="submit" className="login-button" variant="contained" color="primary">
              Login
            </Button>
          </form>
        </Container>
      </>
    )
  }
}

export default Login
