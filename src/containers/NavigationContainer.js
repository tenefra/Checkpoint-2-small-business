import { connect, Connect } from "react-redux"
import Navigation from "../components/navigation/Navigation"

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)
