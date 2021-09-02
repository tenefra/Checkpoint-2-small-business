import { connect, Connect } from "react-redux"
import Login from "../components/login/Login"

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
