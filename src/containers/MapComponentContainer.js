import { connect, Connect } from "react-redux"
import MapComponent from "../components/map/MapComponent"

const mapStateToProps = state => {
  return {
    maps: state.maps
  }
}

export default connect(mapStateToProps)(MapComponent)
