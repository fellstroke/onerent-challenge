import React, { Component } from 'react'

import { Sdiv, CheckButton, HfCard} from '../../main-styles'

export default class HomesFilter extends Component {

  render() {
    const { isPetButtonActive, isParkingButtonActive, setButtonActive, setButtonInactive } = this.props

    const makeButton = (index, id, buttonActiveCheck) => {
      return (
        <CheckButton 
          onClick={
            (buttonActiveCheck)
              ? () => this.props.setButtonInactive(index, id)
              : () => this.props.setButtonActive(index, id)
          }
        ><label>{id}</label></CheckButton>
      )
    }

    return (
      <HfCard>
        <Sdiv>
          {makeButton(0, 'pets', isPetButtonActive)}
          {makeButton(1, 'parking', isParkingButtonActive)}
        </Sdiv>
      </HfCard>
    )
  }
}

