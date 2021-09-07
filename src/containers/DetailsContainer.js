import { connect } from "react-redux"
import Details from "../components/details/Details"
import { fetchMarker, clearMarker } from "../redux/actions"

const mapStateToProps = state => {
  return {
    listings: state.listings,
    maps: state.maps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarker: listing => dispatch(fetchMarker(listing)),
    clearMarker: maps => dispatch(clearMarker(maps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
