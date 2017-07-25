import React, { Component } from 'react'

import { Sli, HlCard, Hlp} from '../../main-styles'

export default class HomesList extends Component {

  componentDidMount() {
    const { fetchListData } = this.props // DISPATCH
    
    fetchListData()
  }

  render() {
    const { items, isFetching, filteredData } = this.props // STATE

    const CreateItem = (items) => {
      return items.map((item) => {
        return (
          <Sli key={item.id}><Hlp>{item.address}</Hlp> <Hlp float='right'>${item.targetRent}</Hlp></Sli>
        )
      })
    }

    const Test = (filteredData) => {
      return filteredData.map((filteredDatum) => {
        return (
          <Sli key={filteredDatum.id}><Hlp>{filteredDatum.address}</Hlp> <Hlp float='right'>${filteredDatum.targetRent}</Hlp></Sli>
        )
      })
    }

    return (
      <HlCard>
        {isFetching
          ? <Sli>Loading...</Sli>
          : Test(filteredData) // CreateItem(items) //
        }
      </HlCard>
    )
  }
}
