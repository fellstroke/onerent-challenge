import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomesList from '../adumb-comp'

import { fetchListData } from '../actions'

const mapStateToProps = (state) => {
  const { items, isFetching } = state.homesListData
  const { filterData } = state

  let filteredData = items
  
  if (filterData.includes('petsAllowed')) {
    filteredData = filteredData.filter((item) => {
      return item['petsAllowed'] === true
    })
    console.log(`CHAD, petsAllowed`)
  }

  if (filterData.includes('numberOfParkingSpots')) {
    filteredData = filteredData.filter((item) => {
      return item['numberOfParkingSpots'] !== null
    })
    console.log(`CHAD, parking`)
  }

  console.log(`CHAD, results ===>>> ${filteredData}`)

  return {
    filteredData,
    items,
    isFetching,
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
