import React, { Component } from 'react'

import { Sdiv, CheckButton, HfCard} from '../../main-styles'

export default class HomesFilter extends Component {

  render() {
    return (
      <HfCard>
        <Sdiv>
          <CheckButton 
            onClick={
              (this.props.isPetButtonActive)
                ? () => this.props.setButtonInactive(0)
                : () => this.props.setButtonActive(0)
            }
          ><label>Pets</label></CheckButton>
          <CheckButton 
            onClick={
              (this.props.isParkingButtonActive)
                ? () => this.props.setButtonInactive(1)
                : () => this.props.setButtonActive(1)
            }
          ><label>Parking Lots</label></CheckButton>
        </Sdiv>
      </HfCard>
    )
  }
}

