import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesFilter from '../adumb-comp'

import {
  setButtonActive,
  setButtonInactive,
  collectFilter,
  removeFilter,
  applyFilter
} from '../actions' 

const mapStateToProps = (state) => {
  const { buttons } = state.buttonData
  const { filterData } = state
  
  let isAppButtonActive = false
  if (
    filterData.includes('Refrigerator') ||
    filterData.includes('Freezer') ||
    filterData.includes('Oven/Range') ||
    filterData.includes('Dishwasher') ||
    filterData.includes('Garbage') ||
    filterData.includes('Disposal') ||
    filterData.includes('Microwave') ||
    filterData.includes('Stainless Steel Appliances') ||
    filterData.includes('Washer/Dryer') 
  ) {
    let isAppButtonActive = true
  }

  let isInFeatButtonActive = false
  if (
    filterData.includes('Hardwood Floors') ||
    filterData.includes('Granite Counters') ||
    filterData.includes('High/Vaulted Ceilings') ||
    filterData.includes('Stainless Steel Appliances')
  ) {
    let isInFeatButtonActive = true
  }

  return {
    isAppDDActive: buttons[1].isButtonActive,
    isAppButtonActive: isAppButtonActive,
    isInFeatDDActive: buttons[2].isButtonActive,
    isInFeatButtonActive: isInFeatButtonActive,
    isPetButtonActive: buttons[0].isButtonActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    setButtonActive: (index, name) => {
      dispatch(setButtonActive(index))
      dispatch(collectFilter(index, name))
    },
    setButtonInactive: (index, name) => {
      dispatch(setButtonInactive(index))
      dispatch(removeFilter(index, name))
    },
    setDropDownActive: (index) => {
      dispatch(setButtonActive(index))
    },
    setDropDownInactive: (index) => {
      dispatch(setButtonInactive(index))
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesFilter)