import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesFilter from '../adumb-comp'

import { setButtonActive, setButtonInactive } from '../actions'

const mapStateToProps = (state) => {
  return {
    isPetButtonActive: state.buttonData.buttons[0].isButtonActive,
    isParkingButtonActive: state.buttonData.buttons[1].isButtonActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    setButtonActive: (id) => {
      dispatch(setButtonActive(id))
    },
    setButtonInactive: (id) => {
      dispatch(setButtonInactive(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesFilter)