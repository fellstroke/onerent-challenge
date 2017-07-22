import React, { Component } from 'react'

import { Sli, HlCard, Hlp} from '../../main-styles'

export default class HomesList extends Component {

  componentDidMount() {
    this.props.fetchListData()
  }

  render() {
    const CreateItem = (items) => {
      return items.map((item) => {
        return (
          <Sli key={item.id}><Hlp>{item.address}</Hlp> <Hlp float='right'>${item.targetRent}</Hlp></Sli>
        )
      })
    }

    return (
      <HlCard>
        {this.props.isFetching
          ? <Sli>Loading...</Sli>
          : CreateItem(this.props.items)
        }
      </HlCard>
    )
  }
}
