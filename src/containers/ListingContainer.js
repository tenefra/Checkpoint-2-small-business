import { connect, Connect } from "react-redux"
import Listing from "../components/listing/Listing"
import { removeListing } from "../redux/actions"

const mapStateToProps = state => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn,
    maps: state.maps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeListing: listing => dispatch(removeListing(listing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
