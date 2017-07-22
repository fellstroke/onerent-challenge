import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesList from '../adumb-comp'

import { fetchListData } from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.homesListData.items,
    isFetching: state.homesListData.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListData: () => {
      dispatch(fetchListData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesList)
