import { connect, Connect } from "react-redux"
import Details from "../components/details/Details"

const mapStateToProps = state => {
  return {
    listings: state.listings,
    map: state.map
  }
}

export default connect(mapStateToProps)(Details)
