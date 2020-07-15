import React from 'react';
import Navigation from './Navigation';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
      state: state.sidebar
    }
  }
let mapDispatchToProps = (dispatch) => {

    }



const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;