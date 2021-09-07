import { connect } from "react-redux"
import Login from "../components/login/Login"
import { addUser } from "../redux/actions"

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
