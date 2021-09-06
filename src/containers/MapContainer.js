import { connect } from "react-redux"
import CustomMap from "../components/map/Map"
import { fetchMarker } from "../redux/actions"

const mapStateToProps = state => {
  return {
    maps: state.maps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarker: listing => dispatch(fetchMarker(listing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomMap)
