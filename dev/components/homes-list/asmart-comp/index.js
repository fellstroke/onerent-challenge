import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesList from '../adumb-comp'

import { fetchListData } from '../actions'

const mapStateToProps = (state) => {
  const { items, isFetching } = state.homesListData
  // const { activeFilters }

  // const filteredData = items.filter((item) => {
  //   return // Return filtered array of objects based on active filters
  // })

  return {
    items: items,
    isFetching: isFetching
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
