import React, { Component } from 'react'
<<<<<<< HEAD
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux';
=======
// import BandInput from './components/BandInput';
>>>>>>> c7d23877fb8d8e3d20d1a81a663a0db2b59d857b

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
