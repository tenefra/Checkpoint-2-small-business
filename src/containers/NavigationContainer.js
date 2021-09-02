import { connect, Connect } from "react-redux"
import Navigation from "../components/navigation/Navigation"

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navigation)
