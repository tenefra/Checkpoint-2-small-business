import { connect, Connect } from "react-redux"
import Details from "../components/details/Details"
import { fetchMarker } from "../redux/actions"

const mapStateToProps = state => {
  return {
    listings: state.listings,
    maps: state.maps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarker: listing => dispatch(fetchMarker(listing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
