import React, { Component } from 'react'

import { HlLi, Sdiv, CheckButton, HfCard, HlDropDown } from '../../main-styles'

export default class Button extends Component {
  render() {
    const {
      setButtonActive,
      setButtonInactive,
    } = this.props

    const {
      index,
      name,
      buttonActiveCheck,
      children
    } = this.props

    return (
      <CheckButton 
        active = { buttonActiveCheck ? true : false }
        onClick = {
          (buttonActiveCheck)
            ? () => this.props.setButtonInactive(index, name)
            : () => this.props.setButtonActive(index, name)
        }
      >
        <h2>{name}</h2>
      </CheckButton>
    )
  }
}
