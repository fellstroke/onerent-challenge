import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesFilter from '../adumb-comp'

import { setButtonActive, setButtonInactive, collectFilter, removeFilter } from '../actions'

const mapStateToProps = (state) => {
  return {
    isPetButtonActive: state.buttonData.buttons[0].isButtonActive,
    isParkingButtonActive: state.buttonData.buttons[1].isButtonActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    setButtonActive: (index, id) => {
      dispatch(setButtonActive(index))
      dispatch(collectFilter(index, id))
    },
    setButtonInactive: (index, id) => {
      dispatch(setButtonInactive(index))
      dispatch(removeFilter(index, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesFilter)